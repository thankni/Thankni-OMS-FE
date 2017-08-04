require('./check-versions')()
var config = require('../config')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var opn = require('opn')
// http-proxy可以实现转发所有请求代理到后端真实API地址，以实现前后端开发完全分离
// 在config/index.js中可以对proxyTable进行配置
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var port = process.env.PORT || config.dev.port

// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

// 将编译后的文件暂存到内存中
var devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: webpackConfig.output.publicPath,
	quiet: true,
    stats: {
	    colors: true
	}
})

// 热加载使用webpack-dev-middleware在没有webpack-dev-server的时候进行热加载
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
		log: () => {}
	})

// 当html-webpack-plugin模板改变是强制页面重新加载
compiler.plugin('compilation', function(compilation) {
	compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
		hotMiddleware.publish({
			action: 'reload'
		})
		cb()
	})
})

// proxy api requests
Object.keys(proxyTable).forEach(function(context) {
	var options = proxyTable[context]
	if (typeof options === 'string') {
		options = {
			target: options
		}
	}
	app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function() {
	console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function(err) {
	if (err) {
		console.log(err)
		return
	}
})

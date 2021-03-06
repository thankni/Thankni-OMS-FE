const CONST = {
  DEVELOPMENT: {
    OMS: 'http://api.local.com/api1',
    SERVER_2: 'http://api.local.com/api2',
    IMAGE: 'http://image.thankni.com',
    QINIU_HB: 'http://upload-z1.qiniu.com',
    QINIU_RS: 'http://rs.qiniu.com'
  },
  TEST: {
    OMS: 'http://api.test.com/api1',
    SERVER_2: 'http://api.test.com/api2',
    IMAGE: 'http://image.thankni.com',
    QINIU_HB: 'http://upload-z1.qiniu.com',
    QINIU_RS: 'http://rs.qiniu.com'
  },
  PRODUCTION: {
    OMS: 'http://api.online.com/api1',
    SERVER_2: 'http://api.online.com/api2',
    IMAGE: 'http://image.thankni.com',
    QINIU_HB: 'http://upload-z1.qiniu.com',
    QINIU_RS: 'http://rs.qiniu.com'
  }
}

export default CONST[process.env.NODE_ENV.toUpperCase().toString()]

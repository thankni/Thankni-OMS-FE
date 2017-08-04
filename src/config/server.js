const CONST = {
  DEVELOPMENT: {
    SERVER_1: 'http://api.local.com/api1',
    SERVER_2: 'http://api.local.com/api2'
  },
  TEST: {
    SERVER_1: 'http://api.test.com/api1',
    SERVER_2: 'http://api.test.com/api2'
  },
  PRODUCTION: {
    SERVER_1: 'http://api.online.com/api1',
    SERVER_2: 'http://api.online.com/api2'
  }
}

export default CONST[process.env.NODE_ENV.toUpperCase().toString()]

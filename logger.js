const winston = require('winston')

//Remember: npm install winston 

//This is inspired by this article: http://tostring.it/2014/06/23/advanced-logging-with-nodejs/
//but slightly changed and updated to use the API of the newest version of Winston

var logger = winston.createLogger({
  transports: [
      new winston.transports.File({
          level: 'info',
          filename: './logs/all-logs.log',
          handleExceptions: true,
          json: true,
          maxsize: 5242880, //5MB
          maxFiles: 5,
          colorize: false
      }),
      new winston.transports.Console({
          level: 'debug',
          handleExceptions: true,
          json: false,
          colorize: true
      })
  ],
  exitOnError: false
})

logger.stream = {
  write: function(message, encoding){
      logger.info(message+" just checking if i see it");
  }
};

module.exports=logger;
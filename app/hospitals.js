var mysqlMgr = require('./mysql').mysqlMgr,
  util=require('util');
exports.hosbitalMgr = {
    getHosbitall : function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT  *  FROM `hosbitalls` ',  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

};
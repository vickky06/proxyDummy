const { set } = require('lodash');
module.exports = {

    setHeadersForGet: (req, res, next) => {
        console.log('setHeaders running');
        try {
            /**
              * SET HEADER BEFORE REDIRECTIN  :  https://stackoverflow.com/questions/39997413/how-to-pass-headers-while-doing-res-redirect-in-express-js
          * res.set({'headerName': 'headerValue' })
             */
            console.log(JSON.stringify(req.headers), "headers");
            set(req, ["headers", "temp"], `NO`);
            set(req, ["headers", "newHeaderGet"], `header set at ${new Date().getUTCDate()}`);
            next();
        } catch (e) {
            console.log(e);
            res.status(500).send({
                error: 'Please authenticate'
            })
        }
    },
    setHeadersForPost: (req, res, next) => {
        set(req, ["headers", "newHeaderPost"], `header set at ${new Date().getUTCDate()}`);
        next();
    }
};
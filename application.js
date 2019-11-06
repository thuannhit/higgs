var express = require('express');
const helmet = require('helmet');

const PORT = process.env.PORT || 3000;
var app = express();
app.use(helmet());

var router = express.Router();
console.log("running");
router.use('/', (res, req, next) => {
    console.log('Request URL:', req.originalUrl)
    next()
}, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})

app.use('/', router.AnalysisRouter);
app.use('/', router.TraceAnalysisRouter);
app.listen(PORT, () => {

    console.log(`Listening on http://localhost:${PORT}`);
});

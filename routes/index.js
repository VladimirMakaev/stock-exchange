/*
* GET home page.
*/
function index(req, res) {
    res.render('index', {
        title: 'Express Updated to TypeScript'
    });
}
exports.index = index;
;

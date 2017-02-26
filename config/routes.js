// config/routes.js

module.exports = function(app) {
  // =====================================
  // Public pages
  // =====================================
  app.get('/', function(req, res) {
    res.render('pages', {
      title: 'Home'
    });
  });
};
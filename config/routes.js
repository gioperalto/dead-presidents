// config/routes.js

module.exports = {
  // =====================================
  // Public pages
  // =====================================
  app.get('/', isLoggedIn, function(req, res) {
    res.render('pages', {
      title: 'Home'
    });
  });
};
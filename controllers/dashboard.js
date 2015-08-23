/**
 * GET /dashboard
 * Dashboard page.
 */

exports.getDashboard = function(req, res) {
  if (req.user) return res.redirect('/');
  res.render('dashboard/dashboard', {
    title: 'Dashboard'
  });
};


exports.getCauses = function(req, res) {
  if (req.user) return res.redirect('/');
  res.render('dashboard/causes', {
    title: 'Causes'
  });
};


exports.getKarmaboard = function(req, res) {
  if (req.user) return res.redirect('/');
  res.render('dashboard/scoreboard', {
    title: 'Karmaboard'
  });
};
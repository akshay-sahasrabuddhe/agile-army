const postRoutes = require('./pages');
const path = require('path');

const constructorMethod = (app) => {
  app.use('/', postRoutes);
  //app.use('/search', postRoutes);

  // app.use('*', (req, res) => {
  //   res.status(404).render('pages/errors',{ title: "Error Page",errors: "Resource not found."});
  // });
};

module.exports = constructorMethod;
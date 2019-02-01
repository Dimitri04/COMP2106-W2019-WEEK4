const express = require('express');
const router = express.Router();
const articles = require('../meta/articles');

router.get('/:id', function(req, res, next) {
  const id = Number(req.params.id);
  const article = articles.find(function(article) {
    return article.id === id;
  });

  if (!article) {
    return next();
  }

  return res.render('article', {
    article
  });
});

module.exports = router;

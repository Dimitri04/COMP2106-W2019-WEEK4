var express = require('express');
var router = express.Router();
const tags = require('../meta/tags');
const articles = require('../meta/articles');

/* GET users listing. */
router.get('/:slug', function(req, res, next) {
  const slug = req.params.slug;
  const isValidSlug = tags.some(function(tag) {
    return tag.slug === slug;
  });

  if (!isValidSlug) {
    return next(new Error('Invalid Slug'));
  }

  const taggedArticles = articles.filter(function(article) {
    const articleTags = article.tags;
    return articleTags.includes(slug);
  });

  return res.render('tags', {
    title: `Tag: ${slug}`,
    articles: taggedArticles
  });
});

module.exports = router;

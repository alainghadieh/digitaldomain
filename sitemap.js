const sitemap = require('sitemap');
const hostname = 'https://www.digitaldomain.dev';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/website-design-and-seo-services', changefreq: 'daily', priority: 1 },
  { url: '/portfolio', changefreq: 'daily', priority: 1 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});

const fs = require('fs');

// Write sitemap to public directory
fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());
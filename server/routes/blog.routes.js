const express = require('express');
const router = express.Router();
const { getAllBlogs } = require('')

router.get('/', getAllBlogs);

module.exports = router
const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

router.get('/v0-1/index', function(req, res) {
	res.render('v0-1/index')
})

router.get('/v0-1/signing-in', function(req, res) {
	res.redirect('/v0-1/your-cases')
})

router.get('/v0-1/0-1-add-new-case', function(req, res) {
	res.redirect('/v0-1/add-new-case')
})

router.get('/v0-1/0-1-about-you', function(req, res) {
	res.redirect('/v0-1/about-you')
})

router.get('/v0-1/sending-about_you', function(req, res) {
	res.redirect('/v0-1/about-spend')
})

router.get('/v0-1/sending-about-spend', function(req, res) {
	res.redirect('/v0-1/digital-tech-task-list')
})


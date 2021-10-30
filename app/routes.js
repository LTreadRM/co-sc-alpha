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

router.get('/v0-1/request-key-contacts', function(req, res) {
	res.redirect('/v0-1/digital-tech-key-contacts')
})

router.get('/v0-1/sending-key-contacts', function(req, res) {
	res.redirect('/v0-1/digital-tech-task-list')
})

router.get('/v0-1/request-spend-details-approvals', function(req, res) {
	res.redirect('/v0-1/spend-details-approvals-1')
})

router.get('/v0-1/sending-spend-details-approvals-1', function(req, res) {
	res.redirect('/v0-1/spend-details-approvals-2')
})

router.get('/v0-1/sending-spend-details-approvals-2', function(req, res) {
	res.redirect('/v0-1/spend-details-approvals-3')
})

router.get('/v0-1/sending-spend-details-approvals-3', function(req, res) {
	res.redirect('/v0-1/spend-details-approvals-4')
})

router.get('/v0-1/sending-spend-details-approvals-4', function(req, res) {
	res.redirect('/v0-1/spend-details-approvals-5')
})

router.get('/v0-1/sending-spend-details-approvals-5', function(req, res) {
	res.redirect('/v0-1/digital-tech-task-list')
})



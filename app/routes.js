const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

function initialiseVariables(req) {
	console.log("Initialising variables now")
	req.session.data['key_contacts'] = []
	req.session.data['critical_events'] = []
	req.session.save()
	req.session.data['activeFlag'] = true
	req.session.save()
}

function checkIfActive(req) {
if (req.session.data['activeFlag'] == undefined || req.session.data['activeFlag'] == false) {
	initialiseVariables(req)
	}
}

router.get('/v0-1/index', function(req, res) {
	checkIfActive(req)
	req.session.save()
	res.render('v0-1/index')
})

router.get('/v0-1/signing-in', function(req, res) {
	res.redirect('/v0-1/your-cases')
})

router.get('/v0-1/0-1-add-new-case', function(req, res) {
	checkIfActive(req)
	req.session.save()
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
	checkIfActive(req)
	req.session.save()
	res.render('v0-1/digital-tech-key-contacts-2a')
})

router.get('/v0-1/adding-key-contact', function(req, res) {
	/* check variables are initialised, if not, force */
	checkIfActive(req)
	/* take details from post and add to array of contacts */
	var blob = []
	blob.push(req.session.data['full-name'])
	blob.push(req.session.data['role'])
	blob.push(req.session.data['email'])
	blob.push(new Date().toLocaleDateString())
	req.session.data['key_contacts'].push(blob)
	req.session.save()
	res.redirect('/v0-1/digital-tech-key-contacts-2a')
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
	res.redirect('/v0-1/spend-details-approvals-5a')
})

router.get('/v0-1/sending-spend-details-approvals-5', function(req, res) {
	res.redirect('/v0-1/digital-tech-task-list')
})

router.get('/v0-1/sending-spend-details-approvals-5a', function(req, res) {
	/* May need to store these or perform other actions? */
	checkIfActive(req)
	res.redirect('/v0-1/digital-tech-task-list')
})

router.get('/v0-1/sending-spend-details-approvals-5b', function(req, res) {
	/* Add details to array */
	checkIfActive(req)
	/* Get data and add to variable */
	var blob = []
	blob.push(req.session.data['critical-date-day'] + '/' + req.session.data['critical-date-month'] + '/' + req.session.data['critical-date-year'])
	blob.push(req.session.data['digital-tech-describe-critical-date'])
	req.session.data['critical_events'].push(blob)
	req.session.save()
	res.redirect('/v0-1/spend-details-approvals-5a')
})

router.get('/v0-1/request-digital-tech-about-project', function(req, res) {
	res.redirect('/v0-1/digital-tech-about-project-1')
})

router.get('/v0-1/sending-about-project-10', function(req, res) {
	res.redirect('/v0-1/digital-tech-task-list')
})

router.get('/v0-1/sending-digital-tech-code-practice', function(req, res) {
	res.redirect('/v0-1/digital-tech-task-list')
})



const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

function initialiseVariables(req) {
	console.log("Initialising variables now")
	req.session.data['key_contacts'] = []
	req.session.data['critical_events'] = []
	req.session.data['costs'] = []
	req.session.data['conditions'] = []
	req.session.save()
	req.session.data['activeFlag'] = true

	blob = []
	blob.push('Digital and technology')
	blob.push('Strategy')
	blob.push('1. Discovery government strategy')
	blob.push('Ensure payment')
	blob.push('Description of condition. Lorem ipsum')
	blob.push('31 March 2022')
	blob.push('Yes')
	blob.push('A month before')
	blob.push('')
	blob.push('')
	req.session.data['conditions'] = [blob]
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

router.get('/v0-1/co-signing-in', function(req, res) {
	res.redirect('/v0-1/co-cases')
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
	blob.push(req.session.data['c-full-name'])
	blob.push(req.session.data['c-role'])
	blob.push(req.session.data['c-phone-number'])
	blob.push(req.session.data['c-email'])
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

router.get('/v0-1/sending-add-new-cost', function(req, res) {
	res.redirect('/v0-1/add-new-cost')
})

router.get('/v0-1/sending-digital-tech-cost-breakdown-1', function(req, res) {
	/* check variables are initialised */
	checkIfActive(req)
	/* grab page variables into a single variable */
	var blob = []
	blob.push(req.session.data['cost-year'])
	blob.push(req.session.data['approved-spend-amount'])
	blob.push(req.session.data['approved-spend-description'])
	blob.push(req.session.data['tech-capital-amount'])
	blob.push(req.session.data['tech-capital-description'])
	blob.push(req.session.data['tech-operational-amount'])
	blob.push(req.session.data['tech-operational-description'])
	blob.push(req.session.data['nontech-operational-amount'])
	blob.push(req.session.data['nontech-operational-description'])
	blob.push(req.session.data['exit-costs-amount'])
	blob.push(req.session.data['exit-costs-description'])
	blob.push(req.session.data['value-requested-amount'])
	blob.push(req.session.data['value-requested-description'])
	var total = parseFloat(req.session.data['approved-spend-amount']) + parseFloat(req.session.data['tech-capital-amount'])
			+ parseFloat(req.session.data['tech-operational-amount']) + parseFloat(req.session.data['nontech-operational-amount']) + 
			parseFloat(req.session.data['exit-costs-amount']) + parseFloat(req.session.data['value-requested-amount'])
	blob.push(total)
	/* add variables to appropriate initialised variable */
	req.session.data['costs'].push(blob)
	req.session.save()
	
	res.redirect('/v0-1/digital-tech-cost-breakdown-1')
})

router.get('/v0-1/requesting-digital-tech-check-your-answers', function(req, res) {
	checkIfActive(req)
	req.session.save()
	title = 'Check your answers before sending your application'
	res.render('v0-1/digital-tech-check-your-answers', {title: title})
})

router.get('/v0-1/getting-example-case', function(req, res) {
	checkIfActive(req)
	req.session.save()
	title = 'Case ref: dt43954589dsj'
	res.render('v0-1/digital-tech-check-your-answers', {title: title})
})

router.get('/v0-1/sending-co-conditions-required', function(req, res) {
	if (req.session.data['co-conditions-required'] == "no") {
		res.render('v0-1/co-check-no-conditions')
	} else {
		res.render('v0-1/co-apply-conditions')
	}
})

router.get('/v0-1/sending-add-new-condition', function(req, res) {
	res.redirect('/v0-1/co-add-new-condition')
})

router.get('/v0-1/sending-new-condition', function(req, res) {
	/* check variables are initialised */
	checkIfActive(req)
	/* grab page variables into a single variable */
	var blob = []
	blob.push(req.session.data['dd-control-area'])
	blob.push(req.session.data['dd-category'])
	blob.push(req.session.data['dd-condition'])
	blob.push(req.session.data['condition-name'])
	blob.push(req.session.data['condition-description'])
	blob.push(req.session.data['condition-review-date'])
	blob.push(req.session.data['co-conditions-notifications'])
	blob.push(req.session.data['notify-when'])
	blob.push(req.session.data['conditional-date'])
	blob.push(req.session.data[''])
	var total = parseFloat(req.session.data['approved-spend-amount']) + parseFloat(req.session.data['tech-capital-amount'])
			+ parseFloat(req.session.data['tech-operational-amount']) + parseFloat(req.session.data['nontech-operational-amount']) + 
			parseFloat(req.session.data['exit-costs-amount']) + parseFloat(req.session.data['value-requested-amount'])
	blob.push(total)
	/* add variables to appropriate initialised variable */
	req.session.data['conditions'].push(blob)
	req.session.save()
	
	res.redirect('/v0-1/co-apply-conditions')
})

router.get('/v0-1/sending-co-case-decision', function(req, res) {
	decision = req.session.data['co-case-decision']
	if (decision === "approve") {
		res.redirect('/v0-1/co-case-approved')
	} else if (decision === "conditions") {
		res.redirect('/v0-1/co-apply-conditions')
	} else if (decision === "reject") {
		res.redirect('/v0-1/co-case-rejected')
	} else {
		/* should not get here */
		res.redirect('/v0-1/co-example-case')
	}
})

router.get('/v0-1/sending-co-all-conditions', function(req, res) {
	checkIfActive(req)
	res.redirect('/v0-1/co-check-your-conditions')
})



'use strict';
const Alexa = require('alexa-sdk');
const protectiveIntent = require('./protectiveIntent');
const protocolIntent = require('./protocolIntent');
const propertyIntent = require('./propertyIntent');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
const APP_ID = 'amzn1.ask.skill.3fdf9436-7341-4264-9ae2-fa517c6cd13f';

const HELP_MESSAGE = "You can say tell me a space fact, or, you can say exit... What can I help you with?";
const HELP_REPROMPT = "What can I help you with?";
const STOP_MESSAGE = "Thank you for being safe! Goodbye!";

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    let alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        const speechOutput = "Welcome to Connected Lab";
        const reprompt = speechOutput;
        this.emit(':ask', speechOutput, reprompt);
    },
    'PropertyLookupIntent': function () {
        const propertyName = this.event.request.intent.slots.propertyname.value;
        const productName = this.event.request.intent.slots.productname.value;

        this.emit(':tell', propertyIntent.getProductProperty(productName, propertyName));
    },
    'ProtectiveGearLookupIntent': function () {
        const bodyPart= this.event.request.intent.slots.bodypart.value;
        const productName = this.event.request.intent.slots.productname.value;

		    this.emit(':tell', protectiveIntent.getProtective(productName , bodyPart));
    },
    'HazardLookupIntent': function () {
        const contact = this.event.request.intent.slots.contact.value;
        const productName = this.event.request.intent.slots.productname.value;
        const speechOutput = protocolIntent.getProtocol(productName, contact);

        console.log(`hazard lookup intent. property name ${propertyName} and product name ${productName}`);
        this.emit(':tell', speechOutput);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};

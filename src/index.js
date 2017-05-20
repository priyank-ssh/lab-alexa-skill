'use strict';
const Alexa = require('alexa-sdk');
const utils = require('./utils');
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
        const reprompt = "hm";
        // this.attributes['launch'] = "true";
        this.emit(':ask', speechOutput, reprompt);
    },
    'PropertyLookupIntent': function () {
        const productName = this.event.request.intent.slots.productname.value;
        const propertyNameSlot = this.event.request.intent.slots.propertyname;
        if (!propertyNameSlot) {
            console.log(`PropertyLookupIntent productName: ${productName}`);
            return propertyIntent.getAllProductProperties(productName, (err, resp) => {
                this.emit(':tell', resp);
            });
        }
        const propertyName = propertyNameSlot.value;
        console.log(`PropertyLookupIntent propertyName: ${propertyName}, productName: ${productName}`);

        propertyIntent.getProductProperty(productName, propertyName, (err, resp) => {
          this.emit(':tell', resp);
        });
    },
    'ProtectiveGearLookupIntent': function () {
        const bodyPart= this.event.request.intent.slots.bodypart.value;
        const productName = this.event.request.intent.slots.productname.value;
        const respType = Object.keys(this.attributes).length ? ':ask' : ':tell';
        console.log(`ProtectiveGearLookupIntent bodyPart: ${bodyPart}, productName: ${productName}, respType: ${respType}`);

	      protectiveIntent.getProtective(productName , bodyPart , (err, resp) => {
          this.emit(respType, resp);
        });
    },
    'HazardLookupIntent': function () {
        const bodyPart = this.event.request.intent.slots.bodypart.value;
        const productName = this.event.request.intent.slots.productname.value;
        console.log(`HazardLookupIntent bodyPart: ${bodyPart}, productName: ${productName}`);

        protocolIntent.getProtocol(productName, bodyPart, (err, resp) => {
            const reprompt = "Would you like us to find the closest Hospital?";
            const speechOutput = resp + " " + reprompt;
            this.emit(':ask', speechOutput, reprompt);
        });

    },
    'AddProductIntent': function () {
        const productName = this.event.request.intent.slots.productname.value;
        console.log(`Adding product name ${productName}`);
        let products = this.attributes['products'] || [];

        products.push(productName);
        this.attributes['products'] = utils.unique(products);
        this.emit(':ask', "Added. " + productName);
    },
    'RemoveProductIntent': function () {
        const productName = this.event.request.intent.slots.productname.value;
        console.log(`Removing product name ${productName}`);
        let products = this.attributes['products'] || [];

        this.attributes['products'] = utils.pop(products, productName);;
        this.emit(':ask', "Removing. " + productName);
    },
    'ListProductIntent': function () {
        console.log(`List Intent`);

        if (!this.attributes.products) {
            this.emit(':ask', "No products selected. Please sad add product.");
        }

        this.emit(':ask', "You have. " + this.attributes['products'].join(", "));
    },
    'AMAZON.YesIntent': function () {
        const speechOutput = "The closets hospital is: Mount Sinai Doctors - Brooklyn Heights Urgent Care";
        this.emit(':tell', speechOutput);
    },
    'AMAZON.NoIntent': function () {
        const speechOutput = "Best of luck.";
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

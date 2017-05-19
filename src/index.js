'use strict';
const Alexa = require('alexa-sdk');
const propertyLookup = require('./propertyLookup');
const protectiveIntent = require('./protectiveIntent');
// const slotMapping = require('./slotMapping');
const proctectiveClient = require('./proctectiveClient');
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
<<<<<<< HEAD
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
// TODO: @priyank
const productNamesToProductIds = {
  'cocaine hydrochloride': 'C5776',
  'abeitic acid':'0010',
  'sodium phosphate':'342483',
  'trizma base': 'T1503',
  'dichlorophene':'35992',
 'chloromethyl methyl sulfide':'C54007',
 'phenyl cyanate solution':'744417',
 'hydrogen bromide':'295418'
};

//=========================================================================================================================================
=======
>>>>>>> 11eb033fca42e930eb1fff6d71528725dab97bbf
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
        this.emit(':tell', 'hello lab');
    },
    'PropertyLookupIntent': function () {
        const propertyName = this.event.request.intent.slots.propertyname.value;
        const productName = this.event.request.intent.slots.productname.value;
        chemicalLookup("water", "boiling_point");

        this.emit(':tell', `property lookup intent. property name ${propertyName} and product name ${productName}`);
    },
    'ProtectiveGearLookupIntent': function () {
        const bodyPart= this.event.request.intent.slots.bodypart.value;
        // var itemName;
        // if (itemSlot && itemSlot.value) {
        //     itemName = itemSlot.value.toLowerCase();
        // }

        const productName = this.event.request.intent.slots.productname.value;
        // var factArr = data;
        // var factIndex = Math.floor(Math.random() * factArr.length);
        // var randomFact = factArr[factIndex];
        // var speechOutput = GET_FACT_MESSAGE + randomFact;
        // this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
        this.emit(':tell', `protective gear lookup intent. body part ${bodyPart} and product name ${productName}`);
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

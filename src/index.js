'use strict';
const Alexa = require('alexa-sdk');
const chemicalLookup = require('./chemicalLookup');
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
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
// TODO: @priyank
const productNamesToProductIds = {
  'cocaine hydrochloride': 'C5776',
  'TODO': 'TODO',
};

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
        // this.emit('GetNewFactIntent');
        this.emit(':tell', 'hello lab');
    },
    'GetProtectiveGearIntent': function () {

        this.emit(':tell', 'get protective gear to do');
    },
    'ChemicalLookupIntent': function () {
        chemicalLookup("water", "boiling_point");
        this.emit(':tell', 'get protective gear to do');
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

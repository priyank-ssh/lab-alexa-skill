'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = 'amzn1.ask.skill.3fdf9436-7341-4264-9ae2-fa517c6cd13f';

var SKILL_NAME = "Space Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a space fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
// TODO: @priyank
var productNamesToProductIds = {
  'cocaine hydrochloride': 'C5776',
  'abeitic acid':'0010',
  'sodium phosphate':'342483',
  'trizma base': 'T1503',
  'dichlorophene':'35992',
 'chloromethyl methyl sulfide':'C54007',
};

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        // this.emit('GetNewFactIntent');
        this.emit(':tell', 'hello lab');
    },
    'GetProtectiveGearIntent': function () {
        // var factArr = data;
        // var factIndex = Math.floor(Math.random() * factArr.length);
        // var randomFact = factArr[factIndex];
        // var speechOutput = GET_FACT_MESSAGE + randomFact;
        // this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
        this.emit(':tell', 'get protective gear to do');
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};

﻿'use strict';var Alexa = require('alexa-sdk');var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";var SKILL_NAME = 'Confucius Quotes';/** * Array containing space facts. */var FACTS = [    "Our greatest glory is not in never falling, but in rising every time we fall.",    "Everything has beauty, but not everyone sees it.",    "When anger rises, think of the consequences.",    "Chose a job you love, and you will never have to work a day in your life.",    "A man who has committed a mistake and doesn't correct it is committing another mistake.",    "Life is really simple, but men insist on making it complicated.",    "What you do not want others to do to you, do not do to others.",    "To put the world in order, we must first put the nation in order; to put the nation in order, we must put the family in order; to put the family in order, we must cultivate our personal life; and to cultivate our personal life, we must first set our hearts right.",    "Before you embark on a journey of revenge, dig two graves.",    "He who conquers himself is the mightiest warrior.",    "To be wronged is nothing unless you continue to remember it.",    "Everything has its beauty, but not everyone sees it.",    "To know what is right and not do it is the worst cowardice.",    "Silence is the true friend that never betrays."];exports.handler = function(event, context, callback) {    var alexa = Alexa.handler(event, context);    alexa.APP_ID = APP_ID;    alexa.registerHandlers(handlers);    alexa.execute();};var handlers = {    'LaunchRequest': function () {        this.emit('GetFact');    },    'GetNewFactIntent': function () {        this.emit('GetFact');    },    'GetFact': function () {        // Get a random space fact from the space facts list        var factIndex = Math.floor(Math.random() * FACTS.length);        var randomFact = FACTS[factIndex];        // Create speech output        var speechOutput = "Here's your quote: " + randomFact;        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)    },    'AMAZON.HelpIntent': function () {        var speechOutput = "You can say tell me a confucious quote, or, you can say exit... What can I help you with?";        var reprompt = "What can I help you with?";        this.emit(':ask', speechOutput, reprompt);    },    'AMAZON.CancelIntent': function () {        this.emit(':tell', 'Goodbye!');    },    'AMAZON.StopIntent': function () {        this.emit(':tell', 'Goodbye!');    }};
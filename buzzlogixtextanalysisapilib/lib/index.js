/**
  * @module BuzzlogixTextAnalysisAPILib
  *  
  * Buzzlogix's Text Analysis API.
  */

var configuration = require('./configuration'),
    TwittersentimentController = require('./Controllers/TwittersentimentController');
    KeywordsController = require('./Controllers/KeywordsController');
    ObjectivityController = require('./Controllers/ObjectivityController');
    SentimentController = require('./Controllers/SentimentController');


function initializer(){}

//Main functional components of BuzzlogixTextAnalysisAPILib
initializer.configuration = configuration;
initializer.TwittersentimentController = TwittersentimentController;
initializer.KeywordsController = KeywordsController;
initializer.ObjectivityController = ObjectivityController;
initializer.SentimentController = SentimentController;

//Main Models of BuzzlogixTextAnalysisAPILib

module.exports = initializer;
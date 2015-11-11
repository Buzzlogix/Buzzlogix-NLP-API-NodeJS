/**
  * @module BuzzlogixTextAnalysisAPILib
  *  
  * Smart Social Media Management Software and Text Analysis API.
  */

var configuration = require('./configuration'),
    ObjectivityController = require('./Controllers/ObjectivityController');
    SentimentController = require('./Controllers/SentimentController');
    TwittersentimentController = require('./Controllers/TwittersentimentController');


function initializer(){}

//Main functional components of BuzzlogixTextAnalysisAPILib
initializer.configuration = configuration;
initializer.ObjectivityController = ObjectivityController;
initializer.SentimentController = SentimentController;
initializer.TwittersentimentController = TwittersentimentController;

//Main Models of BuzzlogixTextAnalysisAPILib

module.exports = initializer;
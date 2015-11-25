/**
 * BuzzlogixTextAnalysisAPILib
 *
 * This file was automatically generated for buzzlogix by APIMATIC BETA v2.0 on 11/25/2015
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

var KeywordsController = {

    /**
     * The text should be provided as text/plain in the body
     * @param {string} body    Required parameter: Supply text to be classified.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    createReturnEnglishKeywords : function(body, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/keywords";
        
        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "apikey" : configuration.apikey
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            body :body,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 401) {
                    callback({errorMessage: "No API Key found in headers, body or querystring", errorCode: 401, errorResponse:response.body},null,context);
                }else if (response.statusCode == 403) {
                    callback({errorMessage: "Invalid authentication credentials", errorCode: 403, errorResponse:response.body},null,context);
                }else if (response.statusCode == 429) {
                    callback({errorMessage: "API rate limit exceeded", errorCode: 429, errorResponse:response.body},null,context);
                }else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * The text should be provided as multipart/form-data with the key 'text'. Files can be uploaded.
     * @param {string} body    Required parameter: Supply text to be classified.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    createReturnEnglishKeywordsForm : function(body, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/keywords/form";
        
        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "apikey" : configuration.apikey
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            body :body,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 401) {
                    callback({errorMessage: "No API Key found in headers, body or querystring", errorCode: 401, errorResponse:response.body},null,context);
                }else if (response.statusCode == 403) {
                    callback({errorMessage: "Invalid authentication credentials", errorCode: 403, errorResponse:response.body},null,context);
                }else if (response.statusCode == 429) {
                    callback({errorMessage: "API rate limit exceeded", errorCode: 429, errorResponse:response.body},null,context);
                }else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    }

};

module.exports = KeywordsController;
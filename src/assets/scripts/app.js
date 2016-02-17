(function(document) {
    "use strict";

    var app = document.querySelector("#app");
    var progressCount = 0;

    // Sets app default base URL
    app.baseUrl = window.location.pathname;
    if (window.location.port === '') {  // if production
        // Uncomment app.baseURL below and
        // set app.baseURL to '/your-pathname/' if running from folder in production
        // app.baseUrl = '/polymer-starter-kit/';
    }
    app.activeQuestion = "0";
    app.testing = false;
    app.items = [];
    app.progressCount = 0;

    function callback(data) {
        var cells = data.feed.entry;
        for (var i = 0; i < cells.length; i++) {
            var rowObj = {};
            rowObj.question = cells[i].title.$t;
            var rowCols = cells[i].content.$t.split(",");
            for (var j = 0; j < rowCols.length; j++) {
                var keyVal = rowCols[j].split(":");
                rowObj[keyVal[0].trim()] = keyVal[1].trim();
            }
            app.push("items", rowObj);
        }
    };

    // See https://github.com/Polymer/polymer/issues/1381
    window.addEventListener('WebComponentsReady', function() {
        // imports are loaded and elements have been registered
    });

    // Listen for template bound event to know when bindings
    // have resolved and content has been stamped to the page
    app.addEventListener('dom-change', function() {

        $.ajax({
            url:"https://spreadsheets.google.com/feeds/list/1l0lTM6bBNNTrTlRWWppG55vum5IfdQ5fZ-oU-j1wzhc/1/public/basic?alt=json",
            success: function(data){
                callback(data);
            }
        });

        var questions = document.querySelector("#questions");

        app._beginTest = function() {
            app.testing = true;
        }

        app.$.screens.addEventListener("endTest", function(event) {
            var totalItems = app.items.length;
            progressCount++;
            var percentage = (progressCount / totalItems) * 100;
            app.testing = false;
            if(percentage <= 100) {
                app.$.questions.progress = percentage;
            }
        });

    });

})(document);

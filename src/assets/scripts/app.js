(function(document) {
    "use strict";

    var app = document.querySelector("#app");
    var progressCount = 0;

    function importComponent(container, name) {
        app.importHref("/assets/components/reviews/review-one", function(event) {
            var component = document.createElement("review-one");
            Polymer.dom(this.root).querySelector("#" + container).appendChild(component);
        }, function(event) {
            console.log(event);
        });
    }

    // Sets app default base URL
    app.baseUrl = window.location.pathname;
    if (window.location.port === '') {  // if production
        // Uncomment app.baseURL below and
        // set app.baseURL to '/your-pathname/' if running from folder in production
        // app.baseUrl = '/polymer-starter-kit/';
    }

    // See https://github.com/Polymer/polymer/issues/1381
    window.addEventListener('WebComponentsReady', function() {
        // imports are loaded and elements have been registered
    });

    // Listen for template bound event to know when bindings
    // have resolved and content has been stamped to the page
    app.addEventListener('dom-change', function() {

        var ref = new Firebase("https://projectcadmus.firebaseio.com/");
        // Attach an asynchronous callback to read the data at our posts reference
        ref.on("value", function(snapshot) {
            app.tests = snapshot.val().tests;
            }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });

    });

})(document);

if(typeof(sunlaud) == 'undefined') var sunlaud = {};
if(!sunlaud.firetabs) sunlaud.firetabs = {};


(function() {

    const log = {
        debug: function(msg) {
            Application.console.log("extension firetabs: " + msg);
        },
        error: function(msg) {
            Components.utils.reportError("extension firetabs: " + msg);
        }
    };

    /* get localized string by name */
    function getString(name) {
        try {
            return document.getElementById("firetabs_stringBundle").getString(name);
        } catch (ex) {
            log.error("failed to get translation for: " + name + ", details:\n" + ex);
        }
        // fall off: if no translation - use the label after last dot
        var lastDotIndex = name.lastIndexOf(".");
        return (lastDotIndex > 0) ? name.substr(lastDotIndex + 1) : name;
    }

    sunlaud.firetabs.Utils = {
        getString: getString,
        log: log
    };

})();



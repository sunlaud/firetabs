if(typeof(sunlaud) == 'undefined') var sunlaud = {};
if(!sunlaud.firetabs) sunlaud.firetabs = {};


(function() {

    const appMainPage = "chrome://firetabs/content/frontend/firetabs.html";


    function showTablist() {
        var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
                   .getService(Components.interfaces.nsIWindowMediator);
        var winEnumerator = wm.getEnumerator("navigator:browser");


        var winList = [];
        while(winEnumerator.hasMoreElements()) {
            var tabList = [];
            var win = winEnumerator.getNext();
            var tabs = win.getBrowser().browsers;
            for(var i=0; i<tabs.length; i++) {
                var doc = tabs[i].contentWindow.document;
                tabList.push({title: doc.title, url: doc.location.href});
            }
            winList.push(tabList);
        }
        var win = window.open(appMainPage, "", "location=yes,menubar=yes");
        win.opener = null;
        /* wait for window load, events onLoad can not be bind due to unknown reason */
        var timerId = setInterval(function() {
            if(win.document && win.document.body) {
                clearInterval(timerId);
                var embedScript = win.document.createElement('script');
                embedScript.setAttribute("type","text/javascript");
                embedScript.innerHTML = "var winList = " + JSON.stringify(winList);
                win.document.getElementsByTagName("head")[0].appendChild(embedScript);
                //~ win.buildWinTabList();
            }
        }, 100);
        //alert("test: " + getString("firetabs.test") + " - " + getString("firetabs.test.notranslate"));
    }



    sunlaud.firetabs.Firetabs = {
        init: function(e) {
            this.initialized = true;
        },
        open: function(e) {
            showTablist();
        }
    };

})();



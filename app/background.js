chrome.app.runtime.onLaunched.addListener(function() {

    var options = {
        'bounds': {
            // Something on Windows is wider
            'width': (navigator.appVersion.indexOf("Win") != -1) ? 260 : 250
        }
    };

    chrome.app.window.create('main.html', options);
});
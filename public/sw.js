// check serveice workder is supported
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw_cash_page.js').then(function(reg) {
        // registration worked
        console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
        // registration failed
        console.log('Registration failed with ' + error);
    });
}

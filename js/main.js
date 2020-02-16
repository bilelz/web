
  
  (function () {
    'use strict';

    var blog = fetch("https://blog.bilelz.fr/feeds/posts/default?alt=json");
    blog.then(function (response) {
        console.log('response', response);
        console.log('header', response.headers.get('Content-Type'));
        return response.json();
    }).then(function (json) {
        console.log('got text', json);
        
    }).catch(function (ex) {
        console.log('failed', ex);
    });
})();

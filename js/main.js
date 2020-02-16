(function() {
  "use strict";

/*   var blog = fetch("https://blog.bilelz.fr/feeds/posts/default?alt=json", {
    mode: "no-cors" // 'cors' by default
  });
  blog
    .then(function(response) {
      console.log("response", response);
      console.log("header", response.headers.get("Content-Type"));
      return response.blob();
    })
    .then(function(json) {
      console.log("got text", json);
    })
    .catch(function(ex) {
      console.log("failed", ex);
    }); */

    fetch("https://blog.bilelz.fr/feeds/posts/default?alt=json", {
        method: "GET",
        mode: "no-cors",
        headers: {
           "Content-Type": "application/json"
        },
        credentials: "include"
     })
     .then((response) => {
         console.log(response);
         try {
             JSON.parse(response)
         }
         catch(err){
             console.log("parsing err ",err)
         }
    })
    .catch((err)=>{
        console.log("err ",err)
    });
})();

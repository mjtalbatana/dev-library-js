//SELF-INVOKED FUNCTION

(function(){
  // PARAMETER INPUTS: =========================================================
  var parameters =
  [
    {
      "url_local": "../../dev-modules/greensock-js/greensock-js-1.20.4/src/minified/TweenMax.min.js",
      "url_cdn": "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js",
      "defer": null,
      "async": null
    },
    {
      "url_local": "../../dev-modules/greensock-js/greensock-js-1.20.4/src/minified/plugins/ScrollToPlugin.min.js",
      "url_cdn": "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/plugins/ScrollToPlugin.min.js",
      "defer": null,
      "async": null
    }
  ];




  // PLEASE DO NOT MODIFY ANYTHING PRECEEDING THIS LINE OF CODE =================
  //DECLARATIONS
  var script1 = document.createElement('script'),
      script2 = document.createElement('script'),
      script3 = document.createElement('script'),
      script4 = document.createElement('script'),
      script5 = document.createElement('script'),
      script6 = document.createElement('script'),
      scripts = [],
      address = window.location.origin;

  //LOCAL/WEB CHECK
  if(address.search('127.0.0.1') == -1 || address.search('localhost') == -1){
    address = 'localserver';
  } else{
    address = 'webserver';
  }

  //TYPE ASSIGNMENT
  script1.type = script2.type = script3.type = script4.type = script5.type = script6.type = 'application/javascript';

  //DEFER ASSIGNMENT
  script3.defer = script4.defer = script5.defer = script6.defer = true;

  //ASYNC ASSIGNMENT
  // node.async = true;


  if(address == 'localserver'){
    script1.src = "../../dev-modules/greensock-js/greensock-js-1.20.4/src/minified/TweenMax.min.js";
    script2.src = "../../dev-modules/greensock-js/greensock-js-1.20.4/src/minified/plugins/ScrollToPlugin.min.js";
  } else{
    script1.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js";
    script2.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/plugins/ScrollToPlugin.min.js";
  }

  script3.src = "assets/js/script.js";
  script4.src = "assets/layouts.js";
  script5.src = "assets/js/animation.js";
  script6.src = "assets/js/interactive.js";

  scripts = [script1, script2, script3, script4, script5, script6];
  for(l=0; l<scripts.length; l++){
    document.getElementsByTagName('head')[0].insertBefore(scripts[l],null);
  }
})();


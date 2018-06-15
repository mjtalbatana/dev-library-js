//SELF-INVOKED FUNCTION

(function(){
  // PARAMETER INPUTS: =========================================================
  var parameters =
  [
    {
      url_local: "../../dev-modules/greensock-js/greensock-js-1.20.4/src/minified/TweenMax.min.js",
      url_cdn: "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js",
      defer: null,
      async: null,
    },
    {
      url_local: "../../dev-modules/greensock-js/greensock-js-1.20.4/src/minified/plugins/ScrollToPlugin.min.js",
      url_cdn: "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/plugins/ScrollToPlugin.min.js",
      defer: null,
      async: null,
    }
  ];




  // PLEASE DO NOT MODIFY ANYTHING PRECEEDING THIS LINE OF CODE =================
  //DECLARATIONS
  var script = [],
      address = window.location.origin;

      script[1] =
      script[2] =
      script[3] =
      script[4] =
      script[5] =
      script[6] = document.createElement('script');


  //LOCAL/WEB CHECK
  if(address.search('127.0.0.1') === -1 || address.search('localhost') === -1){
    address = 'localserver';
  } else{
    address = 'webserver';
  }

  //TYPE ASSIGNMENT
  script[1].type =
  script[2].type =
  script[3].type =
  script[4].type =
  script[5].type =
  script[6].type = 'application/javascript';

  //DEFER ASSIGNMENT
  script[3].defer =
  script[4].defer =
  script[5].defer =
  script[6].defer = true;

  //ASYNC ASSIGNMENT
  // node.async = true;


  if(address == 'localserver'){
    script[1].src = "../../dev-modules/greensock-js/greensock-js-1.20.4/src/minified/TweenMax.min.js";
    script[2].src = "../../dev-modules/greensock-js/greensock-js-1.20.4/src/minified/plugins/ScrollToPlugin.min.js";
  } else{
    script[1].src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js";
    script[2].src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/plugins/ScrollToPlugin.min.js";
  }

  script[3].src = "assets/js/script.js";
  script[4].src = "assets/layouts.js";
  script[5].src = "assets/js/animation.js";
  script[6].src = "assets/js/interactive.js";

  for(l=0; l<script.length; l++){
    document.getElementsByTagName('head')[0].insertBefore(script[l],null);
  }
})();


//SELF-INVOKED FUNCTION

(function(){
  // PARAMETER INPUTS: =========================================================
    /*----------------------------
    FOR JAVASCRIPT
    {
      url_primary: null,
      url_cdn: null,
      defer: null,
      async: null
    },
    FOR NON-JAVASCRIPT
    {
      href_primary: null,
      href_cloud: null,
      rel: null,  // author, help, icon, license, stylesheet
      type: null, // MIME-classification
    },
    ----------------------------*/
  var parameter_a =
  [
    {
      url_primary: "../dev-modules/greensock-js/greensock-js-1.20.4/src/minified/TweenMax.min.js",
      url_cdn: "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js",
      defer: null,
      async: null
    },
    {
      url_primary: "../dev-modules/greensock-js/greensock-js-1.20.4/src/minified/plugins/ScrollToPlugin.min.js",
      url_cdn: "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/plugins/ScrollToPlugin.min.js",
      defer: null,
      async: null
    },
    {
      url_primary: "assets/js/script.js",
      url_cdn: null,
      defer: true,
      async: null
    },
    {
      url_primary: "assets/layouts.js",
      url_cdn: null,
      defer: true,
      async: null
    },
    {
      url_primary: "assets/js/animation.js",
      url_cdn: null,
      defer: true,
      async: null
    },
    {
      url_primary: "assets/js/interactive.js",
      url_cdn: null,
      defer: true,
      async: null
    },
    {
      url_primary: "../dev-library-js/imageloader.js",
      url_cdn: "https://raw.githubusercontent.com/mjtalbatana/dev-library-js/master/imageloader.js",
      defer: null,
      async: null
    },
    {
      url_primary: "../dev-library-js/arrayshuffle.js",
      url_cdn: "https://raw.githubusercontent.com/mjtalbatana/dev-library-js/master/arrayshuffle.js",
      defer: null,
      async: null
    },
    {
      url_primary: "../dev-library-js/linkloader.js",
      url_cdn: "https://raw.githubusercontent.com/mjtalbatana/dev-library-js/master/linkoader.js",
      defer: null,
      async: null
    },
  ],
    parameter_b =
  [
    {
      href_primary: "../dev-assets-common/mjta-v01.ico",
      href_cloud: "https://raw.githubusercontent.com/mjtalbatana/profile-logo/master/mjta-v01.ico",
      rel: "icon",
      type: "image/x-icon" // MIME-classification
    },
    {
      href_primary: "../dev-assets/font/NotoSans/NotoSans-Regular.ttf",
      href_cloud: "https://fonts.googleapis.com/css?family=Noto+Sans",
      rel: 'stylesheet',  // author, help, icon, license, stylesheet
      type: 'font/ttf', // MIME-classification
    },
  ]


  // PLEASE DO NOT MODIFY ANYTHING PRECEEDING THIS LINE OF CODE =================

  //DECLARATIONS-------------------------------------------------------------------------
  var temp = '';
      scripts = [],
      address = window.location.origin;

  //LOCAL/WEB CHECK----------------------------------------------------------------------
  if(address.search('127.0.0.1') == -1 || address.search('localhost') == -1){
    address = 'localserver';
  } else{
    address = 'webserver';
  }


  //MARKUP AND ATTRIBUTE BUILDER---------------------------------------------------------
  for(l=0; l<parameter_a.length; l++){
    // window['script'+l] = document.createElement('script');
    temp = document.createElement('script');
    temp.type = 'application/javascript';
    scripts.push(temp);

    if(parameter_a[l]['url_cdn'] != null && address == 'localserver'){
      temp.src = parameter_a[l]['url_primary'];
    } else if(parameter_a[l]['url_cdn'] != null && address == 'webserver'){
      temp.src = parameter_a[l]['url_cdn'];
    } else{
      temp.src = parameter_a[l]['url_primary'];
    }
    if(parameter_a[l]['defer'] != null){
      temp.defer = true;
    }
    if(parameter_a[l]['async'] != null){
      temp.async = true;
    }
  }

  // if(address == 'localserver'){
  //   script1.src = "../dev-modules/greensock-js/greensock-js-1.20.4/src/minified/TweenMax.min.js";
  //   script2.src = "../dev-modules/greensock-js/greensock-js-1.20.4/src/minified/plugins/ScrollToPlugin.min.js";
  // } else{
  //   script1.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js";
  //   script2.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/plugins/ScrollToPlugin.min.js";
  // }

  // script3.src = "assets/js/script.js";
  // script4.src = "assets/layouts.js";
  // script5.src = "assets/js/animation.js";
  // script6.src = "assets/js/interactive.js";

  for(l=0; l<scripts.length; l++){
    document.getElementsByTagName('head')[0].insertBefore(scripts[l],null);
  }
})();


//SELF-INVOKED FUNCTION [assetloader.js]
/*
compatibility:
 Laravel
 Static JavaScript

notes:
 data-array is placed statically at the <head><script> portion of the DOM
 markup may be partialized as long as the data & callout-function is enclosed together in a <script> element

*/
// PARAMETER INPUTS: ====================================================================
/*----------------------------
[
  FOR NON-JAVASCRIPT
  [
    {
      href:
      [
        null, // for multiple sources, index=0 is the localized path of the resource
        null,
      ],
      integrity: null,
      cross-origin: null,
      rel: null,  // author, help, icon, license, stylesheet
      type: null, // MIME-classification
    },
    {
      ...
    },
  ]

  FOR JAVASCRIPT
  [
    {
      src:
      [
        null, // for multiple sources, index=0 is the localized path of the resource
        null,
      ],
      integrity: null,
      cross-origin: null,
      defer: null,
      async: null
    },
    {
      ...
    }
  ]
]
----------------------------*/

// PLEASE DO NOT MODIFY ANYTHING PRECEEDING THIS LINE OF CODE ===========================

function assetloader(data){

  //DECLARATIONS-------------------------------------------------------------------------
  var temp = '',
      attrib = '',
      value = '',
      markup = [],
      mode = '',
      address = window.location.origin;

  //LOCAL/WEB CHECK----------------------------------------------------------------------
  if(address.search('127.0.0.1') == -1 || address.search('localhost') == -1){
    address = 'localserver';
  } else{
    address = 'webserver';
  }


  //MARKUP BUILDER----------------------------------------------------------------
  for(i=0; i<data.length; i++){
    if(i === 0){
      mode = 'href';
    } else{
      mode = 'src';
    }
    for(j=0; j<data[i].length; j++){
      if(i === 0){
        temp = document.createElement('link');
      } else{
        temp = document.createElement('script');
      }

      for(k=0; k<Object.keys(data[i][j]).length; k++){
        attrib = Object.keys(data[i][j])[k];

        if(k === 0){
          if(data[i][j][mode].length > 1 && address === 'localserver'){
            value = data[i][j][mode][0];
          } else if(data[i][j][mode].length > 1 && address === 'webserver'){
            value = data[i][j][mode][1];
          } else{
            value = data[i][j][mode][0];
          }
        } else{
          value = data[i][j][attrib];
        }
        temp.setAttribute(attrib, value);
      }
      markup.push(temp);
    }
  }

  //GENERATED-MARKUP INSERTION-----------------------------------------------------------
  for(l=0; l<markup.length; l++){
    document.getElementsByTagName('head')[0].insertBefore(markup[l],null);
  }
}


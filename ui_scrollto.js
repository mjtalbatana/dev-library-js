// requires GreenSock's ScrollTo Plug-in to function

function uiScrollTo(targetid){
  var selectors = document.getElementsByClassName('ui-scrollto'),
      body = document.getElementsByTagName('body')[0];

  for(l=0; l<data.length; l++){
    var tl1 = new TimelineMax({repeat: 0, delay: 0}),
        tl2 = new TimelineMax({repeat: 0, delay: 0});

    tl1.to(selectors[l], 1, {scrollTo: {y:'#'+targetid}});
    tl2.to(body, 1, {opacity: 0.2})
       .to(selectors[l], 0.25, {opacity: 1});
  }
}
/*

pre-requisites:
1. markup structures for images
1.1 Information images (figure sets the CSS-BOX dimensions)
<figure>
  <img
  data-...=""  -> static, required for referencing
  src=""  -> dynamically assigned via JavaScript
  alt="">  -> dynamically assigned via JavaScript
  <figcaption>text</figcaption>  -> dynamically assigned via JavaScript
</figure>

1.2 Containers set with background images
<div
class="bgimg"   -> required for DOM filtering
data-...=""  -> required for referencing
title="" -> dynamically assigned via JavaScript
style="background-image:url();"  -> dynamically assigned via JavaScript
>
...
</div>

1.3 Logo/brand/entity protected, centralized, & referenced images
<div
class="logoimg"  -> required for DOM filtering
data-...=""  -> required for referencing
title="" -> dynamically assigned via JavaScript
style="background-image:url();"  -> dynamically assigned via JavaScript (have two url sources for local & web)
>
...
</div>

data array (data are grouped as key)
data1 - images within <img> tag and enclosed with <figure> tag
data2 - captionless images set as background image (class="backimg")
data3 - asset icons/logos

{
  data1 =
  {
    'webheader':
    {
      'id':
      {
        'url': 'image-url',
        'title': 'image-title',
        'caption': 'image-caption'
      }
    }
  }

  data2 =
  {
    'webheader':
    {
      'id':
      {
        'url': 'url',
        'title': 'title'
      }
    }
  }

  data3 =
  {
    'id':
    {
      'url': 'url',
      'secondary': 'url',
      'title': 'title'
    }
  }

}

*/

function imageloader(data1,data2,data3){
  var dom_meta = document.querySelector('meta[name="webheader"]'),
      currenturl = window.location.href,
      webheader;

  if(dom_meta !== null){
    webheader = dom_meta.content;
  } else{
    if(currenturl.charAt(currenturl.length-1) === '/' || currenturl.search('index') !== -1){
      webheader = 'index';
    } else{
      webheader = currenturl.split('/')
      webheader = webheader[webheader.length-1];
      if(webheader.search('.') !== -1){
        webheader = webheader.split('.')[0];
      }
    }
  }

  if(data1 !== null){
    var webheaderref = Object.keys(data1);

    if(typeof(webheaderref.find(value => value === webheader)) !== undefined){
      var dom_figures = document.getElementsByTagName('figure');

      for(i=0; i < dom_figures.length; i++){
        var dom_image = dom_figures[i].querySelector('img');
        dom_image.src = data1[webheader][dom_image.id]['url'];
        dom_image.title =
        dom_image.alt = data1[webheader][dom_image.id]['title'];
      }
    }
  }

  if(data2 !== null){
    var target = 'bgimg',
        webheaderref = Object.keys(data2);

    if(typeof(webheaderref.find(value => value === webheader)) !== undefined){
      var dom_images = document.getElementsByClassName(target);

      for(i=0; i < dom_images.length; i++){
        var dom_image = dom_images[i];
        dom_image.style.backgroundImage = 'url(' + data2[webheader][dom_image.dataset[target]]['url'] + ')';
        dom_image.title = data2[webheader][dom_image.dataset[target]]['title'];
      }
    }
  }

  if(data3 !== null){
    var target = 'logoimg',
        dom_images = document.getElementsByClassName(target);

    for(i=0; i < dom_images.length; i++){
      var dom_image = dom_images[i];

      if(currenturl.search('127.0.0.1') !== -1 || currenturl.search('localhost') !== -1){
        dom_image.style.backgroundImage = 'url(' + data3[dom_image.dataset[target]]['local'] + ')';
      } else{
        dom_image.style.backgroundImage = 'url(' + data3[dom_image.dataset[target]]['url'] + ')';
      }

      dom_image.title = data3[dom_image.dataset[target]]['title'];
    }
  }
}
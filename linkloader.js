function linkLoader(data){
  var links = document.getElementsByClassName('link')

  // for(i=0; i < links.length; i++){
  //   var clone = links[i].cloneNode(false);

  //   links[i].removeAttribute('data-link');
  //   links[i].parentNode.appendChild(clone);
  //   links[i].className = links[i].className.replace('link', '');
  //   clone.id = clone.id + '-clone';
  //   // clone.removeAttribute('id');

  // }

  for(i=0; i < links.length; i++){
    links[i].addEventListener('click', function(){
      window.location.href = data[this.dataset.link];
    });
  }
}
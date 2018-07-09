var data

function uiEventLoader(data){
  var uievents = document.querySelector('.uievent');

  for(i=0; i<uievents.length; i++){
    uievents[i].addEventListener('click', function(){
      this.dataset.uievent;

    });
  }

}


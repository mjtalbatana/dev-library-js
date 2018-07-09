function fetchapi(array, action, targetid='snackbar'){
  /*
    $array =
    [
      url
      init

    ]
  */

  form =
  {
    // key: value;
  }


  url = 'urlpath.script'



  array = {
    method: "POST",
    credentials: "same-origin",
    /*
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
    */
  }

  var formData = new FormData();

  for(i in form){
    formData.append(i, form[i]);
  }

  fetch(url, {
    method: array['method'],
    body: formData,
    credentials: array['credentials']
  })
  .then(response => response.text())
  .then(function(response){
    var data = JSON.parse(response);
    /*
      data should be in form of associative array:
      array->sub0->datalist
      array->sub1->datalist
    */


    for(l=0; l<data.length; l++){
      for(k=0; k<data['sub'+l]; k++){
        //actions to datalists
      }
    }


    // ASYNC actions
    //

  })
  .catch(
    console.log('asynchronous fetch-API function failed!')
  );


}
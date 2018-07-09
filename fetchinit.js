//
/*
PARAMETER FORMAT:
url = urlpath;
config =
{
  //CUSTOM STABLE CONFIGURATION
  method: 'POST',             // *GET, POST, PUT, DELETE, etc.
  credentials: 'same-origin', // include, *same-origin, *omit
  cache: 'no-cache',          // *default, no-cache, reload, force-cache, only-if-cached
  mode: 'cors',               // no-cors, cors, *same-origin
  redirect: 'follow',         // manual, *follow, error
  referrer: 'no-referrer',    // *client, no-referrer
  headers: {
    'user-agent': 'Mozilla/4.0 MDN Example',
    'content-type': 'application/json',
  },
};

*/



var fetchInit = function(url, config, form){

  formData = new FormData();

  for(i in form){
    formData.append(i, form[i]);
  }

  config_ = config;
  config_['body'] = formData;

  data.push(url, config_);
  return data;
}

fetchInit(url, config, formData)
/*
FETCH PROMISES ARE ATTACHED HERE by:
.fetch(a,b)
.then(response => response.text())
.then(function(response)){
  var data = JSON.parse(response);
}




*/
function arrayShuffle(array){
  var length = array.length,
      arrayi_ref = [],
      arrayi_shuffle = [],
      array_new = [];

  for(i=0; i<length; i++){
    arrayi_ref.push(i);
  }
  for(i=0; i<length; i++){
    var n = parseInt(Math.random()*(arrayi_ref.length));
    arrayi_shuffle.push(arrayi_ref.splice(n,1));
  }
  for(i=0; i<length; i++){
    array_new.push(array[arrayi_shuffle[i][0]]);
  }
  return array_new;
}
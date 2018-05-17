function arrayShuffle(array){
  var length = array.length,
      arrayi_ref = [],
      arrayi_shuffle = [],
      array_new = [];

  for(l=0; l<length; l++){
    arrayi_ref.push(l);
  }
  for(l=0; l<length; l++){
    var n = parseInt(Math.random()*(arrayi_ref.length));
    console.log(n);
    arrayi_shuffle.push(arrayi_ref.splice(n,1));
    console.log('ref:'+arrayi_ref);
    console.log('gen:'+arrayi_shuffle);
  }
  for(l=0; l<length; l++){
    array_new.push(array[arrayi_shuffle[l][0]]);
  }
  return arrayi_shuffle;
}
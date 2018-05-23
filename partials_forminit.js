/*
PREREQUISITES:
- COMPLIANCE TO REF-MARKUP

FUNCTIONS:
- automatic attribute-value assignment for NAME-attribute in an INPUT-element
*/

function forminit(formid){
  var formid = document.getElementById(formid),
      fieldsets = formid.children;

  for(l=0; l<(fieldsets.length-1); l++){
    var inputs = formid.children[l].getElementsByTagName('input'),
        labels = formid.children[l].getElementsByTagName('label');

    for(k=0; k<inputs.length; k++){
      inputs[k].setAttribute('name', this.id);
    }
    for(k=0; k<labels.length; k++){
      labels[k].setAttribute('for', this.id);
    }
  }
}
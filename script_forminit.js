/*
PREREQUISITES:
- child elements inside the form limited at two-generations
- <input> elements should only be enclosed with <label> tag (not by using <label for="">)
- DOM tree structure:
    <form>
      <div class="grid">
        <label><input></label>
        <input>
        <input>
      </div>
    </form>
- element arrangements should be styled using CSS-grid

FUNCTIONS:
- automatic attribute-value assignment for NAME-attribute in an INPUT-element
*/

function forminit(formid){
  var inputs = document.getElementById('formid').children[0].getElementsByTagName('input');

  for(l=0; l<inputs.length; l++){
    inputs[l].setAttribute('name', this.id);
  }

}
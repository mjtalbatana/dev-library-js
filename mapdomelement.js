/*
PRE-REQUISITES:
- data should be a node representing a complete child nodes

tags:
id
dataset
classes
tagname

*/

function mapDOMElement(data){
  var node = {},
      nodeflag;

  // if()



}

function loop(node){
  for(i=0; i < data.children.length; i++){
    var dom_id = data.children[i].id,
        dom_dataset = data.children[i].dataset,
        dom_class = data.children[i].class,
        dom_tagname = data.children[i].tagName,
        dom_nodename = data.children[i].nodeName;

    if(dom_id != null){
      node[dom_id] = {};

    } else if(dom_dataset != null){
      node[dom_dataset] = {};

    } else if(dom_class != null){
      node[dom_class] = {};

    } else if(dom_tagname != null){
      node[dom_tagname] = {};

    } else{
      node[dom_nodename] = {};

    }

  }

}
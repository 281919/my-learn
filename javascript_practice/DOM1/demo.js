// function filterWaterNode(node){
//   var ret = [];
//   for (var i = 0 ; i < node.length ; i ++){
//     if(node[i].nodeType === 3 && /^\s+$/.test(node[i].nodeValue)){
//       continue;
//     }else{
//       ret.push(node[i]);
//     }
    
//   }
//   return ret;
// }

// function removeWaterNode(node){
//   for( var i = 0 ; i < node.length ; i++){
//     if (node[i].nodeType === 3 && /^\s+$/.test(node[i].nodeValue)){
//       node[i].parentNode.removeChild(node[i]); 
//     }
    
//   }
//   return node;

// }

//忽略空白字符

// function removeWaterNode(node){
//   for( var i = 0 ; i < node.childNodes.length ; i++){
//     if (node.childNodes[i].nodeType === 3 && /^\s+$/.test(node.childNodes[i].nodeValue)){
//       node.childNodes[i].parentNode.removeChild(node.childNodes[i]); 
//     }
    
//   }
//   return node;

// }


// this.alert(div.childNodes.length);
  // this.alert(filterWaterNode(div.childNodes).length);
  // this.alert(removeWaterNode(div).length);
  // this.alert(removeWaterNode(div).firstChild.nodeName);


  // p.appendChild(text);
  // div.appendChild(text);
  // var body = document.getElementsByTagName("body")[0];
  // body.appendChild(text);

  // var p = document.createElement("p");
  // div.appendChild(p);
  // var text = document.createTextNode("测试div4");

  //遍历元素节点、文本节点
  // for( var i = 0 ; i < div.childNodes.length ; i++){
  //   if(div.childNodes[i].nodeType === Node.ELEMENT_NODE){
  //     alert("元素节点" + " : " + div.childNodes[i].nodeName);

  //   }else if(div.childNodes[i].nodeType === Node.TEXT_NODE){
  //     alert("文本节点" + " : " + div.childNodes[i].nodeValue);

  //   }
  // }


   // this.alert(div.childNodes.length);
  // alert(div.childNodes[0]);
  // this.alert(div.previousSibling);        //同级前一个节点(previousSibling)
  // this.alert(div.firstChild.nextSibling); //同级后一个节点（nextSibling）
  

   // var div = document.getElementById("mydiv");
  // var p = div.children[0].cloneNode(true);  //使用firstChild会取到空白节点
  // div.appendChild(p);
    // div.removeChild(div.children[0]);

    // this.alert(Node.ELEMENT_NODE);


window.onload = function (){
  var div = document.getElementById("mydiv");

  this.alert(this.document.URL);
  



 
  
  

}




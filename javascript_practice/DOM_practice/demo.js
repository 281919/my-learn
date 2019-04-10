window.onload = function(){
  var div = document.getElementById("myDiv");
  //alert(div);
  //alert(div.id);
  //alert(div.className);
  //alert(div.title);
  //alert(div.getAttribute("id"));
  //alert(div.getAttribute("class"));
 //alert(div.getAttribute("title"));
 //div.setAttribute("id","someOtherId");
 //div.setAttribute("class","ft");
 //div.setAttribute("title","some other text");
 alert(div.attributes[0].nodeName);


}

//用attributes遍历元素的特性
// function outputAttributes(element){
//   var pairs = new Array(),
//       attrName,
//       attrValue,
//       i, 
//       len;

//       for (i = 0 , len = element.attributes.length; i < len ; i ++){
//         attrName = element.attributes[i].nodeName;
//         attrValue = element.attributes[i].nodeValue;
//         pairs.push(attrName + "=\" "+ attrValue + "\"");
//       }
//       return pairs.join(" ");
// }

window.onload = function (){
  var div = document.getElementById("mydiv");
  
}
function firstAdd(){
  var div = document.getElementById("mydiv");
  var text = document.getElementsByTagName("input")[0];
  var p = document.createElement("p");
  p.innerHTML = text.value;
  div.insertBefore(p , div.childNodes[0]);



}
let a=document.getElementsByTagName("div")[0]
// a.innerHTML=a.innerHTML+"<h1>Hello world!</h1>";

let div=document.createElement("div");
div.innerHTML="<h1>Hello world!</h1>";
// a.appendChild(div); //(Insert) inside the container

// a.prepend(div); //(Insert) out side the container (Start)

//a.before(div) //(Insert) out side the container (End)

a.replaceWith(div) //Remove the Element inside the container and (Replace)
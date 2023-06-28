let form=document.getElementById('addForm');
form.addEventListener('submit',clk);
function clk(e)
{ 
    e.preventDefault();
 let a=document.getElementById('item').value;
 uln = document.getElementById('items');
  lin = document.createElement('li');
 lin.setAttribute("class", "list-group-item");
//  li.appendChild(document.createTextNode(a));
 lin.innerHTML=a+'<button onclick="removeLI()" class="btn btn-danger btn-sm float-right delete">X</button>';
 uln.appendChild(lin);

//  e.preventDefault();
//  console.log(li.innerHTML);
//  alert(li.class);
//  preventDefault();
// form.submit();
   
}

    // e1.preventDefault();
    // var items = document.querySelectorAll("#items li"),
    // tab = [], liIndex;
    // console.log(items.length);

// populate tab with li data
// for(var i = 0; i < items.length; i++){
// tab.push(items[i].innerHTML);
// }

// get li index using tab array on li click event
// for(var i = 0; i < items.length; i++){

// items[i].onclick = function(){
    
//     liIndex = tab.indexOf(this.innerHTML);
//     console.log(this.innerHTML + " INDEX = " + liIndex);
// };

// }
let form1=document.getElementById('addForm');
form1.addEventListener('click',removeLI);
function removeLI(e){
    e.preventDefault();
    var p=e.target;
    console.log(p);
    p.parentElement.remove();
    // items[liIndex].parentNode.removeChild(items[liIndex]);

}
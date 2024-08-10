console.log("Js is working");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    // console.log(" button clicked and inp value is :",inp.value);
    let item = document.createElement("li");
    item.innerText = inp.value;
    let delBtn = document.createElement("button");
    delBtn.innerText ="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value ="";
});

ul.addEventListener("click", function (event){ // Event Delegation code//
    // console.dir(event.target.nodeName);
    // if(event.target.nodeName == "BUTTON"){
    //    console.log("delete"); 
    // } else {
    //     console.log("dont delet");
    // }
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         console.log("element deleted");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }
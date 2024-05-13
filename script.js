let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options= document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");

for(let option of options){
    option.onclick = function(){
        console.log("selected");
        selectText.textContent=this.textContent;
        list.classList.toggle('hide');
        arrowIcon.classList.toggle("rotate");
    }
}

selectField.onclick= function(){
    list.classList.toggle('hide');
    arrowIcon.classList.toggle("rotate");
}
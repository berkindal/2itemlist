var addItem = document.getElementById("addbutton");
var addedItem = document.getElementById("add-this");
var resetvalue = addedItem.value;  //takes the initial value of the addedItem which is null.
var itemList = document.getElementById("list");

addItem.addEventListener("click", adddone);

function addkeyboard (event) {  // a parameter event checks the event that happened
    if (event.keyCode == 13)
    {
        event.preventDefault();
        adddone();
    }
}


function adddone (){
    if (addedItem.value) //checks if the addedItem.value is true, meaning something is entered.
    {
    var checklabels = document.querySelectorAll("label"); // need to check if the addeditem already exists
    for (var y=0 ; y <checklabels.length; y++)
    {
        if (checklabels[y].innerHTML === addedItem.value)
        {
            alert("Enter another item");
            addedItem.value = resetvalue;
            return;
        }
    }
    var checkboxdiv = document.createElement("div");
    itemList.appendChild(checkboxdiv);

    var Done = document.createElement ("input");
    checkboxdiv.appendChild(Done);
    Done.setAttribute("type", "checkbox");
    Done.addEventListener("change", gotit);
    Done.setAttribute("id", addedItem.value); 

    var grocitem = document.createElement("label");
    checkboxdiv.appendChild(grocitem);
    grocitem.innerHTML = addedItem.value;
    addedItem.value = resetvalue; //resets the addedItem form field
    }

    else {
        alert("You must enter an item");
    } 
}

function gotit (e){
    let newvalue = e.srcElement.getAttribute("id");
     var x = document.querySelectorAll("label");
     for (var i =0; i<x.length; i++){
        if (x[i].innerHTML === newvalue)
        {
            x[i].style.setProperty("text-decoration","line-through");
        }
    }
}



// function add (){
//     if (addedItem.value) //checks if the addedItem.value is true, meaning something is entered.
//     {
//         var grocitem = document.createElement("li"); // creates a new "li" element in the document
//         itemList.appendChild(grocitem); // assigns the new li element as a child to the "ul" element tagged by ID "add-this"
//         grocitem.innerHTML = addedItem.value; //puts the text from "add-this" text field on the new li element
//         addedItem.value = resetvalue; //resets the addedItem form field
//     }
//     else{
//         alert("You must enter an item");
//     }  //if the addedItem.value is null (blank text input), do nothing
// }
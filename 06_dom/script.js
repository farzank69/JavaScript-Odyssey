document.getElementById("changeTextButton").addEventListener("click", function(){
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph is changed."
})

// example 2
document.getElementById("highlightFirstCity").addEventListener("click", function(){
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
});

//example 3
document.getElementById("changeOrder").addEventListener("click", function(){
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "brown";
});

//example 4
document.getElementById("addNewItem").addEventListener('click', function(){
    let newItem = document.createElement('li')
    newItem.textContent = "Butter";
    document.getElementById("shoppingList").appendChild(newItem)
});

// example 5
document.getElementById("removeLastTask").addEventListener('click', function (){
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
});


// example 6
document.getElementById("clickMeButton").addEventListener
('mouseover', function() {
    alert("Mouse has been hovered...")
});
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
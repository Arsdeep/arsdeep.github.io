const button = document.getElementById("myButton");


const messageBox = document.getElementById("messageBox");


button.addEventListener("click", function() {

  button.textContent = "Work in Progress :P";

  setTimeout(function() {
    button.textContent = "Games";
  }, 2000);
});
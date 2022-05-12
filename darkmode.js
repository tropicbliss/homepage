const button = document.getElementById("dark-button");
button.addEventListener("click", () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
});
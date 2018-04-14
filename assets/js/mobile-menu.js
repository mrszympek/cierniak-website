var menuButton = document.querySelector("#menu-button");

menuButton.addEventListener("click", function () {
    var dropdownMenu = document.querySelector("#dropdown");

    if (dropdownMenu.classList.contains("hidden")) {
        dropdownMenu.classList.remove("hidden");
    } else {
        dropdownMenu.classList.add("hidden");
    }
});
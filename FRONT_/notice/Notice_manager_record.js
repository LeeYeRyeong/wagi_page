document.getElementById("editButton").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "Notice_manager_writing_p.html";
    document.getElementById("editButton").classList.add("selected");
});

document.getElementById("editButton").addEventListener("mouseover", function() {
    document.getElementById("editButton").classList.add("selected");
});

document.getElementById("editButton").addEventListener("mouseout", function() {
    document.getElementById("editButton").classList.remove("selected");
});

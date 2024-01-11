document.getElementById("regularActivity").addEventListener("click", function() {
    updateButtonStyle("regularActivity");
});

document.getElementById("event").addEventListener("click", function() {
    updateButtonStyle("event");
});

document.getElementById("competition").addEventListener("click", function() {
    updateButtonStyle("competition");
});

function updateButtonStyle(activeButton) {
    var buttons = document.querySelectorAll('.round-button');
    buttons.forEach(function(button) {
        button.classList.remove('selected');
    });

    var clickedButton = document.getElementById(activeButton);
    if (clickedButton) {
        clickedButton.classList.add('selected');
    }
}
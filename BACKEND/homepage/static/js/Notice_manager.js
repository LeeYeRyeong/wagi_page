document.getElementById("writings").addEventListener("click", function() {
    window.location.href = "Notice_manager_writing.html";
});

function showContent(contentId) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    var buttons = document.querySelectorAll('.round-button');
    buttons.forEach(function(button) {
        button.classList.remove('selected');
    });

    var selectedContent = document.getElementById(contentId + 'Content');
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }

    var clickedButton = document.getElementById(contentId);
    if (clickedButton) {
        clickedButton.classList.add('selected');
    }
}
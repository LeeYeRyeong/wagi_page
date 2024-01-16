// Notice_main.js

function showContent(buttonId, event) {
    event.preventDefault();
    // 모든 content div를 감춤
    var allContentDivs = document.querySelectorAll('.content');
    allContentDivs.forEach(function(contentDiv) {
        contentDiv.style.display = 'none';
    });

    // 선택된 버튼에 해당하는 content div를 보이도록 설정
    var selectedContentDiv = document.getElementById(`${buttonId}Content`);
    if (selectedContentDiv) {
        selectedContentDiv.style.display = 'block';
    }

    // 선택된 버튼에 selected 클래스 추가, 다른 버튼에서는 제거
    var buttons = document.querySelectorAll('.round-button');
    buttons.forEach(function(button) {
        if (button.id === buttonId) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}
//글작성 버튼 클릭시 페이지 이동
document.getElementById("writings").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "Notice_manager_writing.html";
});
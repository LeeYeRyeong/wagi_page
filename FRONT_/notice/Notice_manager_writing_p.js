document.getElementById("signUp").addEventListener("click", function() {
    window.location.href = "Notice_manager_record.html";
});

document.getElementById("signUp").addEventListener("click", function() {
    window.location.href = "Notice_manager_record.html";
});

document.getElementById("regularActivity").addEventListener("click", function() {
    document.getElementById("titleWriting").value = "정기활동 제목을 입력해주세요";
    document.getElementById("contentsWriting").value = "정기활동 내용을 입력해주세요";
});

document.getElementById("event").addEventListener("click", function() {
    document.getElementById("titleWriting").value = "행사 제목을 입력해주세요";
    document.getElementById("contentsWriting").value = "행사 내용을 입력해주세요";
});

document.getElementById("competition").addEventListener("click", function() {
    document.getElementById("titleWriting").value = "공모전 제목을 입력해주세요";
    document.getElementById("contentsWriting").value = "공모전 내용을 입력해주세요";
});

document.getElementById("addPhoto").addEventListener("click", function() {
    //사진추가하는겁니다람쥐
});
function showContent(contentId) {

    var buttons = document.querySelectorAll('.round-button');
    buttons.forEach(function(button) {
        button.classList.remove('selected');
    });

    var clickedButton = document.getElementById(contentId);
    if (clickedButton) {
        clickedButton.classList.add('selected');
    }
}

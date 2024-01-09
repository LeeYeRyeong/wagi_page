document.getElementById("signUp").addEventListener("click", function(event) {
    event.preventDefault();
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

document.getElementById("addPhotoLabel").addEventListener("click", function() {
    document.getElementById("profile").click();
});

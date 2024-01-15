function updateHiddenValue(button) {
    var selectedCategoryField = document.getElementById('selectedCategory');
    if (selectedCategoryField) {
        selectedCategoryField.value = button.name;
    }

    // 모든 버튼에서 'selected' 클래스 제거
    var buttons = document.querySelectorAll('.round-button');
    buttons.forEach(function(btn) {
        btn.classList.remove('selected');
    });

    // 클릭된 버튼에 'selected' 클래스 추가
    button.classList.add('selected');
}


var fileName =  document.getElementById('profile'); // 파일명 추출
fileName.addEventListener('change', function (event) {
    let fileName = event.target.files[0].name; // event 객체에서 선택된 파일의 이름을 가져옵니다.
    document.getElementById('selectedImageName').value = fileName; // 파일 이름을 입력 필드에 표시합니다.
  });

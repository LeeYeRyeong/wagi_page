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
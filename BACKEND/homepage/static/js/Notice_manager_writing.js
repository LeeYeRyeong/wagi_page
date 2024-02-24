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


document.getElementById('profile').addEventListener('change', function () {
    handleFileSelection('profile', 'file', 'imagePreview');
});

document.getElementById('profile2').addEventListener('change', function () {
    handleFileSelection('profile2', 'file2', 'filePreview');
});

function handleFileSelection(inputId, displayId, previewId) {
    var fileInput = document.getElementById(inputId);
    var fileDisplay = document.getElementById(displayId);
    var preview = document.getElementById(previewId);

    if (fileInput.files.length > 0) {
        var fileNames = Array.from(fileInput.files).map(function (file) {
            return file.name;
        }).join(', ');

        fileDisplay.value = fileNames;
    } 
}



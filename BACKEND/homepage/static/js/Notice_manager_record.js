

$(document).ready(function () {
    // 선택된 카테고리 가져옴
    var selectedCategory = $("#selectedCategory").val();

    // 해당하는 버튼색 바꿈
    $("#" + selectedCategory).css("background-color", "#9EA9D7");

    
});

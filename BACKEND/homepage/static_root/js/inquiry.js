// 합불여부
$(document).ready(function () {
    
    $("#btn_studentNum").click(function (e) {
        e.preventDefault();
        checkResult();
    });

    function checkResult() {
        const inputId = $("#input_studentNum").val();
        var joinResultUrl = $("#btn_studentNum").parent("a").data("url");
        $.ajax({
            url:joinResultUrl,
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': getCookie('csrftoken')
            },
            data: { 'inputId': inputId },
            dataType: "json",
            success: function (data) {
                $(".modal_pass, .modal_fail").hide();
                if (data.result === 'pass') {
                    $("#p_stdId").text(data.number);
                    $("#p_stdName").text(data.name);
                    $("#p_stdName2").text(data.name);
                    $("#p_stdTime").text(data.time);
                    $(".modal_pass").show();
                } else if (data.result === 'fail') {
                    $("#f_stdId").text(data.number);
                    $("#f_stdName").text(data.name);
                    $(".modal_fail").show();
                }
            },
            error: function (error) {
                console.error('Error:', error);
            }
        });
         
    }
});
 
// 외부영역 클릭 시 팝업 닫기
$(document).mouseup(function (e) {
    var LayerPopup = $(".modal_pass, .modal_fail");
    if (LayerPopup.has(e.target).length === 0) {
        $(".modal_pass, .modal_fail").hide();
    }
});

 // CSRF 토큰을 쿠키에서 가져오는 함수
 function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


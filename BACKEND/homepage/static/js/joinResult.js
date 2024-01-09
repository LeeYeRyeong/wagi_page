  // 메일 입력 창
  /*   $(document).ready(function () {
      $("#apply").click(function (e) { //join버튼 누름
        e.preventDefault();

        if ({{ isDate }} === 0) {
           $(".modal_unavailable").show(); // 메일창 띄우기 
 
           const closeModal = document.querySelector('#close-modal'); // 모달 닫기 버튼 
           var input = document.querySelector('.input_email');
           closeModal.addEventListener("click", ()=>{
              $(".modal_unavailable").hide();
              input.value=null; //이메일 입력하다가 모달창 닫았을 때 input창 리셋
           });
        }
    });
    $("#email").submit(function (event) {
        event.preventDefault();
        var userEmail = $(".input_email").val();
               $.ajax({
                   url :  '{% url "joinResult:writeMail" %}',
                   method: "POST",
                   headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-CSRFToken': '{{ csrf_token }}'
                     },
                   cache: false,
                   data: {
                    'email': userEmail,
                    'csrfmiddlewaretoken': '{{ csrf_token }}' 
                    },

                   dataType: 'json',
                   success: function (data) {
                       if (data.works) {
                                
                                    $( '.message_2' ).animate({ 
                                        opacity: 0
                                    }, 100 , event.preventDefault());
                        
                                    $('.email').css('display', 'none');
                                    $( '.out_text' ).addClass( 'on' );
                        
                                
                       } else if (data.noEmail) {
                            alert('이메일 주소를 입력해주세요.');
                       } else if (data.wrongEmail) {
                            alert('올바른 이메일 주소 형식이 아닙니다.');
                       } else if(data.emailExists){
                            alert('입력하신 이메일이 이미 등록되어있습니다.');
                       }
                    },  
                    error: function (error) {
                        console.error('Error:', error);
                    }
                });
            });
        });

   // Enter 키 이벤트 감지
   $("#input_email").keyup(function (e) {
        if (e.keyCode === 13) { // Enter 키 코드
           e.preventDefault();
           var userEmail = $("#input_email").val();
           sendAjaxRequest(userEmail);
        }
    });

    
    

  // 합불여부
  $(document).ready(function () {
    
     $("#btn_studentNum").click(function (e) {
        e.preventDefault();
         checkResult();
     });

     function checkResult() {
         const inputId = $("#input_studentNum").val();
         $.ajax({
             url:"{% url 'joinResult:result' %}",
             method: "POST",
             headers: {
                 'Content-Type': 'application/x-www-form-urlencoded',
                 'X-CSRFToken': '{{ csrf_token }}'
             },
             data: { 'inputId': inputId },
             dataType: "json",
             success: function (data) {
                 $(".modal_pass, .modal_fail").hide();
                 if (data.result === 'pass') {
                     $("#p_stdId").text(data.number);
                     $("#p_stdName").text(data.name);
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

// 이메일 제출 후 모달 창 닫았을 때 리셋
$(document).ready(function() {
    $('#close-modal').on('click', function() {

        $('.message_2').css('opacity', '100');
        $('.email').css('display', 'flex');
        $( '.out_text' ).removeClass( 'on' );
    });
});*/
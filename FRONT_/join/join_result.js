//모달창 띄우기1
const modal_unavailable = document.querySelector('.modal_unavailable');
const btnOpenModal_1=document.querySelector('#btn_apply');

btnOpenModal_1.addEventListener("click", ()=>{
    modal_unavailable.style.display="flex";
});
//모달창 띄우기2
const modal_pass = document.querySelector('.modal_pass');
const btnOpenModal_2=document.querySelector('#btn_studentNum');

btnOpenModal_2.addEventListener("click", ()=>{
    modal_pass.style.display="flex";
});
//모달창 닫기 버튼
const closeModal = document.querySelector('#close-modal');
var input = document.querySelector('.input_email');

closeModal.addEventListener("click", ()=>{
    modal_unavailable.style.display="none";
    //이메일 입력하다가 모달창 닫았을 때 input창 리셋
    input.value = null;

});

 

$( document ).ready( function() {
        $( '#email' ).on("submit", function(event) {
            $( '.message_2' ).animate({ 
                opacity: 0
            }, 100 , event.preventDefault());

            $('.email').css('display', 'none');
            $( '.out_text' ).addClass( 'on' );

        } );
    } );
// 이메일 제출 후 모달 창 닫았을 때 리셋
$(document).ready(function() {
    $('#close-modal').on('click', function() {

        $('.message_2').css('opacity', '100');
        $('.email').css('display', 'flex');
        $( '.out_text' ).removeClass( 'on' );
    });
});
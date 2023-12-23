//모달창 띄우기
const modal_unavailable = document.querySelector('.modal_unavailable');
const btnOpenModal_1=document.querySelector('#apply');

btnOpenModal_1.addEventListener("click", ()=>{
    modal_unavailable.style.display="flex";
});

const modal_pass = document.querySelector('.modal_pass');
const btnOpenModal_2=document.querySelector('#btn_studentNum');

btnOpenModal_2.addEventListener("click", ()=>{
    modal_pass.style.display="flex";
});
//모달창 닫기 버튼
const closeModal = document.querySelector('#close-modal');

closeModal.addEventListener("click", ()=>{
    modal_unavailable.style.display="none";
});



$( document ).ready( function() {
        $( '#email' ).on("submit", function(event) {
            $( '.message' ).animate({ 
                height: 0, 
                opacity: 0
            }, 1000 , event.preventDefault());

            $('.input_email').val("해당 주소로 메일을 보내드리겠습니다."); 
            $('.input_email').css({'background':'white'}); 
            $('.input_email').css({'padding-left': '38px'}); 
            $('.input-email').attr('readonly', true).attr("readonly",false);            
        } );
    } );
window.onload = function() {
    setTimeout(function(){
      window.scrollTo(0, 0);
    }, 100); 
  };


document.addEventListener('DOMContentLoaded', function () {
    if(window.matchMedia('(max-width: 450px)').matches){

        var Y = 400;
  
        window.addEventListener('scroll', function () {
          var winY = window.scrollY;
          if (winY > Y*1.2) {
            tadastart();
          }
          else{
            document.querySelectorAll('.move-img, .move-img1, .move-img2, .move-img3').forEach((moveImg) => {
                moveImg.style.opacity = '0';
            });
          }
        });

        function tadastart(){
            document.querySelectorAll('.move-img, .move-img1, .move-img2, .move-img3').forEach((moveImg) => {
                moveImg.style.animation ='tada 0.8s forwards';
                moveImg.style.transform = 'translate(0, 0)';

        });
         } 
        
    } else{
        const sectionIds = ['#section1', '#section2', '#section3'];
        let lastScrollPosition = window.scrollY;
        

        function checkScroll() {
            sectionIds.forEach((sectionId) => {
                const section = document.querySelector(sectionId);
                const sectionTop = section.getBoundingClientRect().top;
                const sectionBottom = section.getBoundingClientRect().bottom;

                if (sectionTop < window.innerHeight / 2 && sectionBottom >= 0) {
                    
                    // 섹션이 이미 보이는 상태가 아닌 경우에만 추가 애니메이션 적용
                    if (section.style.opacity !== '1') {
                        section.style.opacity = '1';
                        section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 10 });

                        // section2 내의 move-img 요소들에 대한 Flying-in 효과
                        if (sectionId === '#section2') {
                            document.querySelectorAll('.move-img, .move-img1, .move-img2, .move-img3').forEach((moveImg) => {
                                moveImg.style.transition = 'transform 1s';
                                moveImg.style.transform = 'translate(0, 0)';
                            });
                        }
                        if (sectionId === '#section1') {
                            document.querySelectorAll('.move-img, .move-img1, .move-img2, .move-img3').forEach((moveImg) => {
                                moveImg.style.transition = 'transform 1s';
                                moveImg.style.transform = 'translate(0, 0)';
                            });
                        }

                        // section2에서 section1로 스크롤할 때 section1에 대한 Flying-in 효과
                        if (sectionId === '#section1' && lastScrollPosition > window.scrollY) {
                            document.querySelectorAll('.move-img, .move-img1, .move-img2, .move-img3').forEach((moveImg) => {
                                moveImg.style.transition = 'transform 1s';
                                moveImg.style.transform = 'translate(0, 0)';
                            });
                        }
                    }
                } else {
                    section.style.opacity = '0';
                

                    // section2 내의 move-img 요소들에 대한 Flying-out 효과
                    if (sectionId === '#section2') {
                        document.querySelectorAll('.move-img, .move-img1, .move-img2, .move-img3').forEach((moveImg) => {
                            moveImg.style.transition = 'transform 1s';
                            moveImg.style.transform = 'translate(-100px, 0)';
                        });
                    }
                }
            });

            lastScrollPosition = window.scrollY;
        }

        window.addEventListener('scroll', checkScroll);
        window.addEventListener('resize', checkScroll);

        checkScroll(); // 초기 체크

    }
    

});




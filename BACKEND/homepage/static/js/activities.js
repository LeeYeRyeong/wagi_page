window.onload = function () {

  const slideWidth = 424.4;
  const slideSpeed = 500;
  const startNum = 0; //슬라이드 인덱스 (0 ~ imageBoxLen-1)
  const imagesLen = 12;
  const albumLen = 3;

  let activitiesMain = document.getElementById('activities_main');
  let successPage = document.getElementById('success_page');
  let editPage = document.getElementById('edit_page');

  if (activitiesMain || successPage) { //activities.html, success_page.html일 때
    //이미지 불러오기
    (function () {

        // 이미지 컨테이너 선택
      let imgContainer = document.getElementById('project_img_area');

      // imgContainer 내의 모든 이미지 선택
      let images = imgContainer.getElementsByTagName('img');

      // 각 이미지에 대해 반복
      //for (let img of images) {
          // a 태그 생성
          //let link = document.createElement('a');
          // href 속성 설정 (여기서는 모두 네이버로 설정)
          //link.href = 'https://naver.com';
          // target 속성을 설정하여 새 탭에서 링크를 열도록 함
          //link.target = '_blank';
          // 이미지를 a 태그의 자식으로 설정
          //link.appendChild(img.cloneNode(true));
          // 원본 이미지를 DOM에서 제거
          //imgContainer.removeChild(img);
          // a 태그를 이미지 컨테이너에 추가
          //imgContainer.appendChild(link);
      //}
    })();

    //mt
    (function () {
      const mtPrevBtn = document.querySelector('#mt_prev_button');
      const mtNextBtn = document.querySelector('#mt_next_button');
      const imagesArea = document.querySelector('.img_area');
      const slideContents = document.querySelectorAll('#mt_img_content');
      const slideLen = slideContents.length;
      const slideWidth = slideContents[0].offsetWidth; // 슬라이드 하나의 너비를 가져옵니다.
      const slideSpeed = 300; // 원하는 애니메이션 속도를 밀리초 단위로 설정합니다.
      const startNum = 0; // 시작할 슬라이드의 인덱스입니다.
  
      imagesArea.style.width = `${slideWidth * slideLen}px`; // 전체 슬라이드 영역의 너비를 설정합니다.
  
      let curIndex = startNum; // 현재 활성화된 슬라이드 인덱스를 초기화합니다.
  
      mtPrevBtn.addEventListener('click', function () {
          if (curIndex > 0) {
              imagesArea.style.transition = `${slideSpeed}ms`;
              imagesArea.style.transform = `translate3d(-${slideWidth * (curIndex - 1)}px, 0px, 0px)`;
              curIndex--;
          }
      });
  
      mtNextBtn.addEventListener('click', function () {
          if (curIndex < slideLen - 1) {
              imagesArea.style.transition = `${slideSpeed}ms`;
              imagesArea.style.transform = `translate3d(-${slideWidth * (curIndex + 1)}px, 0px, 0px)`;
              curIndex++;
          }
      });
  })();

    //study
    (function () {
      const studyPrevBtn = document.querySelector('#study_prev_button');
      const studyNextBtn = document.querySelector('#study_next_button');
      const imagesArea = document.querySelector('#study_img_area');

      let imageNum = document.querySelectorAll('#study_img_content img');

      //사진 개수에 따른 슬라이드 개수 조정
      if (imageNum.length <= 4) {
        studyPrevBtn.classList.add('display_none');
        studyNextBtn.classList.add('display_none');
      }
      if (imageNum.length == 0) {
        imageBoxLen = 0;
        let p = document.querySelector('#study p');
        p.classList.add('display_block');
      }
      else if (imageNum.length >= 1 && imageNum.length <= 4){
        imageBoxLen = 1;
      } 
      else if (imageNum.length >= 5 && imageNum.length <= 8) imageBoxLen = 2;
      else if (imageNum.length >= 9 && imageNum.length <= 12) imageBoxLen = 3;
      else imageBoxLen = 0;

      let slideContents = document.querySelectorAll('.img_content.size_original');
      const slideLen = slideContents.length;

      imagesArea.style.width = slideWidth * (slideLen + 2) + "px";

      try {
        // 슬라이드 복사
        let firstChild = imagesArea.firstElementChild;
        let lastChild = imagesArea.lastElementChild;
        let clonedFirst = firstChild.cloneNode(true);
        let clonedLast = lastChild.cloneNode(true);
  
        // 슬라이드 추가
        imagesArea.appendChild(clonedFirst);
        imagesArea.insertBefore(clonedLast, imagesArea.firstElementChild);
  
        // 애니메이션 효과
        imagesArea.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "px, 0px, 0px)";
  
        let curIndex = startNum;
        let curSlide = slideContents[curIndex];
        curSlide.classList.add('slide_active');
  
        //이전 버튼
        studyPrevBtn.addEventListener('click', function () {
          if (curIndex >= 0) {
            imagesArea.style.transition = slideSpeed + "ms";
            imagesArea.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
          }
          if (curIndex === 0) {
            setTimeout(function () {
              imagesArea.style.transition = "0ms";
              imagesArea.style.transform = "translate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
            }, slideSpeed);
            curIndex = slideLen;
          }
          curSlide.classList.remove('slide_active');
          curSlide = slideContents[--curIndex];
          curSlide.classList.add('slide_active');
        });
  
        //다음 버튼
        studyNextBtn.addEventListener('click', function () {
          if (curIndex <= slideLen - 1) {
            imagesArea.style.transition = slideSpeed + "ms";
            imagesArea.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
          }
          if (curIndex === slideLen - 1) {
            setTimeout(function () {
              imagesArea.style.transition = "0ms";
              imagesArea.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
            }, slideSpeed);
            curIndex = -1;
          }
          curSlide.classList.remove('slide_active');
          curSlide = slideContents[++curIndex];
          curSlide.classList.add('slide_active');
        });
      } catch(e) {

      } 
    })();

    //project
    (function () {
      const projectPrevBtn = document.querySelector('#project_prev_button');
      const projectNextBtn = document.querySelector('#project_next_button');
      const imagesArea = document.querySelector('#project_img_area');

      let imageNum = document.querySelectorAll('#project_img_content img');

      //사진 개수에 따른 슬라이드 개수 조정
      if (imageNum.length <= 4) {
        projectPrevBtn.classList.add('display_none');
        projectNextBtn.classList.add('display_none');
      }
      if (imageNum.length == 0) {
        imageBoxLen = 0;
        let p = document.querySelector('#project p');
        p.classList.add('display_block');
      }
      else if (imageNum.length >= 1 && imageNum.length <= 4){
        imageBoxLen = 1;
      } 
      else if (imageNum.length >= 5 && imageNum.length <= 8) imageBoxLen = 2;
      else if (imageNum.length >= 9 && imageNum.length <= 12) imageBoxLen = 3;
      else imageBoxLen = 0;

      let slideContents = document.querySelectorAll('.img_content.size_original');
      const slideLen = slideContents.length;

      imagesArea.style.width = slideWidth * (slideLen + 2) + "px";

      try {
        // 슬라이드 복사
        let firstChild = imagesArea.firstElementChild;
        let lastChild = imagesArea.lastElementChild;
        let clonedFirst = firstChild.cloneNode(true);
        let clonedLast = lastChild.cloneNode(true);
  
        // 슬라이드 추가
        imagesArea.appendChild(clonedFirst);
        imagesArea.insertBefore(clonedLast, imagesArea.firstElementChild);
  
        // 애니메이션 효과
        imagesArea.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "px, 0px, 0px)";
  
        let curIndex = startNum;
        let curSlide = slideContents[curIndex];
        curSlide.classList.add('slide_active');
  
        //이전 버튼
        projectPrevBtn.addEventListener('click', function () {
          if (curIndex >= 0) {
            imagesArea.style.transition = slideSpeed + "ms";
            imagesArea.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
          }
          if (curIndex === 0) {
            setTimeout(function () {
              imagesArea.style.transition = "0ms";
              imagesArea.style.transform = "translate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
            }, slideSpeed);
            curIndex = slideLen;
          }
          curSlide.classList.remove('slide_active');
          curSlide = slideContents[--curIndex];
          curSlide.classList.add('slide_active');
        });
  
        //다음 버튼
        projectNextBtn.addEventListener('click', function () {
          if (curIndex <= slideLen - 1) {
            imagesArea.style.transition = slideSpeed + "ms";
            imagesArea.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
          }
          if (curIndex === slideLen - 1) {
            setTimeout(function () {
              imagesArea.style.transition = "0ms";
              imagesArea.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
            }, slideSpeed);
            curIndex = -1;
          }
          curSlide.classList.remove('slide_active');
          curSlide = slideContents[++curIndex];
          curSlide.classList.add('slide_active');
        });
      } catch(e) {

      }
    })();

    //모달창
    (function () {
      /// 모달을 표시하는 함수
      function showModal(modalId, imgSrc) {
        var modal = document.getElementById(modalId);
        if (!modal) {
          console.error('Modal with ID ' + modalId + ' not found.');
          return;
        }
        var modalImage = modal.querySelector(".modal-content");
        modalImage.src = imgSrc; // 클릭한 이미지의 소스를 모달 이미지 소스로 설정
        modal.style.display = "block"; // 모달 창을 표시
      }

      // 모달을 숨기는 함수
      function hideModal(modal) {
        modal.style.display = "none"; // 모달 창을 숨김
      }

      // 페이지에 이미지가 로드된 후에 이벤트 리스너를 바인딩
      document.addEventListener('DOMContentLoaded', function() {
        // 각 앨범 아이템에 대해 모달 표시 로직 설정
        ['mt', 'study', 'project'].forEach(function (album) {
          var imgArea = document.getElementById(album + '_img_area');
          if (!imgArea) {
            console.error('Image area with ID ' + album + '_img_area' + ' not found.');
            return;
          }

          var modalId = album + 'Modal';
          var modal = document.getElementById(modalId);
          if (!modal) {
            console.error('Modal with ID ' + modalId + ' not found.');
            return;
          }

          // 이미지 클릭 시 모달 표시
          imgArea.addEventListener("click", function (event) {
            if (event.target.tagName === 'IMG') {
              showModal(modalId, event.target.src);
            }
          });

          // 모달 컨텐츠 클릭 시 모달 숨기기
          var modalImage = modal.querySelector(".modal-content");
          modalImage.addEventListener("click", function () {
            hideModal(modal);
          });
        });
      });

    })();

  } else if(editPage){ //edit_page.html일 때
    //사진 삭제
    (function () {
      // 이미지 선택을 토글하는 함수
      function toggleImageSelection(checkbox) {
        checkbox.checked = !checkbox.checked; // 체크박스 상태를 토글
      }

      // 각 이미지에 대하여 클릭 이벤트 리스너를 추가.
      document.addEventListener('click', function (e) {
        if (e.target && e.target.tagName == 'IMG') {
          let checkbox = e.target.nextElementSibling;
          if (checkbox && checkbox.classList.contains('img-checkbox')) {
            toggleImageSelection(checkbox); // 이미지 선택 토글
          }
        }
      });

      // 체크박스 클릭 시 이벤트 버블링을 방지.
      document.querySelectorAll('.img-checkbox').forEach(function (checkbox) {
        checkbox.addEventListener('click', function (e) {
          e.stopPropagation(); // 이벤트 버블링 방지
        });
      });

      //사진 없을 때
      //mt
      let mtImageNum = document.querySelectorAll('#mt_img_box img');

      if (mtImageNum.length == 0) {
        let p = document.querySelector('#mt p');
        p.classList.add('display_block');
      }

      //study
      let studyImageNum = document.querySelectorAll('#study_img_box img');

      if (studyImageNum.length == 0) {
        let p = document.querySelector('#study p');
        p.classList.add('display_block');
      }

      //project
      let projectImageNum = document.querySelectorAll('#project_img_box img');

      if (projectImageNum.length == 0) {
        let p = document.querySelector('#project p');
        p.classList.add('display_block');
      }
      
    })();


  } else { //upload_activity.html일 때
      //input 커스텀
      let mtFile = document.getElementById('mt');
      let studyFile = document.getElementById('study');
      let projectFile = document.getElementById('project');

      // mt
      mtFile.addEventListener('change', function (event) {
        let fileName = event.target.files[0].name; // event 객체에서 선택된 파일의 이름을 가져옵니다.
        document.getElementById('mt_file').value = fileName; // 파일 이름을 입력 필드에 표시합니다.
      });

      // study
      studyFile.addEventListener('change', function (event) {
        let fileName = event.target.files[0].name; // event 객체에서 선택된 파일의 이름을 가져옵니다.
        document.getElementById('study_file').value = fileName; // 파일 이름을 입력 필드에 표시합니다.
      });

      // project
      projectFile.addEventListener('change', function (event) {
        let fileName = event.target.files[0].name; // event 객체에서 선택된 파일의 이름을 가져옵니다.
        document.getElementById('project_file').value = fileName; // 파일 이름을 입력 필드에 표시합니다.
    });
  }
  
}
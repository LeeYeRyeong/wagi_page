window.onload = function () {

  const slideWidth = 424.4;
  const slideSpeed = 300;
  const startNum = 0; //슬라이드 인덱스 (0 ~ imageBoxLen-1)
  const imagesLen = 12;
  const imageBoxLen = 3;
  const albumLen = 3;

  let activitiesMain = document.getElementById('activities_main');
  let activitiesManager = document.getElementById('activities_manager');

  if (activitiesMain || activitiesManager) { //activities.html일 때
    //이미지 불러오기
    (function () {
      for (let i = 0; i < albumLen; i++) {
        let imageNum = 0;
        let albumName;

        if (i == 0) {
          albumName = 'mt';
        } else if (i == 1) {
          albumName = 'study';
        } else {
          albumName = 'project'
        }

        for (let j = 0; j < imageBoxLen; j++) {
          let imgContent = document.createElement('div');
          let imgAreaSrc = document.getElementById(albumName + "_img_area");
          imgAreaSrc.appendChild(imgContent);

          imgContent.id = albumName + '_img_content_' + (j + 1); //id, class 추가
          imgContent.classList.add('img_content');
          imgContent.classList.add('size_original');

          let imageSrc = document.getElementById(albumName + '_img_content_' + (j + 1));

          for (let k = 0; k < imagesLen / imageBoxLen; k++) {
            let image = document.createElement("img");

            image.src = "../../static/img/" + albumName + "/ex" + (imageNum + 1) + ".jpg"; //속성 추가
            image.alt = albumName + " picture " + (imageNum + 1);

            //onerror="this.style.display='none'"
            // image.onerror = "this.style.display='none'"
            // console.log(image.onerror)

            if (i < albumLen - 1) imageSrc.appendChild(image);
            else {
              let aSrc = document.createElement('a');
              imageSrc.appendChild(aSrc);
              aSrc.appendChild(image);
            }

            imageNum++;
          }
        }
      }

      //프로젝트 링크 삽입
      let projectLink = document.querySelectorAll('a');

      if (activitiesMain) { //수정 버튼의 a 태그 제외
        projectLink[0].href = 'https://naver.com';
      }

      projectLink[1].href = 'https://naver.com';
      projectLink[2].href = 'https://naver.com';
      projectLink[3].href = 'https://naver.com';
      projectLink[4].href = 'https://naver.com';
      projectLink[5].href = 'https://naver.com';
      projectLink[6].href = 'https://naver.com';
      projectLink[7].href = 'https://naver.com';
      projectLink[8].href = 'https://naver.com';
      projectLink[9].href = 'https://naver.com';
      projectLink[10].href = 'https://naver.com';
      projectLink[11].href = 'https://naver.com';

    })();

    //mt
    (function () {
      const mtPrevBtn = document.querySelector('#mt_prev_button');
      const mtNextBtn = document.querySelector('#mt_next_button');
      const imagesArea = document.querySelector('#mt_img_area');

      let slideContents = new Array();

      for (let i = 0; i < imageBoxLen; i++) {
        slideContents[i] = document.querySelector('#mt_img_content_' + (i + 1));
      }

      const slideLen = slideContents.length;

      imagesArea.style.width = slideWidth * (slideLen + 2) + "px";

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
      mtPrevBtn.addEventListener('click', function () {
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
      mtNextBtn.addEventListener('click', function () {
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
    })();

    //study
    (function () {
      const studyPrevBtn = document.querySelector('#study_prev_button');
      const studyNextBtn = document.querySelector('#study_next_button');
      const imagesArea = document.querySelector('#study_img_area');

      let slideContents = new Array();

      for (let i = 0; i < imageBoxLen; i++) {
        slideContents[i] = document.querySelector('#study_img_content_' + (i + 1));
      }

      const slideLen = slideContents.length;

      imagesArea.style.width = slideWidth * (slideLen + 2) + "px";

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
    })();

    //project
    (function () {
      const projectPrevBtn = document.querySelector('#project_prev_button');
      const projectNextBtn = document.querySelector('#project_next_button');
      const imagesArea = document.querySelector('#project_img_area');

      let slideContents = new Array();

      for (let i = 0; i < imageBoxLen; i++) {
        slideContents[i] = document.querySelector('#project_img_content_' + (i + 1));
      }

      const slideLen = slideContents.length;

      imagesArea.style.width = slideWidth * (slideLen + 2) + "px";

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
    })();

    //모달창
    (function () {
      // 모달을 표시하는 함수
      function showModal(modalId, imgSrc) {
        var modal = document.getElementById(modalId);
        var modalImage = modal.querySelector(".modal-content");
        modalImage.src = imgSrc; // 클릭한 이미지의 소스를 모달 이미지 소스로 설정
        modal.style.display = "block"; // 모달 창을 표시
      }

      // 모달을 숨기는 함수
      function hideModal(modal) {
        modal.style.display = "none"; // 모달 창을 숨김
      }

      // 각 앨범 아이템에 대해 모달 표시 로직 설정
      ['mt', 'study'].forEach(function (album) {
        var imgArea = document.getElementById(album + '_img_area');
        var modalId = album + 'Modal';
        var modal = document.getElementById(modalId);
        var modalImage = modal.querySelector(".modal-content");

        // 이미지 클릭 시 모달 표시
        imgArea.addEventListener("click", function (event) {
          if (event.target.tagName === 'IMG') {
            showModal(modalId, event.target.src);
          }
        });

        // 모달 컨텐츠 클릭 시 모달 숨기기
        modalImage.addEventListener("click", function () {
          hideModal(modal);
        });
      });
    })();



  } else {
    //사진 삭제
    (function () {
      // 이미지 선택을 토글하는 함수
      function toggleImageSelection(checkbox) {
        checkbox.checked = !checkbox.checked; // 체크박스 상태를 토글
      }

      // 선택된 이미지들을 삭제하는 함수
      function deleteSelectedImages(album) {
        var checkedCheckboxes = document.querySelectorAll(`#${album} .img-checkbox:checked`);
        checkedCheckboxes.forEach(function (checkbox) {
          checkbox.closest('.image-wrapper').remove(); // 이미지를 DOM에서 삭제
        });
      }

      // 각 앨범에 대한 삭제 버튼 이벤트 리스너를 추가합니다.
      let deleteButtons = document.querySelectorAll('[id^="delete_"]'); // id가 'delete_'로 시작하는 모든 요소
      deleteButtons.forEach(function (btn) {
        let album = btn.id.replace('delete_', ''); // 'delete_'를 제거하여 앨범 ID를 추출
        btn.addEventListener('click', function (e) {
          e.preventDefault(); // 기본 이벤트 방지
          deleteSelectedImages(album); // 연관된 앨범의 이미지 삭제
        });
      });

      // 각 이미지에 대하여 클릭 이벤트 리스너를 추가합니다.
      document.addEventListener('click', function (e) {
        if (e.target && e.target.tagName == 'IMG') {
          let checkbox = e.target.nextElementSibling;
          if (checkbox && checkbox.classList.contains('img-checkbox')) {
            toggleImageSelection(checkbox); // 이미지 선택 토글
          }
        }
      });

      // 체크박스 클릭 시 이벤트 버블링을 방지합니다.
      document.querySelectorAll('.img-checkbox').forEach(function (checkbox) {
        checkbox.addEventListener('click', function (e) {
          e.stopPropagation(); // 이벤트 버블링 방지
        });
      });
    })();

    // //이미지 불러오기
    // (function () {

    //   for (let i = 0; i < albumLen; i++) {
    //     let imageNum = 0;
    //     let albumName;
    //     let imgContentSrc = document.getElementById(albumName + "_img_content");

    //     if (i == 0) {
    //       albumName = 'mt';
    //     } else if (i == 1) {
    //       albumName = 'study';
    //     } else {
    //       albumName = 'project'
    //     }

    //     for (let j = 0; j < imagesLen; j++) {
    //       let box = document.createElement("div");

    //       //id, class 추가
    //       box.id = albumName + '_box_' + (j + 1);
    //       box.classList.add('box');

    //       let checkButton = document.createElement("span");

    //       //class 추가
    //       // checkButton.id = albumName + '_check_button_' + (k + 1);
    //       checkButton.classList.add('check_button');
    //       checkButton.classList.add('button');
    //       checkButton.innerText='✓';

    //       let image = document.createElement("img");

    //       //속성 추가
    //       image.src = "../project/image/" + albumName + "/ex" + (imageNum + 1) + ".jpg"; //폴더 구조 및 파일 이름 변경 시 수정 필요
    //       image.alt = albumName + " picture " + (imageNum + 1);

    //       let boxSrc = document.getElementById(albumName + '_box_' + (j + 1));
    //       console.log(boxSrc);

    //       //error

    //       imgContentSrc.appendChild(box);
    //       boxSrc.appendChild(checkButton);
    //       boxSrc.appendChild(image);

    //       imageNum++;
    //     }
    //   }

    // })();

    //사진 업로드
    (function () {
      let mtFile = document.getElementById('mt_file');
      let stydyFile = document.getElementById('study_file');
      let projectFile = document.getElementById('project_file');

      //사진 업로드 함수
      function imageUpload(files, imageBox) {
        for (var i = 0; i < files.length; i++) {
          (function (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
              var img = new Image();
              img.src = e.target.result; // reader가 읽어들인 이미지 데이터를 src로 설정합니다.
              var imageWrapper = document.createElement('div');
              imageWrapper.classList.add('image-wrapper'); //class 추가
              var imageCheckBox = document.createElement('input');
              imageCheckBox.type = 'checkbox' //속성 추가
              imageCheckBox.classList.add('img-checkbox') //class 추가
              imageBox.appendChild(imageWrapper);
              imageWrapper.appendChild(img); // 컨테이너에 이미지를 추가합니다.
              imageWrapper.appendChild(imageCheckBox);
            };
            reader.readAsDataURL(file); // 파일을 Data URL 형태로 읽습니다.
          })(files[i]);
        }
      }

      //mt 사진 업로드
      mtFile.addEventListener('change', function (event) {
        var mtImageBox = document.getElementById('mt_img_box');

        var files = event.target.files; // 선택된 파일들을 가져옵니다.
        imageUpload(files, mtImageBox);
      });

      //study 사진 업로드
      stydyFile.addEventListener('input', function (event) {
        var studyImageBox = document.getElementById('study_img_box');

        var files = event.target.files; // 선택된 파일들을 가져옵니다.
        imageUpload(files, studyImageBox);
      });

      //project 사진 업로드
      projectFile.addEventListener('change', function (event) {
        var projectImageBox = document.getElementById('project_img_box');

        var files = event.target.files; // 선택된 파일들을 가져옵니다.
        imageUpload(files, projectImageBox);
      });
    })();

  }
}










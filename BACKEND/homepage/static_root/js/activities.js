let editPage = document.getElementById('edit_page');

//activities.html, success_page.html일 때
    document.addEventListener("DOMContentLoaded", function () {
      const imagesPerAlbum = 4;
    
      const albums = document.querySelectorAll('.album');
      albums.forEach(album => {
          const imgArea = album.querySelector('.img_area');
          const imgContents = album.querySelectorAll('.img_content');
          let currentIndex = 0;
    
          //다음버튼 클릭하면 넘어가는거
          album.querySelector('.next_button').addEventListener('click', function () {
              if (currentIndex < imgContents.length - imagesPerAlbum) {
                  currentIndex += imagesPerAlbum;
              } else {
                  currentIndex = 0;
              }
              updateImages();
          });
    
          //이전버튼
          album.querySelector('.prev_button').addEventListener('click', function () {
              if (currentIndex > 0) {
                  currentIndex -= imagesPerAlbum;
              } else {
                  currentIndex = imgContents.length - imagesPerAlbum;
              }
              updateImages();
          });
    
          //이미지 크릭햇을때
          imgContents.forEach((imgContent, index) => {
              imgContent.addEventListener('click', function () {
                  
                  imgContent.classList.toggle('size_original');
                  imgContent.classList.toggle('size_large');
    
                  
                  const modalId = album.id + 'Modal';
                  const modal = document.getElementById(modalId);
                  const modalImage = document.getElementById(modalId + 'Image');
                  modalImage.src = imgContent.querySelector('img').src;
    
                  
                  modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
    
                  //다시클릭하면 원래대로ㄲ
                  modalImage.addEventListener('click', function () {
                      imgContent.classList.remove('size_large');
                      imgContent.classList.add('size_original');
                      modal.style.display = 'none';
                  });
              });
          });
    
          function updateImages() {
              imgContents.forEach((imgContent, index) => {
                  const isVisible = (index >= currentIndex && index < currentIndex + imagesPerAlbum);
                  imgContent.style.display = isVisible ? 'block' : 'none';
              });
          }
    
          updateImages();
      });
    });

    
    
//여기서부터는 수정 안함!
  if(editPage){ //edit_page.html일 때
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
        handleFileChange(event, 'mt_file');
      });

      // study
      studyFile.addEventListener('change', function (event) {
        handleFileChange(event, 'study_file');
      });

      // project
      projectFile.addEventListener('change', function (event) {
        handleFileChange(event, 'project_file');
      });

      function handleFileChange(event, targetElementId) {
        let fileNames = Array.from(event.target.files).map(file => file.name).join(', ');
        document.getElementById(targetElementId).value = fileNames;
      }

  }
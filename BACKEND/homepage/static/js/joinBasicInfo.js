
function confirmStudentID() {
  // 학번 확인 로직을 여기에 추가
  document.querySelector('.confirm-button').style.backgroundColor = 'gray';
}


function checkForm() {
  var name = document.getElementById('name').value;
  var studentID = document.getElementById('studentID').value;
  var department = document.getElementById('department').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  

  // 경고 메시지 초기화
  document.getElementById('warningName').innerHTML = '';
  document.getElementById('warningStudentID').innerHTML = '';
  document.getElementById('warningDepartment').innerHTML = '';
  document.getElementById('warningPhoneNumber').innerHTML = '';

  // 필수 입력 항목 확인
  if (name === '') {
      document.getElementById('warningName').innerHTML = '이름을 알맞게 입력해주세요.';

  }

  if (studentID === '') {
      document.getElementById('warningStudentID').innerHTML = '학번을 알맞게 입력해주세요.';
  }

  if (department === '') {
      document.getElementById('warningDepartment').innerHTML = '학과를 알맞게 입력해주세요.';
  }

  if (phoneNumber === '') {
      document.getElementById('warningPhoneNumber').innerHTML = '전화번호(9~11자)를 알맞게 입력해주세요.';
  }
}

function handleInput(input) {
  if (input.value.trim() !== '') {
      input.previousElementSibling.style.fontSize = '12px';
      input.previousElementSibling.style.color = '#999898';
      input.style.borderBottom = '2px solid #000';
  } else {
      input.previousElementSibling.style.fontSize = '16px';
      input.previousElementSibling.style.color = '#999898';
      input.style.borderBottom = '1px solid #333';
  }
}

function confirmStudentID() {
  // 학번 확인 로직을 여기에 추가
  document.querySelector('.confirm-button').style.backgroundColor = 'white';
}

function checkForm() {
  var name = document.getElementById('name');
  var studentID = document.getElementById('studentID');
  var department = document.getElementById('department');
  var phoneNumber = document.getElementById('phoneNumber');

  validateInput(name);
  validateInput(studentID);
  validateInput(department);
  validateInput(phoneNumber);

  // 필수 입력 항목 확인
  if (name.value === '' || studentID.value === '' || department.value === '' || phoneNumber.value === '') {
      alert('모든 필수 항목을 입력해주세요.');
  }
}

function validateInput(input) {
  if (input.value.trim() === '') {
      input.classList.add('input-error');
      input.previousElementSibling.classList.add('input-error');
      input.nextElementSibling.innerHTML = '알맞게 입력해주세요.';
  } else {
      input.classList.remove('input-error');
      input.previousElementSibling.classList.remove('input-error');
      input.nextElementSibling.innerHTML = '';
  }
}

function handleInput(input) {
  if (input.value.trim() !== '') {
      input.previousElementSibling.style.color = '#999898';
      input.style.borderBottom = '2px solid #000';
  } else {
      input.previousElementSibling.style.color = '#999898';
      input.style.borderBottom = '1px solid #333';
  }
}
document.addEventListener('DOMContentLoaded', function() {
  // 모든 input 요소에 focus, blur 이벤트 리스너 등록
  var inputs = document.querySelectorAll('input');
  inputs.forEach(function(input) {
      input.addEventListener('focus', function() {
          handleInput(this);
          validateInput(this);
      });

      input.addEventListener('blur', function() {
          validateInput(this);
      });

      input.addEventListener('input', function() {
          // 사용자가 입력 중이면 빨간 경고 스타일 제거
          if (this.value.trim() !== '') {
              this.classList.remove('input-error');
              this.previousElementSibling.classList.remove('input-error');
              this.nextElementSibling.innerHTML = '';
          }
          if (this.files.length > 0) {
              this.classList.remove('input-error');
              this.previousElementSibling.classList.remove('input-error');
              this.nextElementSibling.innerHTML = '';
        }
      });
  });
});

function confirmStudentID() {
  // 학번 확인 로직을 여기에 추가
  document.querySelector('.confirm-button').style.backgroundColor = 'white';

  var studentIDInput = document.getElementById('studentID');
  var confirmButton = document.querySelector('.confirm-button');

  if (studentIDInput.value.length == 8) {
      confirmButton.style.backgroundColor = '#999898';
      confirmButton.style.color = 'black';

  } else {
      confirmButton.style.backgroundColor = 'white';
  }
}

function checkForm() {
  var name = document.getElementById('name');
  var studentID = document.getElementById('studentID');
  var department = document.getElementById('department');
  var phoneNumber = document.getElementById('phoneNumber');

  validateInput(name);
  validateInput(studentID);
  validateInput(department);
  validateInput(phoneNumber);

  // 필수 입력 항목 확인
  if (name.value === '' || studentID.value === '' || department.value === '' || phoneNumber.value === '') {
      alert('모든 필수 항목을 입력해주세요.');
  }
}

function validateInput(input) {
  var warningMessage = '';

  switch (input.id) {
      case 'name':
          warningMessage = '이름을 알맞게 입력해주세요.';
          break;
      case 'studentID':
          warningMessage = '학번을 알맞게 입력해주세요.';
          break;
      case 'department':
          warningMessage = '학과를 알맞게 입력해주세요.';
          break;
      case 'phoneNumber':
          warningMessage = '전화번호(9~11자)를 알맞게 입력해주세요.';
          break;
      default:
          break;
  }

  if (input.value.trim() === '') {
      input.classList.add('input-error');
      input.previousElementSibling.classList.add('input-error');
      input.nextElementSibling.innerHTML = warningMessage;
  } else {
      input.classList.remove('input-error');
      input.previousElementSibling.classList.remove('input-error');
      input.nextElementSibling.innerHTML = '';
  }
}

function handleInput(input) {
  if (input.value.trim() !== '') {
      input.previousElementSibling.style.color = '#999898';
      input.style.borderBottom = '2px solid #000';
  } else {
      input.previousElementSibling.style.color = '#999898';
      input.style.borderBottom = '1px solid #333';
  }
}


function checkForm() {
  // 폼 요소들 참조
  var userName = document.getElementById('id_user_name').value;
  var userNumber = document.getElementById('id_user_number').value;
  var userMajor = document.getElementById('id_user_major').value;
  var userPhoneNumber = document.getElementById('id_user_phone_number').value;

  // 모든 필드가 비어있는지 확인
  if (userName === '' || userNumber === '' || userMajor === '' || userPhoneNumber === '') {
    alert('모두 입력해주세요.');
  } else {
    // 폼이 올바르게 입력되었을 때
    alert('제출되었습니다. 감사합니다~');
    
  }
}




document.getElementById('id_user_file').addEventListener('change', function () {
  handleFileSelection('id_user_file', 'file2', 'filePreview');
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




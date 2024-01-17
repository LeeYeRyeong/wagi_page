

$(document).ready(function () {

  //새로고침하면 맨위로 올라가는 코드임둥
  $(window).on('beforeunload', function () {
    $(window).scrollTop(0);
  });

  var peopleData = [
      { photo: "사진1", name: "이름1", github: "링크1", home: "링크2", intro: "소개글1" },
      { photo: "사진2", name: "이름2", github: "링크3", home: "링크4", intro: "소개글2" },
      { photo: "사진1", name: "이름1", github: "링크1", home: "링크2", intro: "소개글1" },
      { photo: "사진2", name: "이름2", github: "링크3", home: "링크4", intro: "소개글2" },

  ];

//왼쪽 말풍선
  function createLeft(person) {
      var personHTML = `
          <div class="L_bubble">
              <div class="L_photo">
                  <h1>${person.photo}</h1>
              </div>
              <div class="L_name">
                  <h2>${person.name}</h2>
              </div>
              <div class="L_link">
                  <div><a href="${person.github}"><img src='../static/img/github.svg'></a> 
                  <a href="${person.home}"><img src= '../static/img/home.svg' ></a></div>
              </div>
              <div class="L_text">
                  <h3>${person.intro}</h3>
              </div>
          </div>
      `;
      return personHTML;
  }
  //오른쪽 말풍선임
  function createRight(person) {
    var personHTML = `
        <div class="R_bubble">
            <div class="R_photo">
                <h1>${person.photo}</h1>
            </div>
            <div class="R_name">
                <h2>${person.name}</h2>
            </div>
            <div class="R_link">
                <div><a href="${person.github}"><img src='../static/img/github.svg'></a> 
                <a href="${person.home}"><img src= '../static/img/home.svg' ></a></div>
            </div>
            <div class="R_text">
                <h3>${person.intro}</h3>
            </div>
        </div>
    `;
    return personHTML;
}


function appendPerson(person) {
  var centerDiv = $('.center');
  if (centerDiv.children().length % 2 === 0) {
    var personElement = createLeft(person);
    centerDiv.append(personElement);
  } else {
    var personElement = createRight(person);
    centerDiv.append(personElement);
  }
}
//초기 세팅 2개 말풍선 띄워놓기
appendPerson(peopleData[0]);
appendPerson(peopleData[1]);

function handleWheelEvent(event) {
  if (event.originalEvent.deltaY > 0) {
    if (currentIndex < peopleData.length) {
      appendPerson(peopleData[currentIndex]);
      currentIndex++;
    }
  }
}

var currentIndex = 2; //초기2개 이후부터 시작

$(window).on('mousewheel', handleWheelEvent);
});

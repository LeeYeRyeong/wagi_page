window.onload = function() {
  setTimeout(function(){
    window.scrollTo(0, 0);
  }, 100); 
};

document.addEventListener('DOMContentLoaded', function() {
  const peopleData = [
      {
        name: "이예령",
        photo: "../static/img/people/이예령.png",
        bio: "개발자 가보자고",
        link_1: "https://github.com/LeeYeRyeong",
        link_2: "https://ryeong-322.tistory.com",
      },
      {
        name: "이나경",
        photo: "../static/img/people/이나경.png",
        bio: "WAGI의 창조주 잇츠미에요.",
        link_1: "https://github.com/nagaeng",
      },
      {
        name: "김현수",
        photo: "../static/img/people/김현수.png",
        bio: "하고 싶은 거 많은 아기 개발자",
        link_1: "https://github.com/maeng-kim",
        link_2: "https://maeng-kim.tistory.com",
    },
    {
        name: "전소현",
        photo: "../static/img/people/전소현.png",
        bio: "와기들의 엄마예요. 잘 부탁해요:)",
        link_1: "https://github.com/ssohy",
        link_2: "https://sso-programing.tistory.com",
    },
    {
      name: "한세나",
      photo: "../static/img/people/한세나.png",
      bio: "와기&세나 우정 영원히 ^♡^",
      link_1: "https://github.com/Sena-Han",
      link_2: "https://5-22hz.tistory.com",
    },
    {
        name: "송혜음",
        photo: "../static/img/people/송혜음.png",
        bio: "와기 디자인 제가 했답니다Vv",
        link_1: "https://github.com/hyeumm",
        link_2: "https://hellohyeummworld.tistory.com",
    },
    {
      name: "이승희",
      photo: "../static/img/people/이승희.png",
      bio: "WAGI 소속 버블티 전문가",
      link_1: "https://github.com/sssthnnhee",
    },
    {
        name: "강다인",
        photo: "../static/img/people/강다인.png",
        bio: "코딩짱이 되고 싶어요오",
        link_1: "https://github.com/kang-dain"
    },
      
    {
      name: "강채연",
      photo: "../static/img/people/강채연.png",
      bio: "코딩 천재가 되어 보자.",
      link_1: "https://github.com/chaeyeo",
    },
    {
      name: "윤정민",
      photo: "../static/img/people/윤정민.png",
      bio: "아자잣..!",
      link_1: "https://github.com/youn-jungmin",
    },
    {
      name: "채서연",
      photo: "../static/img/people/채서연.png",
      bio: "나는야 말하는 감자",
      link_1: "https://github.com/sbukkki",
    },
    {
      name: "최수진",
      photo: "../static/img/people/최수진.png",
      bio: "구글 삼성 와기 let's go",
      link_1: "https://github.com/jinsujini",
      link_2: "https://sujinsutory.tistory.com/",
    },
    {
        name: "조수빈",
        photo: "../static/img/people/조수빈.png",
        bio: "ChatGpt 하위 호환아님. 아마도..",
        link_1: "https://github.com/s0obang",
        link_2: "https://acrobaticcatapillar.tistory.com/",
    },
    {
      name: "박시현",
      photo: "../static/img/people/박시현.png",
      bio: "코딩계의 피카소",
      link_1: "https://github.com/88guri",
      link_2: "https://welcome88guridesu.tistory.com/",
    },
    {
        name: "이현수",
        photo: "../static/img/people/이현수.png",
        bio: "코딩..해볼게요",
        link_1: "https://github.com/stella9921",
    },
    {
      name: "전민선",
      photo: "../static/img/people/전민선.png",
      bio: "즐거운 코딩 ~.~",
      link_1: "https://github.com/mminnn28",
    },
    {
      name: "김지희",
      photo: "../static/img/people/김지희.png",
      bio: "커피챗해요",
      link_1: "https://github.com/romdyfo",
    },
    {
      name: "정은혜",
      photo: "../static/img/people/정은혜.png",
      bio: "부자가 되고 시퍼요",
      link_1: "https://github.com/rangrang13",
      link_2: "https://rangrang1113.tistory.com/",
    },
    {
      name: "김다예",
      photo: "../static/img/people/김다예.png",
      bio: "성신 최고 개발 동아리 WAGI 부원입니다 :D",
      link_1: "https://github.com/kdy09687",
    },
      
    ];

    const container = document.querySelector('.center');
    let visibleBubbles = 2;

  
    function createBubble(person, isLeft) {
      const bubble = document.createElement('div');
      bubble.classList.add(isLeft ? 'L_bubble' : 'R_bubble');
  
      bubble.style.animation = 'bubbleFadeIn 0.7s forwards';
  
      const photo = document.createElement('div');
      photo.classList.add(isLeft ? 'L_photo' : 'R_photo');
      const img = document.createElement('img');
      img.src = person.photo;
      img.alt = person.name;
      img.style.maxHeight = "120px";
      img.style.maxWidth = "120px";
      photo.appendChild(img);
  
      const name = document.createElement('div');
      name.classList.add(isLeft ? 'L_name' : 'R_name');
      name.innerHTML = `<h2>${person.name}</h2>`;
  
      const rink = document.createElement('div');
      rink.classList.add(isLeft ? 'L_rink' : 'R_rink');
      //링크가 2개일때랑 1개일때 구분해서 생성하는 코드입니다. 
      if(person.link_2){
        rink.innerHTML = `<div><a href="${person.link_1}"><img src ="../static/img/github.svg" /></a>
                        <a href="${person.link_2}"><img src ="../static/img/home.svg" /></a></div>`; 
      }
      else {
        rink.innerHTML = '<a href="${person.link_1}"><img src ="../static/img/github.svg" /></a>';
      }
      
  
      const text = document.createElement('div');
      text.classList.add(isLeft ? 'L_text' : 'R_text');
      text.innerHTML = `<p>"${person.bio}"</p>`;
  
      bubble.appendChild(photo);
      bubble.appendChild(name);
      bubble.appendChild(rink);
      bubble.appendChild(text);
  
      container.appendChild(bubble);
    }
  
    for (let i = 0; i < 2 && i < peopleData.length; i++) {
      addBubbleWithDelay(i)  
    }
  
    function addBubbleWithDelay(index) {
      setTimeout(function () {
          const person = peopleData[index];
          createBubble(person, index % 2 === 0);
          visibleBubbles++;
      }, index * 100); //  딜레이를 조절
  }

    window.addEventListener('wheel', function (event) {
      const deltaY = event.deltaY;
      
      if (deltaY > 90 && visibleBubbles < peopleData.length) {
        const person = peopleData[visibleBubbles];
        createBubble(person, visibleBubbles % 2 === 0);
        visibleBubbles++;
      }
    });

  });
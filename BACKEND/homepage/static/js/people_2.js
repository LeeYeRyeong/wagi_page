window.onload = function() {
  setTimeout(function(){
    window.scrollTo(0, 0);
  }, 100); 
};

document.addEventListener('DOMContentLoaded', function() {
  const peopleData = [
      {
        name: "조수빈",
        photo: "../static/img/people/조수빈.png",
        bio: "ChatGpt 하위 호환아님. 아마도..",
        link_1: "https://github.com/s0obang",
        link_2: "https://acrobaticcatapillar.tistory.com/",
      },
      {
        name: "전민선",
        photo: "../static/img/people/전민선.png",
        bio: "즐거운 코딩 ~.~",
        link_1: "https://github.com/mminnn28",
        link_2: "https://mminnn28.tistory.com/",
      },
      {
        name: "최수진",
        photo: "../static/img/people/최수진.png",
        bio: "구글 삼성 와기 let's go",
        link_1: "https://github.com/jinsujini",
        link_2: "https://sujinsutory.tistory.com/",
      },
      
      {
        name: "박시현",
        photo: "../static/img/people/박시현.png",
        bio: "코딩계의 피카소",
        link_1: "https://github.com/88guri",
        link_2: "https://welcome88guridesu.tistory.com/",
      },
      {
        name: "김지희",
        photo: "../static/img/people/김지희.png",
        bio: "커피챗해요",
        link_1: "https://github.com/romdyfo",
      },
      
    ];

    //모바일일때 js
    if (window.matchMedia('(max-width: 450px)').matches){
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
      img.style.maxHeight = "95px";
      img.style.maxWidth = "95px";
      photo.appendChild(img);
  
      const name = document.createElement('div');
      name.classList.add(isLeft ? 'L_name' : 'R_name');
      name.innerHTML = `<h2>${person.name}</h2>`;
  
      const rink = document.createElement('div');
      rink.classList.add(isLeft ? 'L_link' : 'R_link');
      //링크가 2개일때랑 1개일때 구분해서 생성하는 코드
      if (person.link_2) {
        rink.innerHTML = `
                <a href="${person.link_1}" style = "margin-left : 5px;"><img src ="../static/img/github_mini.svg" /></a>
                <a href="${person.link_2}"  style = "margin-right : 5px;"><img src ="../static/img/home_mini.svg" /></a>
      `;
      } 
      else {
        rink.innerHTML = `
          <a href="${person.link_1}"  style = " margin-left: 5px; float : "right;"
          ><img src ="../static/img/github_mini.svg" /></a>`;
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
        const person = peopleData[i];
        createBubble(person, i % 2 === 0);    
      }

    
      var Y = 100;
  
      window.addEventListener('scroll', function () {
        var winY = window.scrollY;
        if (winY > Y*1.2) {
          const person = peopleData[visibleBubbles];
          createBubble(person, visibleBubbles % 2 === 0);
          visibleBubbles++;
         Y = Y + 100;
        }
      });

    }

    //pc 일때 js
    else  {
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
        img.style.maxHeight = "95px";
        img.style.maxWidth = "95px";
        photo.appendChild(img);
    
        const name = document.createElement('div');
        name.classList.add(isLeft ? 'L_name' : 'R_name');
        name.innerHTML = `<h2>${person.name}</h2>`;
    
        const rink = document.createElement('div');
        rink.classList.add(isLeft ? 'L_rink' : 'R_rink');
        //링크가 2개일때랑 1개일때 구분해서 생성하는 코드 
        if (person.link_2) {
          rink.innerHTML = `
                  <a href="${person.link_1}" style = "margin-left : 5px;"><img src ="../static/img/github.svg" /></a>
                  <a href="${person.link_2}"><img src ="../static/img/home.svg" /></a>
        `;
        } 
        else {
          rink.innerHTML = `
            <a href="${person.link_1}"  style = "margin-left : 5px;"><img src ="../static/img/github.svg" /></a>`;
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
        const person = peopleData[i];
        createBubble(person, i % 2 === 0);    
      }

      
      var Y = 100;
    
      window.addEventListener('scroll', function () {
        var winY = window.scrollY;
        if (winY > Y*1.5) {
          const person = peopleData[visibleBubbles];
          createBubble(person, visibleBubbles % 2 === 0);
          visibleBubbles++;
          Y = Y + 140;
        }
      });

    }




  });
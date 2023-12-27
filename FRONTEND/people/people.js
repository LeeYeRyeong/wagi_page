window.onload = function() {
  setTimeout(function(){
    window.scrollTo(0, 0);
  }, 100); 
};

document.addEventListener('DOMContentLoaded', function() {
  const peopleData = [
      {
          name: "John",
          photo: "john.jpg",
          bio: "안녕하세요, 저는 John입니다.",
          link: "https://example.com/john"
      },
      {
          name: "Emily",
          photo: "emily.jpg",
          bio: "반갑습니다, 저는 Emily입니다.",
          link: "https://example.com/emily"
      },
      {
        name: "John",
        photo: "john.jpg",
        bio: "안녕하세요, 저는 John입니다.",
        link: "https://example.com/john"
      },
      {
          name: "Emily",
          photo: "emily.jpg",
          bio: "반갑습니다, 저는 Emily입니다.",
          link: "https://example.com/emily"
      },
      {
        name: "John",
        photo: "john.jpg",
        bio: "안녕하세요, 저는 John입니다.",
        link: "https://example.com/john"
      },
      {
          name: "Emily",
          photo: "emily.jpg",
          bio: "반갑습니다, 저는 Emily입니다.",
          link: "https://example.com/emily"
      },
      {
        name: "John",
        photo: "john.jpg",
        bio: "안녕하세요, 저는 John입니다.",
        link: "https://example.com/john"
      },
      {
          name: "Emily",
          photo: "emily.jpg",
          bio: "반갑습니다, 저는 Emily입니다.",
          link: "https://example.com/emily"
      },
    ];

    const container = document.querySelector('.center');
    let visibleBubbles = 0;

  
    function createBubble(person, isLeft) {
      const bubble = document.createElement('div');
      bubble.classList.add(isLeft ? 'L_bubble' : 'R_bubble');
  
      bubble.style.animation = 'bubbleFadeIn 0.7s forwards';
  
      const photo = document.createElement('div');
      photo.classList.add(isLeft ? 'L_photo' : 'R_photo');
      const img = document.createElement('img');
      img.src = person.photo;
      img.alt = person.name;
      photo.appendChild(img);
  
      const name = document.createElement('div');
      name.classList.add(isLeft ? 'L_name' : 'R_name');
      name.innerHTML = `<h2>${person.name}</h2>`;
  
      const rink = document.createElement('div');
      rink.classList.add(isLeft ? 'L_rink' : 'R_rink');
      rink.innerHTML = `<a href="${person.link}">링크</a>`;
  
      const text = document.createElement('div');
      text.classList.add(isLeft ? 'L_text' : 'R_text');
      text.innerHTML = `<p>${person.bio}</p>`;
  
      bubble.appendChild(photo);
      bubble.appendChild(name);
      bubble.appendChild(rink);
      bubble.appendChild(text);
  
      container.appendChild(bubble);
    }
  
    for (let i = 0; i < 2 && i < peopleData.length; i++) {
      const person = peopleData[i];
      createBubble(person, i % 2 === 0);
      visibleBubbles++;
    }
  
    window.addEventListener('scroll', function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      let scrollIncrement = 60;

      if ( scrollTop >= scrollIncrement && visibleBubbles < peopleData.length) {
        const person = peopleData[visibleBubbles];
        createBubble(person, visibleBubbles % 2 === 0);
        visibleBubbles++;
      }

    });
  });
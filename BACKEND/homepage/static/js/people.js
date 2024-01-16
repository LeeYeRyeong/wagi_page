window.onload = function() {
  setTimeout(function(){
      window.scrollTo(0, 0);
  }, 100);
};

document.addEventListener('DOMContentLoaded', function() {
  fetch('people',{
    headers: {
	    Accept: "application / json",
	  },
	  method: "GET",

  })
  .then(response => response.json())
  .then(data => {
    const peopleData = data;
    console.log('Fetched data:', peopleData);

      const container = document.querySelector('.center');
      let visibleBubbles = 0;

      function createBubble(person, isLeft) {
          const bubble = document.createElement('div');
          bubble.classList.add(isLeft ? 'L_bubble' : 'R_bubble');

          bubble.style.animation = 'bubbleFadeIn 0.7s forwards';

          const photo = document.createElement('div');
          photo.classList.add(isLeft ? 'L_photo' : 'R_photo');
          const img = document.createElement('img');
          img.src = person.user_image;  // user_image 필드를 사용하여 이미지 경로 설정
          img.alt = person.user_image;
          img.style.maxHeight = "130px";
          img.style.maxWidth = "130px";
          photo.appendChild(img);

          const name = document.createElement('div');
          name.classList.add(isLeft ? 'L_name' : 'R_name');
          name.innerHTML = `<h2>${person.user_name}</h2>`;

          const link = document.createElement('div');
          link.classList.add(isLeft ? 'L_rink' : 'R_rink');
          
          // 포트폴리오 링크 추가
          link.innerHTML = `<a href="${person.user_portfolio1}"><img src="github.svg" /></a>
                            <a href="${person.user_portfolio2}"><img src="home.svg" /></a>`;

          const text = document.createElement('div');
          text.classList.add(isLeft ? 'L_text' : 'R_text');
          text.innerHTML = `<p>"${person.user_bio}"</p>`;

          bubble.appendChild(photo);
          bubble.appendChild(name);
          bubble.appendChild(link);
          bubble.appendChild(text);

          container.appendChild(bubble);
      }

      for (let i = 0; i < 2 && i < peopleData.length; i++) {
          const person = peopleData[i];
          createBubble(person, i % 2 === 0);    
      }

      window.addEventListener('wheel', function (event) {
          const deltaY = event.deltaY;

          if (deltaY > 30 && visibleBubbles < peopleData.length) {
              const person = peopleData[visibleBubbles];
              createBubble(person, visibleBubbles % 2 === 0);
              visibleBubbles++;
          }
      });
  })
  .catch(error => console.error('Error fetching data:', error));
});
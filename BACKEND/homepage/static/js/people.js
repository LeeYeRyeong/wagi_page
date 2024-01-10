window.onload = function() {
  setTimeout(function(){
    window.scrollTo(0, 0);
  }, 100); 
};

document.addEventListener('DOMContentLoaded', function() {
  const peopleContainer = document.getElementById('people-data');
  const peopleData = JSON.parse(peopleContainer.getAttribute('data-people'));
      


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
      img.style.maxHeight = "130px";
      img.style.maxWidth = "130px";
      photo.appendChild(img);
  
      const name = document.createElement('div');
      name.classList.add(isLeft ? 'L_name' : 'R_name');
      name.innerHTML = `<h2>${person.name}</h2>`;
  
      const rink = document.createElement('div');
      rink.classList.add(isLeft ? 'L_rink' : 'R_rink');
      //링크가 2개일때랑 1개일때 구분해서 생성하는 코드입니다. 
      if(person.link_2){
        rink.innerHTML = `<a href="${person.link_1}"><img src ="github.svg" /></a>
                         <a href="${person.link_2}"><img src ="home.svg" /></a>`; 
      }
      else {
        rink.innerHTML = '<a href="${person.link_1}"><img src ="github.svg" /></a>';
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
  

    window.addEventListener('wheel', function (event) {
      const deltaY = event.deltaY;
      
      if (deltaY > 30 && visibleBubbles < peopleData.length) {
        const person = peopleData[visibleBubbles];
        createBubble(person, visibleBubbles % 2 === 0);
        visibleBubbles++;
      }
    });

  });
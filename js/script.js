window.onload=function(){
  // populate feed
  populateFeed()
}

function populateFeed() {
  let html = '';
  for (let i = 0; i < dataset.length; i++) {
    html += `
      <section style="background-image:url('${dataset[i].photo}')">
          <div class="post-container">
            <div class="post-title-bar">
              <img class="profile-picture" src="${dataset[i].avatar}"/>
              <div class="post-info">
                <span class="username">${dataset[i].username}</span>
                <span class="location">${dataset[i].location}</span>
              </div>
              <button><span id="theme-toggle" class="material-icons">more_vert</span></button>
            </div>
            <img src="${dataset[i].photo}" />
            <div class="post-description">
              <p>${dataset[i].post}</p>
            </div>
            <div class="post-buttons">
              <button><span id="theme-toggle" class="material-icons">favorite</span></button>
              <button><span id="theme-toggle" class="material-icons">chat_bubble</span></button>
              <button><span id="theme-toggle" class="material-icons">send</span></button>
            </div>
          </div>
        </section>
      `;
  }
  const target = document.querySelector('main');
  target.innerHTML = html;
}

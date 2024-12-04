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
              <button>Menu</button>
            </div>
            <img src="${dataset[i].photo}" />
            <div class="post-description">
              <p>${dataset[i].post}</p>
            </div>
            <div class="post-buttons">
              <button>Like</button>
              <button>Comment</button>
              <button>Share</button>
            </div>
          </div>
        </section>
      `
  }
  const target = document.querySelector('main');
  target.innerHTML = html;
}

function uploadPost() {
  const fileInput = document.getElementById("fileInput");
  const feed = document.getElementById("feed");

  if (fileInput.files.length === 0) {
    alert("Iltimos, rasm yoki video tanlang");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const post = document.createElement("div");
    post.className = "post";

    let media;
    if (file.type.startsWith("video/")) {
      media = `<video controls width="100%">
                 <source src="${e.target.result}" type="${file.type}">
                 Brauzeringiz video formatini qo‘llamaydi.
               </video>`;
    } else {
      media = `<img src="${e.target.result}" alt="Image" style="width: 100%;">`;
    }

    post.innerHTML = `
      ${media}
      <div class="actions">
        <button onclick="likePost(this)">❤️ Like</button>
        <input type="text" placeholder="Komment yozing...">
      </div>
    `;

    feed.prepend(post);
  };

  reader.readAsDataURL(file);
}

  const fileInput = document.getElementById("fileInput");
  const feed = document.getElementById("feed");

  if (fileInput.files.length === 0) {
    alert("Iltimos rasm tanlang");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const post = document.createElement("div");
    post.className = "post";
    post.innerHTML = `
      <img src="${e.target.result}" alt="Post image">
      <div class="actions">
        <button onclick="likePost(this)">❤️ Like</button>
        <input type="text" placeholder="Comment yozing...">
      </div>
    `;
    feed.prepend(post);
  };

  reader.readAsDataURL(file);
}

function likePost(btn) {
  btn.textContent = "❤️ Liked";
}

function showFeed() {
  alert("Bosh sahifa ochildi");
}

function showProfile() {
  alert("Profil sahifasi hali tayyor emas");
}

document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

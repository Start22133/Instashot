function uploadPost() {
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

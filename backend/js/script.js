const form = document.getElementById("feedbackForm");
const commentsList = document.getElementById("commentsList");

// Cargar comentarios al iniciar
function loadComments() {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  commentsList.innerHTML = "";

  // Mostrar los más recientes primero
  comments
    .slice()
    .reverse()
    .forEach((c) => {
      const div = document.createElement("div");
      div.classList.add("comment");

      div.innerHTML = `
        <div class="d-flex justify-content-between">
          <strong>${c.user}</strong>
          <small>${c.date}</small>
        </div>
        <div>${"⭐".repeat(c.rating)}</div>
        <p class="mb-0">${c.text}</p>
      `;

      commentsList.appendChild(div);
    });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("user").value.trim();
  const rating = document.getElementById("rating").value;
  const comment = document.getElementById("comment").value.trim();

  if (!user || !rating || !comment) {
    alert("Completa todos los campos");
    return;
  }

  const newComment = {
    user: user,
    rating: parseInt(rating),
    text: comment,
    date: new Date().toLocaleString(),
  };

  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push(newComment);

  localStorage.setItem("comments", JSON.stringify(comments));

  form.reset();
  loadComments();
});

loadComments();

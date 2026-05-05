const API = "http://localhost:5000/api/books";

async function fetchBooks() {
  const res = await fetch(API);
  const data = await res.json();

  const list = document.getElementById("bookList");
  list.innerHTML = "";

  data.forEach(book => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${book.title} (${book.isbn})
      <button onclick="deleteBook('${book._id}')">Delete</button>
    `;
    list.appendChild(li);
  });
}

async function deleteBook(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  fetchBooks();
}

document.getElementById("bookForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const isbn = document.getElementById("isbn").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, isbn })
  });

  fetchBooks();
});

fetchBooks();
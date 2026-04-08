const apiKey = process.env.NYT_API_KEY;
const url = `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${apiKey}`;
const gallery = document.getElementById('books-gallery');
const footer = document.querySelector('footer');

async function fetchBooks() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();

    if (data.copyright) {
      const copyrightElem = document.createElement('p');
      copyrightElem.className = 'text-sm text-gray-400 mt-2';
      copyrightElem.textContent = data.copyright;
      footer.appendChild(copyrightElem);
    }

    // Flatten all books from each list
    const books = data.results.lists.flatMap(list => list.books);

    books.forEach(book => {
      if (!book.title || !book.book_image) return;

      const card = document.createElement('div');
      card.className = 'article-card bg-gray-800 border-2 border-cyan-400 rounded overflow-hidden shadow-lg hover:scale-105 transition-transform';

      card.innerHTML = `
        <img src="${book.book_image}" alt="${book.title}" class="w-full h-64 object-cover">
        <div class="p-4">
          <h2 class="text-lg font-bold text-cyan-400 mb-2">${book.title}</h2>
          <p class="text-sm mb-2">${book.description}</p>
          ${book.amazon_product_url ? `<a href="${book.amazon_product_url}" target="_blank" class="text-yellow-400 hover:underline">Buy Now</a>` : ''}
        </div>
      `;

      gallery.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching books:', error);
    gallery.innerHTML = `<p class="text-red-500">Failed to load books. Please try again later.</p>`;
  }
}

fetchBooks();

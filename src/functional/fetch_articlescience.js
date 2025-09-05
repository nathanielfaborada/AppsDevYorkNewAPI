const apiKey = 'wH1aTA62Rv1D74uPnKlk5kP1VUKEYN03';
const section = 'science';
const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`;
const articlesContainer = document.getElementById('articles');
const footer = document.querySelector('footer');

async function fetchArticles() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();

    // Insert copyright dynamically
    if (data.copyright) {
      const copyrightElem = document.createElement('p');
      copyrightElem.className = 'text-sm text-gray-400 mt-2';
      copyrightElem.textContent = data.copyright;
      footer.appendChild(copyrightElem);
    }

    // Filter out empty articles
    const validArticles = data.results.filter(article => {
      return (article.abstract && article.abstract.trim() !== '') || 
             (article.url && article.url !== "null");
    });

    validArticles.forEach(article => {
      const card = document.createElement('div');
      card.className = 'article-card';

      // Pick a good image
      let imageUrl = '';
      if (article.multimedia && article.multimedia.length > 0) {
        const img = article.multimedia.find(m => m.format === 'mediumThreeByTwo440') || article.multimedia[0];
        imageUrl = img.url;
      }

      // Build article HTML
      let cardHTML = `
        ${imageUrl ? `<img src="${imageUrl}" alt="${article.title}" class="w-full h-48 object-cover mb-4 rounded">` : ''}
        <h2 class="text-xl font-bold mb-2 text-cyan-400">${article.title}</h2>
        <p class="mb-2">${article.abstract}</p>
      `;

      // Only add "Read more" if URL is valid
      if (article.url && article.url !== "null") {
        cardHTML += `<a href="${article.url}" target="_blank" class="text-yellow-400 hover:underline">Read more</a>`;
      }

      card.innerHTML = cardHTML;
      articlesContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching top stories:', error);
    articlesContainer.innerHTML = `<p class="text-red-500">Failed to load articles. Please try again later.</p>`;
  }
}

// Call the function
fetchArticles();

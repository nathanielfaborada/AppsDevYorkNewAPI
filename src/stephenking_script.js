const API_Url_Remote = 'https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=z9vMI8z1dlIkcPAYT255wqx6jrHy86Kh';

const API_Url_Local = '/stephenking.json';

const MainLogo = document.getElementById('logo');
const MainContent = document.getElementById('stephen');


const GETalldata = async () => {
  try {

    const res = await fetch(API_Url_Remote);

    if (!res.ok) throw new Error(`Error fetching from remote: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.warn('Fetching remote data failed, switching to local data', e);
    try {
      
      const res = await fetch(API_Url_Local);
      if (!res.ok) throw new Error(`Error fetching from local: ${res.status}`);
      const data = await res.json();
      return data;
    } catch (error) {
      alert('An error occurred while fetching local data');
      console.error(error);
      return [];
    }
  }
};

(async () => {
  const data = await GETalldata();

  console.log(data);
})();

const updateNAVBAR = (data) => { 
  MainLogo.innerHTML = ''; 
  const author = (data.results && data.results[0]) || { book_author: 'Unknown Author' };
    const headerContainer = document.createElement('nav','label');
    headerContainer.setAttribute('class', 'logo');
    headerContainer.innerHTML = `
      <h1>${author.book_author}</h1>
    `;
    MainLogo.appendChild(headerContainer);

};

(async () => {
  const data = await GETalldata();
  updateNAVBAR(data);
})();

const updateContainer = (data) => {
  MainContent.innerHTML = '';

  // Access the 'books' array inside 'results'
  const books = data.results || [];

  // Use slice to get the first 8 books
  books.slice(0, 8).forEach((book) => {
    const bookContainer = document.createElement('div');
    bookContainer.setAttribute('class', 'main-content');

    // Create an anchor element with the book's URL, title, and byline
    bookContainer.innerHTML = `
      <a href="${book.url}" target="_blank">
        ${book.book_title || 'No title'}, by ${book.byline || 'Unknown Author'}
      </a>
    `;

    MainContent.appendChild(bookContainer);
  });
};

// Simulating the data fetch as an async function
(async () => {
  // Replace this with the actual function to get the data
  const data = await GETalldata();
  updateContainer(data);
})();



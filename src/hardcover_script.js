const API_Url_Remote = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=z9vMI8z1dlIkcPAYT255wqx6jrHy86Kh';
const API_Url_Local = '/Hardcover_fiction.json';
const TopHeader = document.getElementById('best-sellers');
const MainLogo = document.getElementById('logo');
const ContentDescriptions = document.getElementById('descriptions');


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


// Update Navbar with Logo
const updateNAVBAR = (data) => { 
  MainLogo.innerHTML = ''; 
  const displayName = data.results?.display_name || 'Unnamed Site';
  const headerContainer = document.createElement('nav');
  headerContainer.setAttribute('class', 'logo');
  headerContainer.innerHTML = `
    <h1>${displayName}</h1>
  `;
  MainLogo.appendChild(headerContainer);
};

// Update Book Cards
const updateContainer = (data) => {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML = ''; 

  // Access the 'books' array inside 'results'
  (data.results.books || []).forEach((book) => {
   
    const bookContainer = document.createElement('div');
    bookContainer.setAttribute('class', 'flip-card');

    const flipCardInner = document.createElement('div');
    flipCardInner.setAttribute('class', 'flip-card-inner');

    const flipCardFront = document.createElement('div');
    flipCardFront.setAttribute('class', 'flip-card-front');
    flipCardFront.innerHTML = `
      <img src="${book.book_image || 'no img'}" >
    `;

    const flipCardBack = document.createElement('div');
    flipCardBack.setAttribute('class', 'flip-card-back');
    flipCardBack.innerHTML = `
      <h2>${book.title}</h2>
      <p>Publisher: ${book.publisher}</p>
      <h2>Book Author: ${book.author || ''}</h2>
      
      <p>Description: ${book.description || 'No description available'}</p>
    `;


    flipCardInner.appendChild(flipCardFront);
    flipCardInner.appendChild(flipCardBack);

    bookContainer.appendChild(flipCardInner);

    cardContainer.appendChild(bookContainer);
  });
};


(async () => {
  const data = await GETalldata(); 
  updateNAVBAR(data);              
  updateContainer(data);           
})();

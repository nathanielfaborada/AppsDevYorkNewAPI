// Remote = https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=z9vMI8z1dlIkcPAYT255wqx6jrHy86Kh
const API_Url = "/stephenking.json";
const MainLogo = document.getElementById("logo");
const MainContent = document.getElementById("stephen");
const GETalldata = async ()=>{
    try {
        const res = await fetch(API_Url);
        const data = await res.json();
        return data;
    } catch (e) {
        alert("An error occurred");
        console.error(e);
        return [];
    }
};
const updateNAVBAR = (data)=>{
    MainLogo.innerHTML = "";
    const author = data.results && data.results[0] || {
        book_author: "Unknown Author"
    };
    const headerContainer = document.createElement("nav", "label");
    headerContainer.setAttribute("class", "logo");
    headerContainer.innerHTML = `
      <h1>${author.book_author}</h1>
    `;
    MainLogo.appendChild(headerContainer);
};
(async ()=>{
    const data = await GETalldata();
    updateNAVBAR(data);
})();
const updateContainer = (data)=>{
    MainContent.innerHTML = "";
    // Access the 'books' array inside 'results'
    const books = data.results || [];
    // Use slice to get the first 8 books
    books.slice(0, 8).forEach((book)=>{
        const bookContainer = document.createElement("div");
        bookContainer.setAttribute("class", "main-content");
        // Create an anchor element with the book's URL, title, and byline
        bookContainer.innerHTML = `
      <a href="${book.url}" target="_blank">
        ${book.book_title || "No title"}, by ${book.byline || "Unknown Author"}
      </a>
    `;
        MainContent.appendChild(bookContainer);
    });
};
// Simulating the data fetch as an async function
(async ()=>{
    // Replace this with the actual function to get the data
    const data = await GETalldata();
    updateContainer(data);
})();

//# sourceMappingURL=stephen-king.2ac11fdf.js.map

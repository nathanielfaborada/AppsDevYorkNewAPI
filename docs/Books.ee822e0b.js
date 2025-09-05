let apiKey="wH1aTA62Rv1D74uPnKlk5kP1VUKEYN03",url="https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=wH1aTA62Rv1D74uPnKlk5kP1VUKEYN03",gallery=document.getElementById("books-gallery"),footer=document.querySelector("footer");async function fetchBooks(){try{let e=await fetch("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=wH1aTA62Rv1D74uPnKlk5kP1VUKEYN03");if(!e.ok)throw Error(`HTTP error! Status: ${e.status}`);let t=await e.json();if(t.copyright){let e=document.createElement("p");e.className="text-sm text-gray-400 mt-2",e.textContent=t.copyright,footer.appendChild(e)}t.results.lists.flatMap(e=>e.books).forEach(e=>{if(!e.title||!e.book_image)return;let t=document.createElement("div");t.className="article-card bg-gray-800 border-2 border-cyan-400 rounded overflow-hidden shadow-lg hover:scale-105 transition-transform",t.innerHTML=`
        <img src="${e.book_image}" alt="${e.title}" class="w-full h-64 object-cover">
        <div class="p-4">
          <h2 class="text-lg font-bold text-cyan-400 mb-2">${e.title}</h2>
          <p class="text-sm mb-2">${e.description}</p>
          ${e.amazon_product_url?`<a href="${e.amazon_product_url}" target="_blank" class="text-yellow-400 hover:underline">Buy Now</a>`:""}
        </div>
      `,gallery.appendChild(t)})}catch(e){console.error("Error fetching books:",e),gallery.innerHTML='<p class="text-red-500">Failed to load books. Please try again later.</p>'}}fetchBooks();
//# sourceMappingURL=Books.ee822e0b.js.map

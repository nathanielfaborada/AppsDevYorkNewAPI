const t=document.getElementById("books-gallery"),e=document.querySelector("footer");!async function(){try{let o=await fetch("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=wH1aTA62Rv1D74uPnKlk5kP1VUKEYN03");if(!o.ok)throw Error(`HTTP error! Status: ${o.status}`);let r=await o.json();if(r.copyright){let t=document.createElement("p");t.className="text-sm text-gray-400 mt-2",t.textContent=r.copyright,e.appendChild(t)}r.results.lists.flatMap(t=>t.books).forEach(e=>{if(!e.title||!e.book_image)return;let o=document.createElement("div");o.className="article-card bg-gray-800 border-2 border-cyan-400 rounded overflow-hidden shadow-lg hover:scale-105 transition-transform",o.innerHTML=`
        <img src="${e.book_image}" alt="${e.title}" class="w-full h-64 object-cover">
        <div class="p-4">
          <h2 class="text-lg font-bold text-cyan-400 mb-2">${e.title}</h2>
          <p class="text-sm mb-2">${e.description}</p>
          ${e.amazon_product_url?`<a href="${e.amazon_product_url}" target="_blank" class="text-yellow-400 hover:underline">Buy Now</a>`:""}
        </div>
      `,t.appendChild(o)})}catch(e){console.error("Error fetching books:",e),t.innerHTML='<p class="text-red-500">Failed to load books. Please try again later.</p>'}}();
//# sourceMappingURL=Books.04607fdf.js.map

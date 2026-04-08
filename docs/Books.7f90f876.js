const e=document.getElementById("books-gallery"),t=document.querySelector("footer");!async function(){try{let o=await fetch("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=undefined");if(!o.ok)throw Error(`HTTP error! Status: ${o.status}`);let r=await o.json();if(r.copyright){let e=document.createElement("p");e.className="text-sm text-gray-400 mt-2",e.textContent=r.copyright,t.appendChild(e)}r.results.lists.flatMap(e=>e.books).forEach(t=>{if(!t.title||!t.book_image)return;let o=document.createElement("div");o.className="article-card bg-gray-800 border-2 border-cyan-400 rounded overflow-hidden shadow-lg hover:scale-105 transition-transform",o.innerHTML=`
        <img src="${t.book_image}" alt="${t.title}" class="w-full h-64 object-cover">
        <div class="p-4">
          <h2 class="text-lg font-bold text-cyan-400 mb-2">${t.title}</h2>
          <p class="text-sm mb-2">${t.description}</p>
          ${t.amazon_product_url?`<a href="${t.amazon_product_url}" target="_blank" class="text-yellow-400 hover:underline">Buy Now</a>`:""}
        </div>
      `,e.appendChild(o)})}catch(t){console.error("Error fetching books:",t),e.innerHTML='<p class="text-red-500">Failed to load books. Please try again later.</p>'}}();
//# sourceMappingURL=Books.7f90f876.js.map

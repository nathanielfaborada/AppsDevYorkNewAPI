document.getElementById("best-sellers");const e=document.getElementById("logo");document.getElementById("descriptions");const t=async()=>{try{let e=await fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=z9vMI8z1dlIkcPAYT255wqx6jrHy86Kh");if(!e.ok)throw Error(`Error fetching from remote: ${e.status}`);return await e.json()}catch(e){console.warn("Fetching remote data failed, switching to local data",e);try{let e=await fetch("./Api/Hardcover_fiction.json");if(!e.ok)throw Error(`Error fetching from local: ${e.status}`);return await e.json()}catch(e){return alert("An error occurred while fetching local data"),console.error(e),[]}}};(async()=>{console.log(await t())})();const r=t=>{e.innerHTML="";let r=t.results?.display_name||"Unnamed Site",n=document.createElement("nav");n.setAttribute("class","logo"),n.innerHTML=`
    <h1>${r}</h1>
  `,e.appendChild(n)},n=e=>{let t=document.querySelector(".card-container");t.innerHTML="",(e.results.books||[]).forEach(e=>{let r=document.createElement("div");r.setAttribute("class","flip-card");let n=document.createElement("div");n.setAttribute("class","flip-card-inner");let o=document.createElement("div");o.setAttribute("class","flip-card-front"),o.innerHTML=`
      <img src="${e.book_image||"no img"}" >
    `;let a=document.createElement("div");a.setAttribute("class","flip-card-back"),a.innerHTML=`
      <h2>${e.title}</h2>
      <p>Publisher: ${e.publisher}</p>
      <h2>Book Author: ${e.author||""}</h2>
      
      <p>Description: ${e.description||"No description available"}</p>
    `,n.appendChild(o),n.appendChild(a),r.appendChild(n),t.appendChild(r)})};(async()=>{let e=await t();r(e),n(e)})();
//# sourceMappingURL=index.9e113d5a.js.map

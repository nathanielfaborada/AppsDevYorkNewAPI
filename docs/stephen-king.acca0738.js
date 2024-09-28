const t=document.getElementById("logo"),e=document.getElementById("stephen"),o=async()=>{try{let t=await fetch("https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=z9vMI8z1dlIkcPAYT255wqx6jrHy86Kh");if(!t.ok)throw Error(`Error fetching from remote: ${t.status}`);return await t.json()}catch(t){console.warn("Fetching remote data failed, switching to local data",t);try{let t=await fetch(API_Url_Local);if(!t.ok)throw Error(`Error fetching from local: ${t.status}`);return await t.json()}catch(t){return alert("An error occurred while fetching local data"),console.error(t),[]}}};(async()=>{console.log(await o())})();const r=e=>{t.innerHTML="";let o=e.results&&e.results[0]||{book_author:"Unknown Author"},r=document.createElement("nav","label");r.setAttribute("class","logo"),r.innerHTML=`
      <h1>${o.book_author}</h1>
    `,t.appendChild(r)};(async()=>{r(await o())})();const n=t=>{e.innerHTML="",(t.results||[]).slice(0,8).forEach(t=>{let o=document.createElement("div");o.setAttribute("class","main-content"),o.innerHTML=`
      <a href="${t.url}" target="_blank">
        ${t.book_title||"No title"}, by ${t.byline||"Unknown Author"}
      </a>
    `,e.appendChild(o)})};(async()=>{n(await o())})();
//# sourceMappingURL=stephen-king.acca0738.js.map

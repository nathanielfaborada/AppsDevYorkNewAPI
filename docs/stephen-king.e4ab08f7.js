const t=document.getElementById("logo"),e=document.getElementById("stephen"),n=async()=>{try{let t=await fetch("https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=z9vMI8z1dlIkcPAYT255wqx6jrHy86Kh");if(!t.ok)throw Error(`Error fetching from remote: ${t.status}`);return await t.json()}catch(t){console.warn("Fetching remote data failed, switching to local data",t);try{let t=await fetch("/stephenking.json");if(!t.ok)throw Error(`Error fetching from local: ${t.status}`);return await t.json()}catch(t){return alert("An error occurred while fetching local data"),console.error(t),[]}}};(async()=>{console.log(await n())})();const o=e=>{t.innerHTML="";let n=e.results&&e.results[0]||{book_author:"Unknown Author"},o=document.createElement("nav","label");o.setAttribute("class","logo"),o.innerHTML=`
      <h1>${n.book_author}</h1>
    `,t.appendChild(o)};(async()=>{o(await n())})();const r=t=>{e.innerHTML="",(t.results||[]).slice(0,8).forEach(t=>{let n=document.createElement("div");n.setAttribute("class","main-content"),n.innerHTML=`
      <a href="${t.url}" target="_blank">
        ${t.book_title||"No title"}, by ${t.byline||"Unknown Author"}
      </a>
    `,e.appendChild(n)})};(async()=>{r(await n())})();
//# sourceMappingURL=stephen-king.e4ab08f7.js.map

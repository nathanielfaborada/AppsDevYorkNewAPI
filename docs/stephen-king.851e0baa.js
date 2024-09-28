const e=document.getElementById("logo"),t=document.getElementById("stephen"),n=async()=>{try{let e=await fetch("/stephenking.json");return await e.json()}catch(e){return alert("An error occurred"),console.error(e),[]}},r=t=>{e.innerHTML="";let n=t.results&&t.results[0]||{book_author:"Unknown Author"},r=document.createElement("nav","label");r.setAttribute("class","logo"),r.innerHTML=`
      <h1>${n.book_author}</h1>
    `,e.appendChild(r)};(async()=>{r(await n())})();const o=e=>{t.innerHTML="",(e.results||[]).slice(0,8).forEach(e=>{let n=document.createElement("div");n.setAttribute("class","main-content"),n.innerHTML=`
      <a href="${e.url}" target="_blank">
        ${e.book_title||"No title"}, by ${e.byline||"Unknown Author"}
      </a>
    `,t.appendChild(n)})};(async()=>{o(await n())})();
//# sourceMappingURL=stephen-king.851e0baa.js.map

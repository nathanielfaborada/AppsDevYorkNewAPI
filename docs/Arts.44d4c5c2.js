const API_Url_Remote = "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=z9vMI8z1dlIkcPAYT255wqx6jrHy86Kh";
const API_Url_Local = "/arts.json";
const MainLogo = document.getElementById("logo");
const MusicSection = document.getElementById("section_music");
const TelevisionSection = document.getElementById("section_television");
const MoviesSection = document.getElementById("section_movies");
const DesignSection = document.getElementById("section_design");
const MusicMedia = document.getElementById("music_multimedia");
const DesignMedia = document.getElementById("design_multimedia");
const TelevisionMedia = document.getElementById("television_multimedia");
const MoviesMedia = document.getElementById("movies_multimedia");
const GETalldata = async ()=>{
    try {
        const res = await fetch(API_Url_Remote);
        if (!res.ok) throw new Error(`Error fetching from remote: ${res.status}`);
        const data = await res.json();
        return data;
    } catch (e) {
        console.warn("Fetching remote data failed, switching to local data", e);
        try {
            const res = await fetch(API_Url_Local);
            if (!res.ok) throw new Error(`Error fetching from local: ${res.status}`);
            const data = await res.json();
            return data;
        } catch (error) {
            alert("An error occurred while fetching local data");
            console.error(error);
            return [];
        }
    }
};
(async ()=>{
    const data = await GETalldata();
    console.log(data);
})();
const updateNAVBAR = (data)=>{
    MainLogo.innerHTML = "";
    const displayName = data?.section || "Unnamed section";
    const headerContainer = document.createElement("nav");
    headerContainer.setAttribute("class", "logo");
    headerContainer.innerHTML = `<h1>${displayName}</h1>`;
    MainLogo.appendChild(headerContainer);
};
(async ()=>{
    const data = await GETalldata();
    updateNAVBAR(data);
})();
const music_container = (data)=>{
    MusicSection.innerHTML = "";
    let content = 0;
    if (data?.results) data.results.forEach((item)=>{
        if (content >= 1) return;
        if (item.subsection.toLowerCase() === "music") {
            const data_container = document.createElement("div");
            data_container.setAttribute("class", "content_music");
            data_container.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.abstract}</p>
          <a href="${item.url}" target="_blank">Read more</a>
        `;
            MusicSection.appendChild(data_container);
            content++;
        }
    });
    else MusicSection.innerHTML = "<p>No music data available</p>";
};
(async ()=>{
    const data = await GETalldata();
    music_container(data);
})();
const design_container = (data)=>{
    DesignSection.innerHTML = "";
    let content = 0;
    // Check if there are results and if any belong to the Music subsection
    if (data?.results) data.results.forEach((item)=>{
        if (content >= 1) return;
        if (item.subsection.toLowerCase() === "design") {
            const data_container = document.createElement("div");
            data_container.setAttribute("class", "content_music");
            data_container.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.abstract}</p>
          <a href="${item.url}" target="_blank">Read more</a>
        `;
            DesignSection.appendChild(data_container);
            content++;
        }
    });
    else DesignSection.innerHTML = "<p>No music data available</p>";
};
(async ()=>{
    const data = await GETalldata();
    design_container(data);
})();
const television_container = (data)=>{
    TelevisionSection.innerHTML = "";
    let content = 0;
    if (data?.results) data.results.forEach((item)=>{
        if (content >= 1) return;
        if (item.subsection.toLowerCase() === "television") {
            const data_container = document.createElement("div");
            data_container.setAttribute("class", "content_music");
            data_container.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.abstract}</p>
          <a href="${item.url}" target="_blank">Read more</a>
        `;
            TelevisionSection.appendChild(data_container);
            content++;
        }
    });
    else TelevisionSection.innerHTML = "<p>No music data available</p>";
};
(async ()=>{
    const data = await GETalldata();
    television_container(data);
})();
const movies_container = (data)=>{
    MoviesSection.innerHTML = "";
    let content = 0;
    if (data?.results) data.results.forEach((item)=>{
        if (content >= 1) return;
        if (item.section.toLowerCase() === "movies") {
            const data_container = document.createElement("div");
            data_container.setAttribute("class", "content_music");
            data_container.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.abstract}</p>
          <a href="${item.url}" target="_blank">Read more</a>
        `;
            MoviesSection.appendChild(data_container);
            content++;
        }
    });
    else MoviesSection.innerHTML = "<p>No music data available</p>";
};
(async ()=>{
    const data = await GETalldata();
    movies_container(data);
})();
const multimedia = (data)=>{
    MusicMedia.innerHTML = "";
    let imageCount = 0;
    data.results.forEach((article)=>{
        if (article.subsection === "music" && article.multimedia && article.multimedia.length > 0) {
            if (imageCount >= 2) return;
            const media = article.multimedia[0];
            const multimediaContainer = document.createElement("div");
            multimediaContainer.setAttribute("class", "image_multi");
            const imgElement = document.createElement("img");
            imgElement.src = media.url;
            imgElement.alt = media.caption || "No caption available";
            multimediaContainer.appendChild(imgElement);
            MusicMedia.appendChild(multimediaContainer);
            imageCount++;
        }
    });
};
(async ()=>{
    const data = await GETalldata();
    multimedia(data);
})();
const design = (data)=>{
    DesignMedia.innerHTML = "";
    let imageCount = 0;
    data.results.forEach((article)=>{
        if (article.subsection === "design" && article.multimedia && article.multimedia.length > 0) {
            if (imageCount >= 2) return;
            const media = article.multimedia[0];
            const multimediaContainer = document.createElement("div");
            multimediaContainer.setAttribute("class", "image_multi");
            const imgElement = document.createElement("img");
            imgElement.src = media.url;
            imgElement.alt = media.caption || "No caption available";
            multimediaContainer.appendChild(imgElement);
            DesignMedia.appendChild(multimediaContainer);
            imageCount++;
        }
    });
};
(async ()=>{
    const data = await GETalldata();
    design(data);
})();
const television = (data)=>{
    TelevisionMedia.innerHTML = "";
    let imageCount = 0;
    data.results.forEach((article)=>{
        if (article.subsection === "television" && article.multimedia && article.multimedia.length > 0) {
            if (imageCount >= 2) return;
            const media = article.multimedia[0];
            const multimediaContainer = document.createElement("div");
            multimediaContainer.setAttribute("class", "image_multi");
            const imgElement = document.createElement("img");
            imgElement.src = media.url;
            imgElement.alt = media.caption || "No caption available";
            multimediaContainer.appendChild(imgElement);
            TelevisionMedia.appendChild(multimediaContainer);
            imageCount++;
        }
    });
};
(async ()=>{
    const data = await GETalldata();
    television(data);
})();
const movies = (data)=>{
    // Clear previous content
    MoviesMedia.innerHTML = "";
    let imageCount = 0;
    data.results.forEach((article)=>{
        if (article.section === "movies" && article.multimedia && article.multimedia.length > 0) {
            if (imageCount >= 2) return;
            const media = article.multimedia[0];
            const multimediaContainer = document.createElement("div");
            multimediaContainer.setAttribute("class", "image_multi");
            const imgElement = document.createElement("img");
            imgElement.src = media.url;
            imgElement.alt = media.caption || "No caption available";
            multimediaContainer.appendChild(imgElement);
            MoviesMedia.appendChild(multimediaContainer);
            imageCount++;
        }
    });
};
(async ()=>{
    const data = await GETalldata();
    movies(data);
})(); // Function to populate the music section
 // const music_container = (data) => {
 //   MusicSection.innerHTML = ''; // Clear previous content
 //   // Check if there are results and if any belong to the Music subsection
 //   if (data?.results) {
 //     data.results.forEach(item => {
 //       if (item.subsection.toLowerCase() === 'music') {
 //         const data_container = document.createElement('div');
 //         data_container.setAttribute('class', 'content_music');
 //         data_container.innerHTML = `
 //           <h3>${item.title}</h3>
 //           <p>${item.des_facet}</p>
 //           <a href="${item.url}" target="_blank">Read more</a>
 //         `;
 //         // If multimedia is available, display the first image
 //         MusicSection.appendChild(data_container);
 //       }
 //     });
 //   } else {
 //     MusicSection.innerHTML = '<p>No music data available</p>';
 //   }
 // };
 // // Function to populate the television section
 // const television_container = (data) => {
 //   TelevisionSection.innerHTML = ''; // Clear previous content
 //   // Check if there are results and if any belong to the Television subsection
 //   if (data?.results) {
 //     data.results.forEach(item => {
 //       if (item.subsection.toLowerCase() === 'television') {
 //         const data_container = document.createElement('div');
 //         data_container.setAttribute('class', 'content_television');
 //         data_container.innerHTML = `
 //           <h3>${item.title}</h3>
 //           <p>${item.abstract}</p>
 //           <a href="${item.url}" target="_blank">Read more</a>
 //         `;
 //         // If multimedia is available, display the first imag
 //         TelevisionSection.appendChild(data_container);
 //       }
 //     });
 //   } else {
 //     TelevisionSection.innerHTML = '<p>No television data available</p>';
 //   }
 // };
 // // Initialize data fetch and update UI
 // (async () => {
 //   const data = await GETalldata();
 //   if (data) { // Check if data is successfully fetched
 //     updateNAVBAR(data);
 //     music_container(data);
 //     television_container(data);
 //   }
 // })();

//# sourceMappingURL=Arts.44d4c5c2.js.map

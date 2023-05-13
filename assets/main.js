const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UC-x6eeuVvmz0F4XOqpbcNyw&part=snippet%2Cid&order=date&maxResults=10";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "33d711df1cmsh24a46143d7b241dp170dd0jsn82e93d8d1773",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

//async function
async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

//funcion que se llama asi misma
(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
        ${videos.items
          .map(
            (video) => `
           <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.snippet.title}
                        </h3>
                    </div>
                </div>
            `
          )
          .slice(0, 4)
          .join("")}
        
        `;

    content.innerHTML = view;
  } catch (error) {
    console.log("error");
  }
})();

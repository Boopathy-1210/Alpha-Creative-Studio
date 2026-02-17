const params = new URLSearchParams(window.location.search);
const type = params.get("type");

const galleryData = {

traditional: {
layout: "photo",
title: "TRADITIONAL PHOTOGRAPHY",
items: [
"./Assests/Gallery/trad1.jpg",
"./Assests/Gallery/trad2.jpg",
"./Assests/Gallery/trad3.jpg"
]
},

candidphoto: {
layout: "photo",
title: "CANDID PHOTOGRAPHY",
items: [
"./Assests/Gallery/candid1.jpg",
"./Assests/Gallery/candid2.jpg"
]
},

traditionalvideo: {
layout: "video",
title: "TRADITIONAL VIDEOGRAPHY",
items: [
"./Assests/Videos/tvideo1.mp4"
]
},

candidvideo: {
layout: "video",
title: "CANDID VIDEOGRAPHY",
items: [
"./Assests/Videos/cvideo1.mp4"
]
}

};

const title = document.getElementById("GalleryTitle");
const grid = document.getElementById("GalleryGrid");

if(galleryData[type]){

title.innerText = galleryData[type].title;

galleryData[type].items.forEach(src=>{

const wrapper = document.createElement("div");
wrapper.classList.add("gallery-item");

if(galleryData[type].layout === "photo"){

const img = document.createElement("img");
img.src = src;
wrapper.appendChild(img);

}

if(galleryData[type].layout === "video"){

const video = document.createElement("video");
video.src = src;
video.controls = true;
wrapper.appendChild(video);

}

grid.appendChild(wrapper);

});

}

const menu = document.getElementById("MenuToggle");
const navList = document.getElementById("NavLists");

menu.addEventListener("click", () => {
navList.classList.toggle("active");
});

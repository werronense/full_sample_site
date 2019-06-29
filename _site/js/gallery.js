// activate image gallery, set event listener on all images
function activateGallery(){
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function(thumbnail){
    // preload large images
    let newImageSrc = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = newImageSrc;

    thumbnail.addEventListener("click", function(){

      // set clicked image as main image
      let newImageAlt = thumbnail.alt;
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", newImageAlt);

      // change current image
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");

      // update image info
      let galleryInfo = document.querySelector("#gallery-info");
      let title = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");

      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}

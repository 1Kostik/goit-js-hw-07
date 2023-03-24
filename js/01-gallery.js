import { galleryItems } from "./gallery-items.js";
// Change code below this line

const parentGallery = document.querySelector(".gallery");
const elementGallery = galleryItems
  .map(
    (item) => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
  )
  .join("");

parentGallery.insertAdjacentHTML("beforeend", elementGallery);

parentGallery.addEventListener("click", onClickGallery);

function onClickGallery(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imgElUrl = event.target.dataset.source;

  const instance = basicLightbox.create(
    `<img width="1280" height="855" src="${imgElUrl}">`
  );
  instance.show();
  function escapeKey(event) {
    if (event.key == "Escape") {
      instance.close();
      parentGallery.removeEventListener("keydown", escapeKey);
    }
  }

  parentGallery.addEventListener("keydown", escapeKey);
}

console.log(galleryItems);

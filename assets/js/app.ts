const toggleMobile = document.querySelector('.toggle-mobile') as HTMLElement | null,
      headerMobile = document.querySelector('.header__mobile') as HTMLDivElement | null,
      closeButton = document.querySelector('.mobile__close') as HTMLSpanElement | null,
      galleryContainer = document.querySelector('.gallery__container') as HTMLDivElement | null;

      toggleMobile?.addEventListener('click', function() {
    headerMobile?.classList.toggle('d-none');
});

closeButton?.addEventListener('click', function() {
    headerMobile?.classList.toggle('d-none');
});

interface PhotoData {
    id: string;
    name: string;
    photourl: string;
}


async function fetchPhotoData() {
    let fetchAddress = await fetch('./assets/js/database.json');
    let response = await fetchAddress.json();

    return response;
}

async function loadPhotoGallery() {
    let fetchedData:PhotoData[] = await fetchPhotoData();

    fetchedData.forEach(datas => {
        const HTMLCode = `
        <div class="gallery__box" id="${datas.id}">
                            <span class="gallery__name">
                                ${datas.name}
                            </span>

                            <div class="gallery__image">
                                <img src="${datas.photourl}" alt="">
                            </div>
                        </div>`

         galleryContainer?.insertAdjacentHTML('beforeend', HTMLCode)
    })
}


loadPhotoGallery();
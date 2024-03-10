const toggleMobile = document.querySelector('.toggle-mobile') as HTMLElement | null,
    headerMobile = document.querySelector('.header__mobile') as HTMLDivElement | null,
    closeButton = document.querySelector('.mobile__close') as HTMLSpanElement | null,
    galleryContainer = document.querySelector('.gallery__container') as HTMLDivElement | null;

let contactBtn = document.querySelector('.hero__left_contact') as HTMLButtonElement | null;
let awardContainer = document.querySelector('.awards__container') as HTMLDivElement | null;

toggleMobile?.addEventListener('click', function () {
    headerMobile?.classList.toggle('d-none');
});

closeButton?.addEventListener('click', function () {
    headerMobile?.classList.toggle('d-none');
});

interface PhotoData {
    id: number;
    name: string;
    photourl: string;
}

interface AwardData {
    id: number;
    name: string;
    photourl: string;
    awardName: string;
    awardDescription: string;
    awardDate: string;
    awardPlace: number;
}


async function fetchGalleryData() {
    let fetchAddress = await fetch('./assets/js/gallery.json');
    let response = await fetchAddress.json();

    return response;
}

async function fetchAwardData() {
    let fetchAddress = await fetch('./assets/js/awards.json');
    let response = await fetchAddress.json();

    return response;
}

async function loadAwards() {
    let fetchedData: AwardData[] = await fetchAwardData();

    fetchedData.forEach(datas => {
        const HTMLCode = `<div class="awards__box" id="${datas.id}">
                                <div class="awards__left">
                                    <h5 class="awards__name">
                                        ${datas.name}
                                    </h5>
    
                                    <div class="awards__img">
                                        <img src="${datas.photourl}" alt="">
                                    </div>
                                </div>
    
                                <div class="awards__right">
                                    <span class="awards__header">
                                        ${datas.awardName}
                                    </span>
    
                                    <span class="awards__description">
                                        ${datas.awardDescription}
                                    </span>
    
                                    <div class="awars__date_place">
                                        <span class="awards__date">
                                            <i class="bi bi-calendar"></i>
                                            <span>${datas.awardDate}</span>
                                        </span>
    
                                        <span class="awards__place">
                                            <i class="bi bi-award"></i>
                                            <span>${datas.awardPlace}st Place</span>
                                        </span>
                                    </div>
                                </div>
                            </div>`

            awardContainer?.insertAdjacentHTML('beforeend', HTMLCode)
    })
};

loadAwards();


async function loadGallery() {
    let fetchedData: PhotoData[] = await fetchGalleryData();

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
};


loadGallery();

contactBtn?.addEventListener('click', function() {
   setTimeout(() => {
    document.location.href = './contact_us.html'
   }, 300)
})
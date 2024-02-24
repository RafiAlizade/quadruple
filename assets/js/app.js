const toggleMobile = document.querySelector('.toggle-mobile'),
      headerMobile = document.querySelector('.header__mobile'),
      closeButton = document.querySelector('.mobile__close');

toggleMobile.addEventListener('click', function() {
    headerMobile.classList.toggle('d-none');
});

closeButton.addEventListener('click', function() {
    headerMobile.classList.toggle('d-none');
})
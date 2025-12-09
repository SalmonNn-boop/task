const changeNameBtn = document.querySelector("#changeNameBtn");
const username = document.querySelector("#username");
const hideBioBtn = document.querySelector("#hideBioBtn");
const changeThemeBtn = document.querySelector("#changeThemeBtn");
const likeBtn = document.querySelector("#likeBtn");
const likes = document.querySelector("#likes");
const bio = document.querySelector("#bio");
const hideHobbyBtn = document.querySelector("#hideHobbyBtn");
const hobby = document.querySelector("#hobby");
const changePhotoBtn = document.querySelector("#changePhotoBtn");
const profilePhoto = document.querySelector("#profilePhoto");
const resetBtn = document.querySelector("#resetBtn");

changeNameBtn.addEventListener("click", () => {
    const newName = prompt('Введите имя');
    if (newName && newName.trim() !== '') {
        username.textContent = newName;
    } else if (newName !== null) {
        alert('Имя не может быть пустым!');
    }
});

changeThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

likeBtn.addEventListener('click', () => {
    likes.textContent = parseInt(likes.textContent) + 1;
});

hideBioBtn.addEventListener('click', () => {
    bio.classList.toggle('hidden');
});

hideHobbyBtn.addEventListener('click', () => {
    hobby.classList.toggle('hidden');
});

changePhotoBtn.addEventListener('click', () => {
    const newPhoto = prompt('Введите URL нового фото');
    if (newPhoto && newPhoto.trim() !== '') {
        profilePhoto.src = newPhoto;
    }
});

resetBtn.addEventListener('click', () => {
    username.textContent = 'Алексей';
    likes.textContent = '0';
});
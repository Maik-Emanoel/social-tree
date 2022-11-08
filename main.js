const body = document.querySelector('body')
const userInstagram = document.querySelector('.userInstagram')
const profilePhoto = document.querySelector('.profilePhoto img')


profilePhoto.addEventListener('dblclick', function changeTheme() {
  body.classList.toggle('blue')
  userInstagram.classList.toggle('blue')
})




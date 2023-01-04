const body = document.querySelector('body')
const userInstagram = document.querySelector('.userInstagram')
const profilePhoto = document.querySelector('.profilePhoto img')

window.addEventListener('load', () => {
  body.classList.add('blue')
  userInstagram.classList.add('blue')
})

profilePhoto.addEventListener('dblclick', function changeTheme() {
  body.classList.toggle('blue')
  userInstagram.classList.toggle('blue')
})


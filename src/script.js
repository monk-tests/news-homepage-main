const body = document.querySelector('body')
const navEl = document.querySelector('.navigation')
const navOpenBtnEl = document.querySelector('.btn-open')
const navCloseBtnEl = document.querySelector('.btn-close')

console.log(navEl);
navOpenBtnEl.addEventListener('click',()=>{
  navEl.classList.remove('translate-x-full')
  body.classList.add('overflow-hidden')
})
navCloseBtnEl.addEventListener('click',()=>{
  navEl.classList.add('translate-x-full')
  body.classList.remove('overflow-hidden')
  console.log('hi');
})
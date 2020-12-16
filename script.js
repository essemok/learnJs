// const btn = document.querySelector('button'),
//       overlay = document.querySelector('.overlay'),
//       link = document.querySelector('a');
//
// let i = 0;
//
// const deleteElement = (event) => {
//   console.log(event.currentTarget);
//   i++;
//
//   if (i === 1) {
//     btn.removeEventListener('click', deleteElement);
//   }
// };
//
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
//
// link.addEventListener('click', function (event) {
//   event.preventDefault();
//
//   console.log(event.target);
// });

const btns = document.querySelectorAll('button');

const sayAbout = (event) => {
  console.log(event.target);
};

btns.forEach((btn) => {
  btn.addEventListener('click', sayAbout, {once: true});
});



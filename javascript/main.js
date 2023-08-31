const nav_function = document.querySelector('.mobile-menu');
const nav_ul = document.querySelector('.mobile-side-bar');
nav_function.addEventListener('click',()=>{
    nav_ul.classList.toggle('d-inline')
})
// const faq_ques = document.querySelectorAll('.faq-ques');
// const faq_ans = document.querySelectorAll('.faq-ans');
// // faq_ques.forEach(e => {
// //     e.addEventListener('click',()=>{
// //         faq_ans.classList.toggle('height-active');
// //     })
// // });
var acc= document.querySelectorAll(".faq-ques");
var i ;
for (let i = 0; i < acc.length; i++) {
   acc[i].addEventListener('click', function
   (){
    var arrow = this.parentElement.querySelector('.faq-ques-arrow');
    arrow.classList.toggle('ans-90');
    var ans = this.nextElementSibling;
    ans.classList.toggle('ans-active');
   });
    
}

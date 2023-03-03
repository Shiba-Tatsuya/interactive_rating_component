let rates = document.querySelectorAll('.btn');
let rating_card = document.querySelector('.rating-card');
let thanks_card = document.querySelector('.thanks-card');
let submit_btn = document.querySelector('.submit');

submit_btn.addEventListener('click',()=>
{
    rating_card.style.display='none';
    thanks_card.style.display='flex';

})




rates.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        let x = btn.value;
       
        document.querySelector('.ratings').innerHTML=`You selected ${x} out of 5`;
        

    })
})
//Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
  if (darkmode.classList.contains('bx-moon')) {
    darkmode.classList.replace('bx-moon', 'bx-sun');
    document.body.classList.add('active');
  } else {
    darkmode.classList.replace('bx-sun', 'bx-moon');
    document.body.classList.remove('active');
  }
}

// Scroll Reveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 2000,
  reset: true
});


sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
  interval: 200
})






// JavaScript code for add to cart functionality

let menudiv = document.getElementById('menudiv');
console.log(menudiv);


let cart_items = [

  {
    id: "a1b1",
    name: "CheezyPiza",
    Price: '$10',
    desc: "Tasty Food",
    img: "https://img.freepik.com/free-photo/pepperoni-pizza-with-sausages-cheese-dark-wooden-table_220768-9277.jpg?size=626&ext=jpg"
  },

  {
    id: "a1b2",
    name: "Tropical Pizza",
    Price: '$15',
    desc: "Tasty Food",
    img: "https://img.freepik.com/free-photo/pepperoni-pizza-with-sausages-cheese-dark-wooden-table_220768-9277.jpg?size=626&ext=jpg"

  },

  {
    id: "a1b3",
    name: "Macoroni Pizza",
    Price: '$18',
    desc: "Tasty Food",
    img: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=740&t=st=1661842808~exp=1661843408~hmac=c40f0c154036b96b1dba17947c4e4f7c07f40db983106490402bb0b7b6ec452e"
  },


]

let basket = JSON.parse(localStorage.getItem("data")) || [];


let cartfun = () => {



  return (menudiv.innerHTML = cart_items.map((items) => {

    let { id, name, Price, desc, img } = items;
    
    let search = basket.find((x)=> x.id === id) || [];

    return `<div id=product-id-${id} class="box">
      <div class="box-img">
          <img src=${img}
              alt="">
      </div>
      <h2>${name}</h2>
      <h3>${desc}</h3>
      <span>${Price}</span>

   
     
      <i class='bx bx-cart-alt'></i>

      <button onclick="incr('${id}')" ><i class="ri-add-line"></i></button>
      <div id=${id} class="quantity">${search.item === undefined ? 0: search.item}</div>
      <button onclick="decr('${id}')" ><i class="ri-subtract-line"></i></button>
      
      
  </div>`

  }).join(''));





};

cartfun();


//increase quantity

let incr =(id)=> {

  let selected_item = id;

  //search function to find the item and increasing the item

  let search = basket.find((x)=>x.id === id);
  

  if(search=== undefined){

    basket.push ({
      id: id,
      item: 1,
    });

  }

  else{
    search.item += 1;
  }

  //local storage

  localStorage.setItem("data",JSON.stringify(basket));



  update(id);
  
  

  //console.log(basket);
  
};


//dec func


let decr = (id)=> {
  let selected_item = id;

  //search function to find the item and decr the item

  let search = basket.find((x)=>x.id === id);

  if (search ===  undefined) return;

  else if(search.item === 0) return;

  else{
    search.item -= 1;

  
    localStorage.setItem("data",JSON.stringify(basket));
    update(id);

    
  }
 
 }






 //update func

let update = (id)=> {

let search = basket.find((x)=> x.id === id);
console.log(search.item);

document.getElementById(id).innerHTML = search.item;

claculation()

 
 };


 let claculation =()=>{

  let carticon = document.getElementById("carticon");

  carticon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0)

  
 }


 claculation();





let label = document.getElementById('label');
let shopingcart = document.getElementById('shopping-cart')


let basket = JSON.parse(localStorage.getItem("data")) || [];




let claculation = () => {

  let carticon = document.getElementById("carticon");

  carticon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)


}


claculation();


let generateCartitems = () => {
  if (basket.length !== 0) {
    return shopingcart.innerHTML = basket.map((x) => {

      let { id, item } = x;

      let search = cart_items.find((y) => y.id === id) || [];

      return `
        <div class="cart-item">

      <img width = "100" src =${search.img}/>

      <div class = "details">
      <div class = "title-price">
      
      <h4> 
      
      <p> ${search.name} </p>
      <p class="item-price"> ${search.Price} </p>

      </h4>

      <i class="ri-close-large-line"></i>


      </div>
      <button onclick="incr('${id}')" ><i class="ri-add-line"></i></button>
      <div id=${id} class="quantity">${item}</div>
      <button onclick="decr('${id}')" ><i class="ri-subtract-line"></i></button>
      
      <h3> </h3>
      
      </div>

        </div>
        
        `

    }).join('');
  }
  else {
    shopingcart.innerHTML = ``
    label.innerHTML = `
      
      <h2> The cart is empty </h2>
      <a href="index.html">
      <button class= "home-btn"> Back To Home </button>
      </a>
      `
  }
}

generateCartitems();


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

  



  update(id);

  localStorage.setItem("data",JSON.stringify(basket));
  
  


  
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

  
   

    update(id);
    basket = basket.filter((x)=> x.item !== 0);

    

  
    localStorage.setItem("data",JSON.stringify(basket));
    
  }
 
 }



  //update func

let update = (id)=> {

  let search = basket.find((x)=> x.id === id);
  console.log(search.item);
  
  document.getElementById(id).innerHTML = search.item;
  
  claculation()
  
   
   };
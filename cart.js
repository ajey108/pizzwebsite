
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

      <i onclick = "dlt_item(${id})" class="ri-close-large-line"></i>


      </div>
      <button onclick="incr('${id}')" ><i class="ri-add-line"></i></button>
      <div id=${id} class="quantity">${item}</div>
      <button onclick="decr('${id}')" ><i class="ri-subtract-line"></i></button>
      
      <h3> ${item * search.Price}</h3>
      
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

let incr = (id) => {

  let selected_item = id;

  //search function to find the item and increasing the item

  let search = basket.find((x) => x.id === id);


  if (search === undefined) {

    basket.push({
      id: id,
      item: 1,
    });

  }

  else {
    search.item += 1;
  }

  //local storage




  generateCartitems();
  update(id);


  

  localStorage.setItem("data", JSON.stringify(basket));





};


//dec func


let decr = (id) => {
  let selected_item = id;

  //search function to find the item and decr the item

  let search = basket.find((x) => x.id === id);

  if (search === undefined) return;

  else if (search.item === 0) return;

  else {
    search.item -= 1;




    update(id);


    localStorage.setItem("data", JSON.stringify(basket));

  }

}



//update func

let update = (id) => {

  let search = basket.find((x) => x.id === id);
  console.log(search.item);

  document.getElementById(id).innerHTML = search.item;

  claculation();
  TotalAmt();


};


//remove the item


let dlt_item = (id) => {

  let selected_item = id;

  basket = basket.filter((x) => x.id !== selected_item.id);
  generateCartitems();
  TotalAmt();
  claculation();
  localStorage.setItem("data", JSON.stringify(basket));

};


//To clear the cart

let ClearCart =()=>{
  basket = []
  generateCartitems();
  claculation();
  localStorage.setItem("data", JSON.stringify(basket));

}



//Total Amount


let TotalAmt =()=>{
  if(basket.length !== 0){
    let amount = basket.map((x)=>{
      let {id,item} = x;

      let search = cart_items.find((y) => y.id === id) || [];

      return item * search.Price;
      

    }).reduce((x,y)=> x+y, 0);

    label.innerHTML = `
    

    <h2> Total Bill: ${amount} </h2>

    <button onclick = "checkout()" class = "checkout"> checkOut </button>
    <button onclick = "ClearCart()" class = "Remove">ClearCart</button>
    
    `
    

  } else return
}

TotalAmt();


//checkout function


let checkout =()=>{
  alert("your Pizza is on you way");
}


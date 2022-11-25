const Wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuitem");

const Products = [
   {
      id: 1,
      title: "Air Force",
      price: 150,
      colors: [
         {
            code: "black",
            img: 'images/air.png',
         },
         {
            code: "orangered",
            img: 'images/air3.jpg',
         },
         {
            code: "darkblue",
            img: 'images/air2.png',
         },
      ],


   },
   {
      id: 2,
      title: "Air Jordan",
      price: 120,
      colors: [
         {
            code: "lightgray",
            img: 'images/jordan.png',
         },
         {
            code: "red",
            img: 'images/jordan3.png',
            innerHeight:"400px",
         },
         {
            code: "green",
            img: 'images/jordan2.png',
         },

      ],


   },
   {
      id: 3,
      title: "Air Blazer",
      price: 140,
      colors: [
         {
            code: "lightgray",
            img: 'images/blazer.png',
         },
         {
            code: "red",
            img: 'images/blazer3.png',
         },
         {
            code: "green",
            img: 'images/blazer2.png',

         },

      ],
   },
   {
      id: 4,
      title: "Air Crater",
      price: 180,
      colors: [
         {
            code: "black",
            img: 'images/crater.png',

         },
         {
            code: "lightgray",
            img: 'images/crater2.png',
         },
         {
            code:"palegreen",
            img:'images/crater3.png',
         },
      ],


   },
   {
      id: 5,
      title: "Air Hippie",
      price: 200,
      colors: [
         {
            code: "lightgray",
            img: 'images/hippie.png',
         },
         {
            code: "black",
            img: 'images/hippie2.png',
         },
         {
            code:"darkgrey",
            img:'images/hippie3.png',
         },
      ],


   },



]


let choosenProduct = Products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductcolors = document.querySelectorAll(".color")
const currentProductsizes = document.querySelectorAll(".size")

menuItems.forEach((item, index) => {
   item.addEventListener("click", () => {
      //Now change the current slide
      Wrapper.style.transform = `translate(${-100 * index}vw)`;

      //change the choosen product
      choosenProduct = Products[index]

      //change texts of current product
      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = "$" + choosenProduct.price;
      currentProductImg.src = choosenProduct.colors[0].img

      //assigning product colors
      currentProductcolors.forEach((color, index) => {
         color.style.backgroundColor = choosenProduct.colors[index].code
      })

      console.log("You Clicked" + index)
   })
});


currentProductcolors.forEach((color, index) => {
   color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img
   });
});

currentProductsizes.forEach((size,index) => {
      size.addEventListener("click",()=>{
         currentProductsizes.forEach((size) => {
            size.style.backgroundColor="black";
            size.style.color="white";
         })
         size.style.backgroundColor="white";
         size.style.color="black";
      })
})

const productButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment')
const close = document.querySelector('.close')

productButton.addEventListener("click",() =>{
   payment.style.display = "flex"
})

close.addEventListener("click",() =>{
   payment.style.display = "none";
})

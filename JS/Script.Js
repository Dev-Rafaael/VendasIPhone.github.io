const ImgProduct = document.querySelector(".img-product img");
const BtnProduct = document.querySelectorAll(".colors-product li");

BtnProduct.forEach((btn)=>{
  btn.addEventListener("click",(e) => {
  

    BtnProduct.forEach((btn)=>{
      btn.querySelector(".color").classList.remove("select")
    })

    const id = e.target.id
    
   
  btn.querySelector(".color").classList.add("select")
     ImgProduct.classList.add("changing")
    ImgProduct.setAttribute("src",`./IMG/iphone_${id}.jpg`)
  

 setTimeout(() => {
  ImgProduct.classList.toggle("changing")
},500);
})

})

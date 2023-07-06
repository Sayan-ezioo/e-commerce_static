// js for image gallery


var ProductImg=document.getElementById("ProductImg");
var SmallImg=document.getElementsByClassName("small-img");
SmallImg[0].onclick=function()
{
    ProductImg.src=SmallImg[0].src;
}
SmallImg[1].onclick=function()
{
    ProductImg.src=SmallImg[1].src;
}
SmallImg[2].onclick=function()
{
    ProductImg.src=SmallImg[2].src;
}
SmallImg[3].onclick=function()
{
    ProductImg.src=SmallImg[3].src;
}

// js for buy now button


document
  .getElementsByClassName("btn")[0] 
  .addEventListener("click", buyButtonClicked);

//buy button function
function buyButtonClicked() {
    alert("Your order is Placed! Thank you for Shopping with us");
}
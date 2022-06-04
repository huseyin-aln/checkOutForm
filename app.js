const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", () => {
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);
});


//* capturing method *//

let productDiv = document.querySelector(".products");

productDiv.addEventListener("click", (event) => {
    if (event.target.className == "minus") {
        // console.log("minus button clicked");
    } else if (event.target.classList.contains("plus")) {
        // console.log("plus button clicked");
    } else if (event.target.classList.contains("remove-product")) {
        console.log("remove button clicked");
    } else {
        // console.log("other element is clicked");
    }

})
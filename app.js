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
        if (event.target.nextElementSibling.innerText > 1) {
            event.target.nextElementSibling.innerText--;
        } else {
            if (confirm("Product will be deleted?")) {
                event.target.parentElement.parentElement.parentElement.remove();
            }
        }
        // console.log("minus button clicked");
        
    } else if (event.target.classList.contains("plus")) {
        // console.log("plus button clicked");
        event.target.previousElementSibling.innerText++;
    } else if (event.target.classList.contains("remove-product")) {
        // console.log("remove button clicked");
        event.target.parentElement.parentElement.parentElement.remove();
    } else {
        // console.log("other element is clicked");
    }
})
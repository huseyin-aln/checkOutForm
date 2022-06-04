const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", () => {
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);
    calculateCartTotal();
});


//* capturing method *//

let productDiv = document.querySelector(".products");

productDiv.addEventListener("click", (event) => {
    if (event.target.className == "minus") {
        if (event.target.nextElementSibling.innerText > 1) {
            event.target.nextElementSibling.innerText--;

            calculateProductAndCartTotal(event.target.parentElement.parentElement);

        } else {
            if (confirm("Product will be deleted?")) {
                event.target.parentElement.parentElement.parentElement.remove();

                calculateCartTotal();
            }
        } 
    } else if (event.target.classList.contains("plus")) {
        event.target.previousElementSibling.innerText++;

        calculateProductAndCartTotal(event.target.parentElement.parentElement);

    } else if (event.target.classList.contains("remove-product")) {
        if (confirm("Product will be deleted?")) {
             event.target.parentElement.parentElement.parentElement.remove();
        }
        calculateCartTotal();
    }
});


//* calculate cart and product totals *//

const calculateProductAndCartTotal = (productInfoDiv) => {

    //* product calculation *//
    let price = productInfoDiv.querySelector("strong").innerText;
    let quantity = productInfoDiv.querySelector("#product-quantity").innerText;
    let productTotalDiv = productInfoDiv.querySelector(".product-line-price");
    productTotalDiv.innerText = (price * quantity).toFixed(2);

    calculateCartTotal();
};


//* calculate cart totals *//

const calculateCartTotal = () => {

    let productTotalPriceDivs = document.querySelectorAll(".product-line-price");
    let subtotal = 0;
    productTotalPriceDivs.forEach(eachPrice => {
        subtotal += parseFloat(eachPrice.innerText);
    });

    let taxPrice = subtotal * localStorage.getItem("taxRate");

    let shippingPrice = (subtotal > 0 ?  parseFloat(localStorage.getItem("shippingPrice")) : 0);

    let cartTotal = subtotal + taxPrice + shippingPrice;

    document.querySelector("#cart-subtotal p:nth-child(2)").innerText = subtotal.toFixed(2);

    document.querySelector("#cart-tax p:nth-child(2)").innerText = taxPrice.toFixed(2);

    document.querySelector("#cart-shipping p:nth-child(2)").innerText = shippingPrice.toFixed(2);

    document.querySelector("#cart-total p:nth-child(2)").innerText = cartTotal.toFixed(2);
};


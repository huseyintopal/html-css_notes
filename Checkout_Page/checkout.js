const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", ()=>{
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);
    sessionStorage.setItem("taxRate", taxRate);
    sessionStorage.setItem("shippingPrice", shippingPrice);
})

// Capturing

let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (e)=>{
    let quantityP = e.target.parentElement.querySelector("#product-quantity");
    console.log(quantityP);
    // console.log(event.target);

    //minus button
    if (e.target.classList.contains("fa-minus") || e.target == quantityP.parentElement.firstElementChild) {
        quantityP.innerText--;
        // console.log("minusBtn clicked");
    }

    //plus buttons
    else if(e.target.className == "fas fa-plus" || e.target == quantityP.parentElement.lastElementChild){
        console.log("plusBtn clicked");
    }

    //remove buttons
    else if(e.target.className == "remove-product") {
        console.log("removeBtn clicked");
    }
})

function sumAll (say) {
    const min = Math.min(...say);
    const max = Math.max(...say);
    return (((max - min + 1) * (min + max)) / (2));
}

console.log(typeof(sumAll([1, 4])));

function sumAll (num) {
    const min = Math.min(...num);
    const max = Math.max(...num);
    return (((max - min + 1) * (min + max)) / (2));
}
console.log(sumAll([1,4]));
let cartQuantity = 0;

function showQuantityButton() {
    console.log(`Cart Quantity : ${cartQuantity}`);
}

function addItemButton() {
    if (cartQuantity < 10) {
        cartQuantity++;
        console.log(`Cart Quantity : ${cartQuantity}`);
    } else {
        console.log(`Your cart is full : ${cartQuantity}`);
    } 
}

function addItemButton2() {
    if (cartQuantity < 10 && cartQuantity < 9) {
        cartQuantity += 2;
        console.log(`Cart Quantity : ${cartQuantity}`);
    } else if (cartQuantity === 9){
        console.log(`You can only add 1 item left`);
    } else {
        console.log(`Your cart is full : ${cartQuantity}`);
    }
}

function addItemButton3() {
    if (cartQuantity < 10 && cartQuantity < 8) {
        cartQuantity += 3;
        console.log(`Cart Quantity : ${cartQuantity}`);
    } else if (cartQuantity === 8) {
        console.log(`You can only add 2 item left`);
    } else if (cartQuantity === 9) {
        console.log(`You can only add 1 item left`);
    } else {
        console.log(`Your cart is full : ${cartQuantity}`);
    }
}

function removeItemButton() {
    if (cartQuantity >= 2) {
        cartQuantity -= 2;
        console.log(`Cart Quantity : ${cartQuantity}`);
    } else if (cartQuantity < 2 && cartQuantity > 0) {
        console.log(`You only have ${cartQuantity} item left`);
    } else if (cartQuantity === 0){
        console.log(`Your cart is empty : ${cartQuantity}`);
    }
}

function removeItemButton1() {
    if (cartQuantity >= 3) {
        cartQuantity -= 3;
        console.log(`Cart Quantity : ${cartQuantity}`);
    } else if (cartQuantity < 3 && cartQuantity > 0) {
        console.log(`You only have ${cartQuantity} item left`);
    } else if (cartQuantity === 0){
        console.log(`Your cart is empty : ${cartQuantity}`);
    }
}

function resetCartButton() {
    cartQuantity = 0;
    console.log(`All items was deleted 
Cart Quantity : ${cartQuantity}`);
}
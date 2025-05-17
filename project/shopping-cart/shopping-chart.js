const basketball = 2;
const tShirt = 2;
const basketballPrice = 2095; // Price in cents to avoid inaccuracies while doing math with floating numbers
const tShirtPrice = 799;
const itemType = 2;
const wednesdayShipping = 499; 
const mondayShipping = 999; 
const taxRate = '10%';

const firstLine = `Items (${basketball + tShirt}): $${(basketballPrice * basketball + tShirtPrice * tShirt) / 100}` // Divided by 100 to convert the price into dollars
console.log(firstLine);

const secondLine = `Shipping & handling: $${wednesdayShipping * itemType / 100}`; 
console.log(secondLine);

const thirdLine = `Total before taxes: $${((basketballPrice * basketball + tShirtPrice * tShirt) + wednesdayShipping * itemType) / 100}`;
console.log(thirdLine);

const fourthLine = `Estimated tax (${taxRate}):$${Math.round(((basketballPrice * basketball + tShirtPrice * tShirt) + wednesdayShipping * itemType) * 0.1) / 100}`; // 0.1 Equal (10 / 100) 10 percent of hundred
console.log(fourthLine);
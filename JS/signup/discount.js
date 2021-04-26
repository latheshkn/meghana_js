// discount = (List price - selling price)/List price * 100





function discountCal(sellingPrice, listPrice){

    var discount=((listPrice-sellingPrice)/listPrice) *100;
    var roundOffPercentage = Math.round(discount);
    console.log(`

    discount in % is: ${roundOffPercentage}
`)

    return discount;
}

discountCal(299,399)

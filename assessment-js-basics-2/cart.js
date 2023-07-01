///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((a, {price}) => a + price, 0);
console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    // console.log(cartTotal);
    cartTotal = cartTotal + (1 * tax);
    // console.log(cartTotal);
    cartTotal -= couponValue;
    // console.log(cartTotal);
    return cartTotal
};

console.log(calcFinalPrice(20, 5, .06));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    // My Restaurants properties that my customer object will have are, who are they? You'll know your customers based on what they order. Next, guests visit because, It's good to analyze when's the most popular visit time. Then, how long do customers stay in minutes, because knowing what makes them stay can have me create ideas targeting, those customers which will make them stay longer. Finally, regular customer because, knowing who your customer is and their behavior means you can target them individually with what is most likely to gain their loyalty.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    whoarethey: 'chicken lovers',
    guestvisit: 'lunch time',
    howlongcustomersstay: 60,
    regularcustomer: true
}

console.log(customer);
// console.log(customer.regularcustomer);
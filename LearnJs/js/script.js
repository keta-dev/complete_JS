// Phone Purchase
const phonePrice = 90.99;
const spendingThreshold = 400;
const accessories = 7.90;
const taxRate = 0.03;

let amt = 0;
let accountBalance = 1000.91;

function payTaxRate(amt) {
  return amt * taxRate;
}

// total purchase
function total(amt) {
  return '₦' + amt.toFixed(2);
}

// keep buying until you runout of money
while (amt < accountBalance) {
  // buy phone
  amt += phonePrice;

  if (amt < spendingThreshold) {
    amt += accessories;
  } 
}

// pay the govt required tax
amt += payTaxRate(amt);

console.log('Your final purchase is:', total(amt));

// if phonePrice is more than accountBalance
if (amt > accountBalance) {
  console.log('Insufficient fund in your account. 👎');
}
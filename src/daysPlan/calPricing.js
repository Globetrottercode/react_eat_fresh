let pricing = {
  vegBasic: 3900,
  vegPremium: 5100,
  nonVegBasic: 4500,
  nonVegPremium: 6000,
  customize: 6500,
};
let discount = {
  7: 5,
  14: 10,
  28: 15,
  custom: 0,
};

function calculatePrice(planType, days) {
  let total, additional, subtotal;
  total = pricing[planType] / (28 / Number(days)); // getting total price in days
  if (Number(days) > 6) {
    total = total - total * (discount[days] / 100); // applying discount
  }
  additional = Math.ceil(0.05 * total);
  total = Math.ceil(total);
  subtotal = total + additional;
  return {
    total: total,
    additional: additional,
    subtotal: subtotal,
  };
}

console.log(calculatePrice("vegBasic", "6"));

export default calculatePrice;

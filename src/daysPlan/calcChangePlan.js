let pricing = {
  // 28 day price
  vegBasic: 3640,
  vegPremium: 4760,
  nonVegBasic: 4200,
  nonVegPremium: 5600,
  customize: 6500, // 30 day price
};

function calculateChange(current, change, end) {
  let date = new Date();
  let remain = 0;
  while (true) {
    remain++;
    date.setDate(date.getDate() + 1);
    let curr =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

    if (curr === end) {
      break;
    }
  }
  let amt = pricing;
}

console.log(calculateChange(1, 2, "7-7-2023"));

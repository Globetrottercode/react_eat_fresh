async function getAllAddress(user_id, plan) {
  // return empty array if no saved addresses else returns an array of addresses
  let response = await fetch("http://localhost:3500/customer/myPlan", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      user_id: user_id,
      name: plan.name,
      phone: plan.phone,
      start: plan.start,
      end: plan.end,
      selectedPlan: plan.selectedPlan,
      selectedDays: plan.selectedDays,
      address: plan.address,
      total: plan.total,
      additional: plan.additional,
      subtotal: plan.subtotal,
      creditsUsed: plan.creditsUsed,
    }),
  });
  if (response.status === 200) {
    let data = await response.json();
    console.log("success :", data);
  }
}

// async function check() {
//   console.log(await getAllAddress("dassouvik2021@gmail.com"));
// }

// check();
export default getAllAddress;

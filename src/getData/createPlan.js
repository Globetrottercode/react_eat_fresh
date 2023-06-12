async function createPlan(user_id, plan) {
  // return empty array if no saved addresses else returns an array of addresses
  let response = await fetch(
    "https://backend-eat-fresh.onrender.com/customer/myPlan",
    {
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
    }
  );
  if (response.status === 200) {
    let data = await response.json();
    console.log("success :", data);
    return data;
  }
}

let plan = {
  name: "Souvik Das",
  phone: "7797840865",
  start: "10-6-2023",
  end: "16-6-2023",
  selectedPlan: "vegBasic",
  selectedDays: "7",
  address: "s , s , s, s",
  total: 1000,
  additional: 1100,
  subtotal: 1100,
  creditsUsed: 0,
};

// async function check() {
//   console.log(await createPlan("647b3a5785f77b439b86bcef", plan));
// }

// check();
export default createPlan;

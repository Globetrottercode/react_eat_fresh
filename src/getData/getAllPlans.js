async function getAllPlans(username) {
  const response = await fetch(
    "http://localhost:3500/customer/myPlan/getMyPlan",
    {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",

      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: username,
      }),
    }
  );
  const json = await response.json();
  if (response.status === 200) {
    if (json.plans == 0) return [];
    else return json;
  }
}

async function check() {
  console.log(await getAllPlans("dassouvik2021@gmail.com"));
}

check();

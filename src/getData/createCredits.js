// const result = await fetch(
//   "http://localhost:3500/customer/credits/createCredits",
//   {
//     // credentials: 'include',
//     // Origin:"http://localhost:3000/login",

//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: new URLSearchParams({
//       user_id: user._id,
//     }),
//   }
// );
// let creditData = await result.json();
// console.log(creditData);

async function createCredits(user_id) {
  // return empty array if no plan else returns an array of plans
  const response = await fetch(
    `http://localhost:3500/customer/credits/createCredits`,
    {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",

      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        user_id: user_id,
      }),
    }
  );
  const json = await response.json();
  if (response.status === 200) {
    return json;
  }
}

async function check() {
  console.log(await createCredits("64818035b632c80101911688"));
}

check();

// export default createCredits;

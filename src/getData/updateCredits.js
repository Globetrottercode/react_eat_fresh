async function updateCredits(username, credits) {
  // returns -1 if no credits created else returns an integer value of credit
  const response = await fetch(
    "http://localhost:3500/customer/credits/updateCredits",
    {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",

      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: username,
        credits: credits,
      }),
    }
  );
  const json = await response.json();
  //   console.log(json);
  if (response.status === 200) {
    if (json.message) return -1;
    else return json;
  }
}

// async function check() {
//   console.log(await updateCredits("dassouvik2023@gmail.com", 29900));
// }

// check();

export default updateCredits;

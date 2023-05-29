async function getCredits(username) {
  // return empty array if no credits created else returns an array of credit
  const response = await fetch(
    "http://localhost:3500/customer/credits/getCredits",
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
  //   console.log(json);
  if (response.status === 200) {
    if (json.message) return [];
    else return json[0].credits;
  }
}

// async function check() {
//   console.log(await getCredits("dassouvik2023@gmail.com"));
// }

// check();

export default getCredits;

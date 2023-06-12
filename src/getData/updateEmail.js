async function updateEmail(username, email) {
  // returns -1 if no credits created else returns an integer value of credit
  const response = await fetch(
    "https://backend-eat-fresh.onrender.com/customer/updateEmail",
    {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",

      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: username,
        email: email,
      }),
    }
  );
  const json = await response.json();
  //   console.log(json);
  if (response.status === 200) {
    return json;
  }
}

// async function check() {
//   console.log(
//     await updateEmail("dasbiplob@gmail.com", "dasbiplob023@gmail.com")
//   );
// }

// check();

export default updateEmail;

async function resetPassword(username, oldPassword, newPassword) {
  // returns -1 if no credits created else returns an integer value of credit
  const response = await fetch(
    "http://localhost:3500/customer/changePassword",
    {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",

      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: username,
        oldPassword: oldPassword,
        newPassword: newPassword,
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
//   console.log(await resetPassword("dasbiplob023@gmail.com", "123456", "1234"));
// }

// check();

export default resetPassword;

async function updateName(username, name) {
  // returns -1 if no credits created else returns an integer value of credit
  const response = await fetch("http://localhost:3500/customer/updateName", {
    // credentials: 'include',
    // Origin:"http://localhost:3000/login",

    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      username: username,
      name: name,
    }),
  });
  const json = await response.json();
  //   console.log(json);
  if (response.status === 200) {
    return json;
  }
}

// async function check() {
//   console.log(await updateName("dasbiplob023@gmail.com", "Biplob Das"));
// }

// check();

export default updateName;

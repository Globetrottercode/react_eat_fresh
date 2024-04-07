let abc = "hello";

function hello() {
  console.log(abc);
  insideHello();
  function insideHello() {
    console.log("printing from inside hello :", abc);
  }
}
hello();

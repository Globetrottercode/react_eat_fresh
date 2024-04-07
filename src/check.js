function rodOffcut(lengths) {
  // Write your code here
  while (lengths.length > 0) {
    console.log(lengths.length);
    lengths.sort((a, b) => a - b);
    let removeEl = lengths[0];
    for (let i = 0; i < lengths.length; i++) {
      if (lengths[i] === removeEl) {
        lengths.splice(i, 1);
        i--;
      } else {
        lengths[i] = lengths[i] - removeEl;
      }
    }
  }
}

let lengths = [1, 2, 3, 4, 3, 3, 2, 1];

rodOffcut(lengths);

function reverseString(str) {
    let res = "";
    let num = "";
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] != 1) {
        res += str[i];
      } else {
        num += str[i];
      }
    }
    return res + num;
  };
  console.log(reverseString("NEGIE1"));
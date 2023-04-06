function Panjang(sentence) {
    let max = 0;
    let arr = sentence.split(" ");
    let Panjang = arr.map((e) => {
      if (e.length > max) {
        max = e.length;
      }
    });
    let result = arr.filter((e) => {
      return e.length === max;
    });
    return `${result[0]}: ${max} character`;
  };
  console.log(Panjang("Saya sangat senang mengerjakan soal algoritma"));

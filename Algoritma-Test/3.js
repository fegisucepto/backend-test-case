function stringCounter(input, query) {
  let output = [];
  query.map((e) => {
    let counter = 0;
    input.map((f) => {
      if (e === f) {
        counter += 1;
      }
    });
    output.push(counter);
  });
  return output;
}

const input = ['xc', 'dz', 'bbb', 'dz'];
const query = ['bbb', 'ac', 'dz'];

console.log(stringCounter(input, query));

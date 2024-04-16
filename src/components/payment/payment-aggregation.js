export default function PaymentAggregation({ data }) {
  let iteration = data.length;
  let filteredData = [];
  for (let l = 0; l <= iteration; l++) {
    let index = l;
    let object = data;
    let loop = iteration;
    const indexAfter = (val) => {
      const iAfter = val + 1;
      return object.at(iAfter);
    };

    let countSame = 0;
    for (let i = index; i < loop; i++) {
      if (indexAfter(i)) {
        if (object.at(i).date === indexAfter(i).date) {
          countSame = countSame + 1;
        } else {
          break;
        }
      }
    }

    if (countSame > 0) {
      filteredData = object.splice(index, countSame + 1);
      const sum = filteredData.reduce(
        (accumulator, currentValue) => +accumulator + +currentValue.Amount,
        0
      );
      const combinedData = {
        Amount: sum.toString(),
        date: filteredData.at().date,
      };

      object.splice(index, 0, combinedData);
      l = l * 0;
    } else {
      filteredData = "";
    }
    iteration = data.length;
  }
  return data;
}

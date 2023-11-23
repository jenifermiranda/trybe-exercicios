function positiveSum(arr) {
    const positive = arr.filter((num) => num > 0)
    console.log(positive);
   const sum = positive.reduce((accumulator, currentValue) => accumulator + currentValue);
     return sum;
   }

   positiveSum([1,2,3]);
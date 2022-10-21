function sumSalary(salaries) {
  let resultSum = 0;
   
  for (let key in salaries) {
      let value = salaries[key];
      if(value > 0 && Number.isFinite(value)) {
          resultSum += value;
      }
  }
  return resultSum;
}

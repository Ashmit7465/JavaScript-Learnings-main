const form = document.querySelector('form');
//This use case will give us empty value
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (ev) {
  ev.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if (bmi < 18.6) {
      results.innerHTML = `<span>Your BMI is ${bmi} . You fall in Under-Weight Category.</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>Your BMI is ${bmi} . You fall in Normal-weight Category.</span>`;
    } else {
      results.innerHTML = `<span>Your BMI is ${bmi} . You fall in Over-weight Category.</span>`;
    }
  }
});

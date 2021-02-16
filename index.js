const start = 1;
const end = 110;
const fbbValues = { 'fizz':3, 'buzz':5,'baz':7};

function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

function isNumberDivisableBy(num, divisor) {
  return num % divisor == 0;
}

function fbbStringBuilder(num, divisor, text) {
  if(isNumberDivisableBy(num, divisor)) {
    return text;
  }
  return '';
}

function fizzBuzzBaz(arrayOfNumbers) {
  for (var num of arrayOfNumbers) {
    var outText = '';
    for (const [key, value] of Object.entries(fbbValues)) {
      outText += fbbStringBuilder(num, value, key)  
    }

    if(!outText) {
      outText = num;
    }
    console.log(outText);
  }
}


fizzBuzzBaz(range(start, end));

const request = require('request');
request.get('https://api.exchangeratesapi.io/latest', 
(data, err, rates) => {
  
  console.log(JSON.parse(rates));
  
  let parsed = [];
  parsed[0] = JSON.parse(rates);

  let arr = [];

  parsed.forEach((elem) => { 
    arr.push(elem.rates);
    
  });
  console.log(arr[0]);    



  }
);
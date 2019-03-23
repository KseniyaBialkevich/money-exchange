// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
  return calc(currency);
}

var calc = function(amount) {
  if(amount > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

  var result = {};
  var rest = amount;

  var hc = Math.floor(amount / 50);
  rest = rest - hc * 50;
  if(hc > 0) result["H"] = hc;

  var qc = Math.floor(rest / 25);
  rest = rest - qc * 25;
  if(qc > 0) result["Q"] = qc;

  var dc = Math.floor(rest / 10);
  rest = rest - dc * 10;
  if(dc > 0) result["D"] = dc;

  var nc = Math.floor(rest / 5);
  rest = rest - nc * 5;
  if(nc > 0) result["N"] = nc;

  var pc = Math.floor(rest / 1);
  if(pc > 0) result["P"] = pc;

  return result;
}
// calc(75)
// function pp (a) { console.log(JSON.stringify(calc(a))); };
// pp(102)
// pp(1000)
// pp(9999)

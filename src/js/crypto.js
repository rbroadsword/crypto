//for business logic, constructors, and functions
export default class Crypto {
  static getCrypto() {
    return fetch(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&ids= 5DAI,BTC,UNI,ETH,ZRX,BAT,ADA,HEX,LTC,1INCH,DOGE,XRP,XLM,USDT,USDC&currency=EUR&interval=1d,7d,30d,365d,ytd&per-page=100&page=1`)
      .then(function(response) {
        //console.log("line 5: ", response); 
        if (!response.ok) {
          //console.log("line 7 crypto.js: " , response);
          throw Error("error status: " , response.status); 
        } 
        return response.json(); 
      })
      .catch(function(error) {
        //console.log("line 13 crypto.js: " + error); 
        return error;
      }); 
  }
}
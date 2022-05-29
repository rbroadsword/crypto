//for UI logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Crypto from './js/crypto.js'; 

function getElements(response) {
  // console.log(response[0].id); 
  // console.log(response[0].name);
  // console.log(response[0].price);
  console.log("line 12" , response, "end of error"); 
  if (response instanceof Error === false) {
    //console.log("line 14" + response); 
    $('.showBTC').text(`The price of ${response[0].id} is currently ${response[0].price}`);
  } else {
    //console.log(response); 
    $('.showErrors').text(`there was an error: ${response.message}`); 

  }
}

$(document).ready(function() {
  $('#crypto').click(function() {
    console.log(Crypto.getCrypto()); 
    Crypto.getCrypto()
      .then(function(response) {
        getElements(response);
      }); 
  }); 
}); 
/*
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del 
numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
 */
//vars
var message = document.getElementById("message");
var fb = "";

for (var i = 1; i <= 100; i++) {
    //for multiple of 3
    var f = i % 3 == 0;
    //for multiple of 5
    var b = i % 5 == 0;
    //test condition and debug inline 
    console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
    
    fb+=(f ? b ? "FizzBuzz".toUpperCase() : "Fizz" : b ? "Buzz" : i.toString());
   //sol with if statment
    /*if (f && b) {
        fb += "FizzBuzz".toUpperCase();
    } else if (f) {
        fb += "Fizz";
    } else if (b) {
        fb += "Buzz";
    } else {
        fb += i.toString();
    }*/
    fb += " ";
    //each 15 values writes a new line 
    if (i % 15 == 0) {
        fb += "\n";
    }
}
//write in html + debug inline
console.log(fb);
message.innerText = fb;
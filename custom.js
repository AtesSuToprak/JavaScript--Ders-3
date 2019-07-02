
/*//////////////////functions//////////////////////*/

/*function greeting(name) {
    console.log("Hello" + name);
    console.log(`...`)
}

greeting("Mehmet");  //Bunu tanımlayınca sonucumuz "HelloMehmet" oluyor! 

function functionName() {
    console.log ('HELLO WORLD !');
}

const functionName = (name) => {
    console.log('HELLO' + name);
}*/

/*//////////////////////Arguments///////////////////*/

/*function square(num) {  
    console.log (num * num);
}

square (10);
square(3);
square(4);
//////////////////////////////////////////////////////
function sum (x,y) {
    console.log(x+y);
}

sum (5,10);*/

///////////////////////////////////////////

/*let userNumber1 = 1*prompt("What's number 1?"); // let kısmı bize kullanıcı değer girerse toplama işlemini gerçekleştirmesi yönünde yardımcı olur.
let userNumber2 = 1*prompt("What's number 2?");

function sum (x=0 , y=0) { // X ve Y yi sıfır a eşitlediğimizde  sum() = 0 oldu
                            // X ve Y yi sıfır a eşitlemeyince sum()=NaN verdi !
                            // X ve Y yi sıfır verirsek ve sum(5,10) yaparsak cevabı bize 15 verir. Yani üzerine yazar ! Buradaki sıfırlar 
                            // Sadece NaN almamak  içindir. 
    console.log(x+y);
}

sum(userNumber1, userNumber2) ;*/

/////////////////////////The Return Keyword (Save the output)//////////////////////////
// Return function will stop your work ! 

/*function test (x,y) {
    return y-x; 
}
test(10,40);
console.log(10,40);*/

/*function test(x) {
    return x*2;  //return 1 kez kullanılınca kendisinden sonra gelen console ve return ü çalıştırmaz.!!!!!!! ÖNEMLİ!!!! 
    console.log(x); //bu çalışmaz!!
    return x/2; //bu çalışmaz !
}
test(40);*/

////////////////////////////////////////////////////////////
/*let userName = prompt("What is your name ?");
function functionName (name) {
    console.log ("hey one for "+ name +" one for me!");
} 

functionName(userName); */ // bunun elle değiştirilebilir olması için parantez içine yazdık!

/////////////////////////WHILE LOOP//////////////////////////////

/*let count = 1;

while ( count < 6 ) {
    console.log (" count is: " + count);
    count++ ;
}*/

/////////////////////////WHILE LOOP EXERCISE/////////////////////

/*let str = "hello"; 
let count = 0 ;

while ( count < str.length ){
    console.log (str[count]);
    count++;
}*/

/*let magicNumbers = -10;

while ( magicNumbers < 20) {
    console.log (magicNumbers);
    magicNumbers++ ;
}*/

/*let counter = 10;  // 10 ile 40 arasındaki çift sayılar ! 

while ( counter < 42) {
    console.log( counter);
    counter +=2;
}*/

/*let x = 300;        // 300 ile 333 arasındaki tek sayıları yazdır !
while( x <= 333 ) {
    
    if( x %2 !==0 ) {
        console.log (x);
    }
    x++;
}*/

let i = 5 ;       // 5 ve 3 ile bölünebilen 5 ve 50 arasındaki sayılar ! 

while ( i < 50 ) {
    console.log ('code executed');
    if( i % 5 === 0 && i % 3 === 0 ) {  // or  if (i%15===0) kullanılabilir aynı sonuç alınır !
        console.log(i);
    }
    i++;
}
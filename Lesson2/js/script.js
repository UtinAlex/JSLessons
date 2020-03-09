'use strict';
let a = []+false+null+true;
let y=1;
let x=y=2;
console.log(a);
console.log(x);
let a2 = [] + 1 + 2;
console.log(a2);
let a3 = "1"[0];
console.log(a3);
let a4 = 2 && 1 && null && 0 && undefined;
console.log(a4);

//alert(null || 2 && 3 || 4);

let s = [1,2,3];
let s2 = [1,2,3];
console.log(s==s2);
console.log(+ "Infinnity");

if("яблоко" === "яблоко") {
    console.log("1");
}
else{
    console.log("0");
}

let w = 0 || "" || 2 || undefined || true || false;
console.log(w);

for (let i =0; i<2;i++)
{
    console.log(i);
}
let j = 0;
while(j<2)
{
    console.log(j);
    j++;
}
do
{
    console.log(j);
    j++;
}
while(j<4);

let num=1221;

let rev=0;
let rem;
let tem=num;
while(num<0)
{
rem=num%10;
rev=rev*10+rem;
num=Math.floor(num/10);
}

if(num==temp)
  console.log("palindome")
else 
   console.log("Not palindrome");    
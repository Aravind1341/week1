let myString = "Aravind"
let reverseString=""
let isPalintrome

for(i=myString.length-1;i>=0;i--){
    reverseString = reverseString + myString.charAt(i)
}

isPalintrome = myString === reverseString

console.log(myString +" and "+ reverseString + " is Palindrome - " + isPalintrome)
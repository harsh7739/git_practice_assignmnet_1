let str = "naman";
let str1 = "";
for (let i = str.length-1; i>=0; i--) {
   str1 += str[i]
}

if (str == str1) {
   console.log("it is palindrome")
}
else {
   console.log("not aplindrome");
}  
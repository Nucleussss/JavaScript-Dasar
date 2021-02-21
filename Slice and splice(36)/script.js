let myArry = ["sapik","dodi","murtado","komarun","sandika","sandriana"];

// Splice - menyisipkan element di tengah2 array
// myArry.splice(1,0,"sibaba","sibahe");

// Slice - mengambil element lalu menjadikannnya array baru
let newArry = myArry.slice(2,5);

console.log(newArry.join(" - "));
console.log(myArry.join(" - "));

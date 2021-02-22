let angka = [1,10,2,5,20,3,6,8,7];
    nama = ["membran","sotoyo","kalpari","darmaji"];

// filter - mengembalikan banyak nilai berupa array
let angka2 = angka.filter(function (x) {
    return x > 2;
});

// find - mengebalikan 1 nilai berupa string
let nama2 = nama.find(function (e) {
    return e == "membran";
})

console.log(angka2.join(" - "));
console.log(nama2);
let angka = [1,10,2,5,20,3,6,8,7];
    nama = ["membran","sotoyo","kalpari","darmaji"];

// forEach artinya "untuk setiap element"
nama.forEach(function(e,i){
    console.log("mahasiswa " +(i+1)+" adalah: "+ e)
});

// map - looping yang menghasilkan array baru
let newAngka = angka.map(function(e) {
    return e*2;
})
console.log(newAngka);

// sort - mengurutkan angka dari yang terkecil
console.log(angka.sort(function (a,b) {
    return a-b;
}))
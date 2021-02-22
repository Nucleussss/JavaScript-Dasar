// macam macam konteks this

// konteks this pada object literal
//  dia mengembalikan object itu sendiri
// let obj = {nama : "aditya"};
// obj.halo = function (){
//     console.log("guys");
//     console.log(this);
// };
// obj.halo();


// konteks this pada function declaration
//  dia mengembalikan object global
// function halo() {
//     console.log("halo");
//     console.log(this);
// }
// halo();

// konteks this pada constructor
// dia mengembalikan object baru
function halo(){
    console.log("halo");
    console.log(this);
}

let obj2 = new halo();
obj2.nama = "aditya";





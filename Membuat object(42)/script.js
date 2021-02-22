// macam-macam cara membuat object

// object literal
let mhs = {
    nama : "sapima",
    kelas : "3d",
    email : "sapima.@gmail.com"
}

// function declaration
function buatObject(nama,kelas,email) {
    let mhs = {};
    mhs.nama = nama;
    mhs.kelas = kelas;
    mhs.email = email;
    return mhs;
}
let mhs2 = buatObject("sapi","d4","sapi@damiknmds.com");

// constructor
function Mahasiswa(nama,kelas,email) {
    this.nama = nama;
    this.kelas = kelas;
    this.email = email;
}

let mhs3 = new Mahasiswa("asila","12","sapili@gmail.com");
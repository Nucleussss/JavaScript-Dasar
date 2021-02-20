let nyawa = 3;
    p = 0;
    comp = 0;
    kesempatan = true;

alert("Tebaklah angka dari 1-10!\nKamu punya "+nyawa+" nyawa");

// membangkitakn bilngan random
comp = Math.ceil( Math.random()*10);
console.log(comp);

while (kesempatan) {
    // memilih angka 
    p = parseInt(prompt("masukan tebakan kamu : \nKamu punya "+nyawa+" nyawa"));

    // menentukan hasil
    let hasil = "";

    if (p == comp) {
        hasil = "pilihan anda benar";
        kesempatan = false;
    } else if (p > comp) {
        hasil = "terlalu BESAR";
        nyawa--;
    } else if (p < comp) {
        hasil = "terlalu KECIL";
        nyawa--;
    }else{
        hasil = "masukan angka 1-10!";
    }

    // menampilkan hasil 
    alert(hasil);

    if (nyawa == 0) {
        kesempatan = false;
        alert("kesempatan anda habis!\nAngka yang dicari adalah "+comp);
    }
}
    alert("terima kasih");







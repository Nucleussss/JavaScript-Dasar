let lagi = true;
while (lagi) {
    // menangkap pilihan player
    let p = prompt("masukan pilihan anda :\nCth(orang,gajah,semut)");

    // membangkitkan bilangan random
    let comp = Math.random();
    // menentukan pilihan comp
    if (comp == .34) {
        comp = "gajah";
    } else if(comp >= .34 && comp <= .67) {
        comp = "semut";
    } else{
        comp = "orang";
    }

    // menentukan rules
    let hasil = "";
    if (p == comp) {
        hasil = "SERI!"
    } else if (p == "orang") {
        hasil = (comp == "gajah") ? "KALAH" : "MENANG";
    } else if (p == "semut") {
        hasil = (comp == "gajah") ? "MENANG" : "KALAH";
    } else if (p == "gajah") {
        hasil = (comp == "orang") ? "MENANG" : "KALAH";
    } else{
        hasil = "pilihan anda salah";
    }

    // tampilkan hasil
    alert("pilihan anda : "+p+"\npilihan computer : "+comp+"\nhasilnya adalah : "+hasil);

    lagi = confirm("lagi?");
}
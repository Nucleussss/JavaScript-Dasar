// let penumpang = ["sajiku",undefined,"nutrijel"];
let penumpang = ["darminto",undefined];

function penumpangNaik(namaPenumpang , penumpang) {
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        // mengecek array 
        for (let i = 0; i < penumpang.length; i++) {

            // jika sudah ada nama yang sama
            if(penumpang[i] == namaPenumpang){
                console.log(namaPenumpang + " sudah ada di dalam angkot")
                return penumpang;

            // jika ada kursi kosong
            }else if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;

            // jika seluruh kursi terisi
            } else if ( i == penumpang.length-1 ){
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

function penumpangTurun(namaPenumpang , penumpang) {
    if (penumpang.length == 0) {
        console.log("angkot masih kosong");
        return penumpang;
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            
            // apabila penumpang tersebut ada
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            
            // apabila penumpang tida ada di dalam angkot
            } else if ( i == penumpang.length - 1) {
                console.log("penumpang tidak ada didalam angkot")
                return penumpang;
            }
        }
    }
}
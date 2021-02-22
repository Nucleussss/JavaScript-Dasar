function Angkot(sopir,trayek,penumpang,kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    // menangani saat penumpang naik
    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    // menangani saat penumpang turun
    this.penumpangTurun = function (namaPenumpang,bayar){
        // saat penumpang turun
        if (this.penumpang.length == 0) {
            console.log("angkot masih kosong");
            return this.penumpang;
        } else {

            // menelusuri array
            for (let i = 0; i < this.penumpang.length; i++) {

                // mencari penumpang lalu mengubahnya menjadi undefined
                if (this.penumpang[i] == namaPenumpang) {
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;

                // menampilkan pesan apabila nama penumpang tidak ada di angkot
                } else if(i == this.penumpang.length - 1) {
                    console.log(namaPenumpang+" tidak ada di angkot");
                }
                
            }

        }
        
    }
}

let angkot2 = new Angkot("darmaji",["tiris","kertosuko"],[],0);
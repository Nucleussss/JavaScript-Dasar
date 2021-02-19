let jmlAngkot = 10;
    angkotBeroperasi = 6;
    noAngkot = 1;
    noAngkotLembur = 8;

for ( noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log("Angkot No. "+noAngkot+" beroperasi dengan baik.");
    }else if(noAngkot == noAngkotLembur){
        console.log("Angkot No. "+noAngkot+" sedang lembur.");
    }else{
        console.log("Angkot No. "+noAngkot+" sedang tidak beroperasi.");
    }
}    


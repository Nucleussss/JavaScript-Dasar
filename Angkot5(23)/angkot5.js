let jmlAngkot = 10;
    angkotBeroperasi = 6;
    noAngkot = 1;
    noAngkotLembur = [8,10,5];

for ( noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
        console.log("Angkot No. "+noAngkot+" beroperasi dengan baik.");
    }else if(noAngkot == noAngkotLembur[0] || noAngkot == noAngkotLembur[1] || noAngkot == noAngkotLembur[2]){
        console.log("Angkot No. "+noAngkot+" sedang lembur.");
    }else{
        console.log("Angkot No. "+noAngkot+" sedang tidak beroperasi.");
    }
}


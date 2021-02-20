let item = prompt("pilih 1 dari makanan atau minuman berikut :\n(susu,daging,buah,pizza,sprit)");

switch (item) {
    case "susu":
    case "daging":
    case "buah":
        alert("ini sehat!");
        break;

    case "pizza":
    case "sprit":
        alert("ini tidak sehat");
        break;
    default:
        alert("anda memasukan pilihan yang salah!");
        break;
}
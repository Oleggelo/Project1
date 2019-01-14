// // // function arraysort(a, b) {
// // //     if (a > b) return 1;
// // //     if (a < b) return -1;
// // // }
// // //
// // // var arr = [ 1, 15, 6, 24, 22, 18 ];
// // //
// // // arr.sort(arraysort);
// // //
// // // alert(arr);
// //
// // var a = [1,5,7,4,52,765,23,23,3,43,23]
// // for ( var i = 0, j = a.length;i < j; i++){
// //    current = a[i];
// //    let j = i;
// //     while(j>0 && a[j-1]> current){
// //         a[j] = a[j-1];
// //         j--;
// //     }
// //     a[j] = current;
// // }
// // alert (a);
// let arr = [5,4,6,2,8,9]
// function arrUp(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let Minim = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[Minim] > arr[j]) {
//                 Minim = j;
//             }
//         }
//         if (Minim !== i) {
//             [arr[i], arr[Minim]] = [arr[Minim], arr[i]];
//         }
//     }
//     return arr;
// }
// let one = arrUp(arr);
// document.write(one);
// //
// // let arr = [5,4,6,2,8,9];
// // for (let i = 0, i < arr.length; i++) {
// //     for ( let j = 0; j < arr.length; j++){
// //         if (arr[Minim] > arr[j]){
// //             let Minim = arr[i];
// //             arr[i] = arr[j];
// //             arr[j] = Minim
// //         }
// //     }
// // }
// // document.write(arr);
//
// let massiv = [4,36,6,4,7,9,4557,87,3];
//
// function sorting(massiv) {
//     for (let i = 0; i < massiv.length; i++) {
//         for (let j = 0; j < massiv.length; j++) {
//             if (massiv[i] > massiv[j]) {
//                 let temp = massiv[i];
//                 massiv[i] = massiv[j];
//                 massiv[j] = temp;
//             }
//         }
//     }
//     return massiv;
// }
// let sortarr = sorting(massiv);
// document.write(sortarr);


//
// function plus (a,b) {
//     summa = a + b;
//     return summa;
// }
// let sum = plus(a,b);
// alert(sum);

function coffe (name, price){
    let shop = "";
    if (name == "amer"&& price == 15){
        shop = "Americano,15$"
    }
    if (name == "latte"&& price == 10){
        shop = "Latte,10$"
    }
    return shop;
}
let buy = coffe("latte", 10);
document.write(buy);
function angkaShort() {
  var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  console.log('Sebelumnya :',angka);
  angka=angka.sort()
  return angka;
   }
console.log('Ascending :', angkaShort());
function functionRevese() {
  var angka =[2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  var result = angka.reverse();
  return result;
}
console.log('Decending :',functionRevese());

const angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
const  result=angka.filter(deret => deret > 10);
console.log('Filter :',result);

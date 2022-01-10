//Задание 3 (сортировка "дырчатого" массива)
//Массив сортируется по возрастанию и с учетом количества дырок в числах
//Примем что "младшими числами"(без дырок) будут 1, 2, 3, 5, 7"
//Примем что "старшими числами" (с дырками) будут 0, 4, 6, 9 и 8 самая старшая (две дырки)
//Количество дырок в числе подразумевает его "вес" например число "18" его вес =2, число "550" его вес =1
//Таким образом 18(2)>550(1) или 88(4) > 100(2)


// функция определения веса числа с учетом дырок
function weightNumber (inpNumber: number) {

let digits = inpNumber.toString().split('');
let realDigits = digits.map(Number)
//console.log(realDigits);

let weight = 0;

for (let i = 0; i<realDigits.length; i++){
 if (realDigits[i] == 0 || realDigits[i] == 4 || realDigits[i] == 6 || realDigits[i] == 9)   {
     weight = weight + 1;
     //console.log(realDigits[i]+' (1 дырка) Текущий вес = '+weight)
 }
  if (realDigits[i] == 8) {
     weight = weight + 2;
     //console.log(realDigits[i]+' (2 дырки) Текущий вес = '+weight)
 }
}
    //console.log('Число:' + inpNumber +' вес = '+ weight)
    return weight;

}

weightNumber(10)

//функция сравнения двух чисел с учетом их веса
function compareNumberHole(inpOne: number, inpTwo: number){
let inpOneWeight = weightNumber(inpOne);
let inpTwoWeight = weightNumber(inpTwo);

if (((inpOne > inpTwo) && ( inpOneWeight>=inpTwoWeight )) || ((inpOne < inpTwo) && ( inpOneWeight > inpTwoWeight ))) {
    return 1;
} else if ((inpOne === inpTwo) && ( inpOneWeight==inpTwoWeight )) {
    return 0;
} else {
    return -1;
}
}


//---------------------------------------------------------------------------------------------------------------------------------
//Итоговая функция сортировки числе с учетом количества "дырок" в них
//Дырки при сортировке массива используются как "вес числа"
//Данная функция реализована при помощи метода массива "sort" принимающего в себя функцию сравнения двух чисел 
// с учетом их веса
function sortHole (mass: number[]){
 return mass.sort(compareNumberHole);
}

// тестовые массивы для проверки
const testNumbers = [1,2,3,4,5,6,7,8,9,0];

const testNumbers2 = [11,22,33,44,55,66,77,88,99,100, 61, 35, 28, 18 ,550]

console.log(sortHole(testNumbers))
console.log(sortHole(testNumbers2))
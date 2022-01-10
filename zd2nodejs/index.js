//Задание №2 N = 5, 0000012345
//Вывести все перестановки для N = 5 и сохраните их в файл
//Посчитайте количество строк в этом файле


// Функция создает входной массив на основе N (например N = 5, 0000012345)
function createMass (inputNum) {
    let massFirst = [];
    for (let i = 0; i<inputNum; i++ ){
        massFirst.push(0);
    }
    for (let i = 0; i<inputNum; i++ ){
        massFirst.push(i+1);
    }
    return massFirst
}

//Функция вычисления факториала
function factorial(n){
    let result = 1;
    while(n){
        result *= n--;
    }
    return result;
}

// Функция создает выходной массив содержащий все неповторяющиеся комбинации чисел из входного массива
function massNoRepeat (input) {
    let output =[];
    for (let j = 0; j < (factorial(input.length) / (input.length - 1)); j++) {
        for (let i = 0; i < (input.length - 1); i++) {
            [input[i], input[i + 1]] = [input[i + 1], input[i]];
            let tempToMassAll = input.join('')
            if (output.indexOf(tempToMassAll) == -1) {
                output.push(tempToMassAll)
            }
        }
    }
    return output
}

// Создаем входной массив для обработки с N = 5
let mass = createMass(5);

//Массив содержащий все неповторяющиеся комбинации чисел
let massAll = massNoRepeat(mass);
console.log(massAll);


//Сохранение всех перестановок в файле и вывод в консоли количества строк
const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, 'mass.txt');
fs.writeFileSync(filePath,'',err => {
    if(err){
        throw err
    }
    console.log('file created')
})
const writeStream = fs.createWriteStream('mass.txt');
const pathName = writeStream.path;
massAll.forEach(value => writeStream.write(`${value}\n`));
writeStream.on('finish', () => {
    console.log('Данные записаны в файл: ' + pathName);
    //Подсчет количества строк в получившемся файле
    const data = fs.readFileSync('mass.txt').toString();
    console.log('Количество строк в файле = ' + ((data.split('\n').length)-1));

});
writeStream.on('error', (err) => {
    console.error(`There is an error writing the file ${pathName} => ${err}`)
});
writeStream.end();






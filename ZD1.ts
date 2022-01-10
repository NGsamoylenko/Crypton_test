// Задача 1: реализовать функцию getStatistics

interface Student {
    name: string; // Имя студента
    avgMark: number; // Средний балл студента
}

interface Statistics {
    avgMark: number; // средняя оценка всех студентов
    highestMark: string; // студента с самым высоким средним баллом
    lowestMark: string; // имя студента с самым низким средним баллом
}

function getStatistics (marks: Student[]):Statistics {
    //Реализация функции
    
    let retStat :Statistics = {
      avgMark: 0,
      highestMark: 'gagH',
      lowestMark: 'gagL'  
    }

    marks.sort(compareMark);
    retStat.highestMark = marks[marks.length-1].name;
    retStat.lowestMark = marks[0].name;
    retStat.avgMark = average(marks);

    return retStat;

}

//функция сравнения двух оценок для использования "Sort"
function compareMark(persOne: Student, persTwo: Student){
if (persOne.avgMark > persTwo.avgMark) {
    return 1;
} else if (persOne.avgMark === persTwo.avgMark) {
    return 0;
} else {
    return -1;
}
}

// Функция нахождения средней оценки всех студентов
function average(massMarks: Student[]){
let sum: number =0;    
for(let i = 0; i < massMarks.length; i++) {
        sum += massMarks[i].avgMark;
    } 
    return +(sum / massMarks.length).toFixed(2);
}

//Массивы для проверки
let testMarks = [{name: 'Vasya', avgMark: 3.75},
                    {name: 'Lena', avgMark: 4.89}]

let MytestMarks = [{name: 'Vasya', avgMark: 3.75},
                    {name: 'Lena', avgMark: 4.89},
                    {name: 'Test', avgMark: 0}]

console.log('Проверка с моим тестовым массивом')
console.log(getStatistics(MytestMarks));//{avgMark:4.32, highestMark: "Lena", LowestMark: "Vasya"}

console.log('Проверка с тестовым массивом из задания')
console.log(getStatistics(testMarks));//{avgMark:4.32, highestMark: "Lena", LowestMark: "Vasya"}



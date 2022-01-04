// // Task 1 Timetable


// const createTimeTable = () => {
//     const timeTable = {};
//     let userTime;
//     let userTask;

//     while (true){
//     userTime = prompt(`Enter time`);
//     userTask = prompt(`Enter task to prevent time`);

//     if(userTime === null || userTask === null){
//         break;
//     }else if(userTime === "" || userTask === ""){
//         continue;
//     }
//     timeTable[`${userTime}`] = userTask;
//     }
//     return timeTable;
// }

// console.log(createTimeTable())


const salaries = {
    John: "4300.00",
    Ann: "5700.40",
    Pete: "4900.95",
  }

const getSalaries = (salaries) => {
    let total = 0;

    for(let employee in salaries){
        total += Number(salaries[employee])
    }
    return total;
}
const totalResult = getSalaries(salaries).toFixed(2)
console.log(totalResult)
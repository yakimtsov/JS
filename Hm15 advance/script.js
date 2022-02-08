// Задание 1 Из объекта в примере ниже, с помощью деструктуризации достаньте следующие значения:

// total, из объекта paging, который вложен в объект meta
// значение is_active, которое принадлежит первому объекту в массиве data. Переименуйте переменную в isActive.
const response = {
  data: [
    {
      username: "samuel",
      is_active: true,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "john",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "peter",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
  ],
  meta: {
    paging: {
      current: 1,
      next: 2,
      prev: null,
      total: 14,
      per_page: 3,
    },
  },
};

let {
    meta:{
        paging:{
            total: totalValue,
        }
    }   
} = response ;

console.log(totalValue);

let {data: [{is_active: isActive}] } = response;
console.log(isActive);

// Задание 2

// Из объекта в примере ниже, с помощью деструктуризации достаньте следующие значения:

// name
// surname
// все остальные свойста (height, age) должны быть присвоены объекту parameters.

const user = {
    name: "gabriel",
    surname: "brown",
    age: 17,
    height: 178,
};

let {name, surname, ...parameters} = user;

console.log(parameters);


// Задание 3

const max = (a, ...b) => {
  return a > b ? a : b;
};
// Переделайте функцию max таким образом, что бы она принимала любое количество аргументов (при условии, что все они являются числами, и возвращала максимальное из них). P.S. В данной задаче нельзя использовать Math.max()

// console.log(max(2,4,6,8,5,99))



// Задание 4 Переделайте функцию createMessage таким образом, что бы на вход передавались не 4 аргумента, а один объект. Деструктузизуйте его в прямо в аргументах или в теле функции, и присвойте значения по умолчанию:

// Guest для поля author
// текущую дату для поля time

const createMessage = ({author = "Bache", text = "Hello!", reciever, time = new Date()}) => {
  return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
};
// const message = createMessage("Peter", "Hello", "Sam", new Date());

// после выполнения этого задания, функция должна коректно работать с таким аргументом

const message = createMessage({
  reciever: "John",
  text: "Hi!",
});

console.log(message)
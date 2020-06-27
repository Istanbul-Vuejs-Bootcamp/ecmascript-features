const arr1 = ['Ahmet', 'Mehmet', 'Mustafa'];
const arr2 = ['Ali', 'Veli'];

const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// rest operator
// const [val1, ...rest] = arr1;
// console.log(rest);

const obj1 = {
    name: 'John',
    surname: 'Doe',
}
const obj2 = {
    age: 30,
    city: 'Ankara'
}

const newObj = {
    ...obj1,
    ...obj2
}
newObj.name = 'Mehmet'; //objeyi referans almıyoruz bu yüzden değişiklik sadece newObj.name için geçerlidir.
console.log(newObj);
console.log(obj1);





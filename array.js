const arr1 = ['Ahmet', 'Mehmet', 'Mustafa'];

for(let i =0; i<arr1.length; i++) {
    console.log(arr1[i]);
}


arr1.forEach(item => console.log(item));

const newArr = arr1.map(item => item);

arr1.unshift('Murat');
arr1.shift();
arr1.pop();

console.log(arr1);


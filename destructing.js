/* Obje'lerde  */
const obj = {
    name: 'John',
    surname: 'Doe',
    comments: {
        comment: 'Merhaba Dünya'
    }
};

/*
const { name, surname, comments } = obj;
const { comment } = comments;
//ve ya iç içe desctructing
*/

const { comments: { comment } } = obj;


/* Array'lerde kullanımı */
const arr1 = [1,2,3,4,5];
const [value1, value2, value3] = arr1;

//console.log(value1, value3);


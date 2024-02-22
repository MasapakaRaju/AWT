const array=['banana','carrot','pen']
//old way to access an array elements
// const fruit=array[0];
// const veg=array[1];
// const obj=array[2];
// console.log("array elements\n->",fruit,veg,obj)

//********** When destructuring arrays, the order that variables are declared is important. ****************

//new way is destructing
const [fruit,obj]=array;
console.log(fruit,obj);

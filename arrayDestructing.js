const array=['banana','carrot','pen']
//old way to access an array elements
const fruit=array[0];
const veg=array[1];
const obj=array[2];
console.log("array elements\n->",fruit,veg,obj)

//********** When destructuring arrays, the order that variables are declared is important. ****************

//new way is destructing
const [Fruit,,Obj]=array;
console.log(Fruit,Obj);

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);
console.log(add ,subtract,multiply,Math.round(divide));
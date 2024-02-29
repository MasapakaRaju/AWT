// function* fun(){
//     yield 10;
//     yield 20;
//     yield 30;
// }
// let gen=fun();
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)

function* nextNatural(){
    let naturalNumber=1;
    while(true)
    {
        yield naturalNumber++;
    }
}
let gen=nextNatural();
for(let i=0;i<10;i++){
    console.log(gen.next().value)
}
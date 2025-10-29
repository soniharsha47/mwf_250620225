var ar = ['grras','solution',2015,45,'IT'];

for(i=0;i<ar.length;i++){
    console.log(ar[i]);
}
console.log()

ar.map((d,i)=>{
    console.log(d,i);
})

console.log();

ar.map(function(d,i){
    console.log(d,i);
})
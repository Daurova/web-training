function can (n) {
    let counter = n
    return function inner(){
       counter-- 
       if (counter>=0){
        return 'yes'
       }else{return 'no'}
    }
}

const myCounter = can(2)

console.log(myCounter())
console.log(myCounter())
console.log(myCounter())
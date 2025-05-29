function flatten(list) {
    return list.reduce((acc, elem)=>{
        if (Array.isArray(elem)){
            acc=[...acc,...elem]
        }else{acc=[...acc, elem]}
        return acc
    },[])
}
console.log(flatten(flatten([1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }])));
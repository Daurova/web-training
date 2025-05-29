function compress (list){
    if(!list||list.length===0){
        return 'no list'
    }
    const resArr=[]
    const sortedList = [...list].sort((a,b)=>a-b)

    let start = sortedList[0]
    let end = sortedList[0]

    for (let i = 1; i<=sortedList.length; i++) {
      if(sortedList[i]===end+1){
        end=sortedList[i]
      }else{
        if(sortedList[i]===end){
            start = sortedList[i]
        }else {resArr.push(`${start}-${end}`)
               start = sortedList[i]
               end=sortedList[i]
         }
      }
    }
    return resArr.join(',')
}

console.log(compress([1,2,3,5,7,8,10]))
export function getTotalAuthors({books=[""]}){

  let total = books.reduce((acc,val)=>{
    let check = acc.includes(val?.bookauthor) ;
    if(check){
      return acc
    }
    acc.push(val?.bookauthor)
    return acc
  },[])

  return total.length

}
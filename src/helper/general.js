export function getTotalAuthors({books=[""]}){

  let total = books.reduce((acc,val)=>{
    let check = acc.includes(val?.bookAuthor) ;
    if(check){
      return acc
    }
    acc.push(val?.bookAuthor)
    return acc
  },[])

  return total.length

}
module.exports = function sortCategoriesForInsert (inputJson) {
  const catLevels = {}
  const childArr = []
  const sortedCategories = []

  inputJson.forEach((a,i)=> {
    if(a.parent_id){childArr.push(arr[i])}
    else {
      sortedCategories.push(arr[i])
    }
  })

  for(let i = 0; i < childArr.length; i++){
    for(let j = 0; j < sortedCategories.length; j++){
      if(childArr[i].parent_id === sortedCategories[j].id){
        sortedCategories.splice(sortedCategories.findIndex(a => a.id === childArr[i].parent_id)+1,0, childArr[i])
      }
    }
  }
  return sortedCategories
}
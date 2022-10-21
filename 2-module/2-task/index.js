function isEmpty(obj) {
  for(key in obj){
    if(key) {
      console.log(key)
      return false;
      }
  } 
  return true;
}

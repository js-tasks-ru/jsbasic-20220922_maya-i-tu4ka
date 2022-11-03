function isEmpty(obj) {
  for(key in obj){
    if(key) {
      return false;
      }
  } 
  return true;
}

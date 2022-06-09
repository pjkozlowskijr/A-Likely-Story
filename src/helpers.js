export default function sortBooksAlpha(a, b){
    if (a.title.toUpperCase()<b.title.toUpperCase()){
      return -1
    }else if (a.title.toUpperCase()>b.title.toUpperCase()){
      return 1
    }else{
      return 0
    }
  }
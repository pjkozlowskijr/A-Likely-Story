// HELPER FUNCTIONS

// Sort array alphabetically
export function sortAlpha(a, b){
    if (a.title.toUpperCase()<b.title.toUpperCase()){
      return -1
    }else if (a.title.toUpperCase()>b.title.toUpperCase()){
      return 1
    }else{
      return 0
    }
  }

export function toTitleCase(string){
  return string.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
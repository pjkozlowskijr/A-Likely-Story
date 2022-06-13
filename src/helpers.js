// ##############################################################
// Helper functions
// ##############################################################

// Sort books alphabetically by title
export function sortTitleAlpha(a, b){
    if (a.title.toUpperCase()<b.title.toUpperCase()){
      return -1
    }else if (a.title.toUpperCase()>b.title.toUpperCase()){
      return 1
    }else{
      return 0
    }
  }

// Sort books reverse alpha by title
export function sortTitleReverseAlpha(a, b){
    if (a.title.toUpperCase()>b.title.toUpperCase()){
      return -1
    }else if (a.title.toUpperCase()<b.title.toUpperCase()){
      return 1
    }else{
      return 0
    }
  }

// Sort array alphabetically
export function sortAlpha(a, b){
  if (a.toUpperCase()<b.toUpperCase()){
    return -1
  }else if (a.toUpperCase()>b.toUpperCase()){
    return 1
  }else{
    return 0
  }
}

// Convert string to title case
export function toTitleCase(string){
  return string.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
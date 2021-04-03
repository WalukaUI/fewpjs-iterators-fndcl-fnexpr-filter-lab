// Code your solution here


function findMatching(dri,str){
    return dri.filter(function(match){
        return match.toLowerCase() === str.toLowerCase()
    })
}

function fuzzyMatch(dri,str){
    return dri.filter(function(match){

        return match.toLowerCase().indexOf(str.toLowerCase()) === 0
    })
}


function matchName(dri,str){
    return dri.filter(function(match){

        return (match.name === str)
    })
}
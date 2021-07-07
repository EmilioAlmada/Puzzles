// PUZZLE CHALENGES AND INTERVIEW QUESTIONS

// IS ANAGRAM FUNCTION:
// The idea of this puzzle is to make a function that accept to strings as parameters 
// and return true or false depending if the second string is an Anagram of the first 

/*(1)*/
const isAnagram = (stringA,stringB) =>{
    if(stringA.toLowerCase().split(' ').join('').split('').sort().join('') === stringB.toLowerCase().split(' ').join('').split('').sort().join('')){
        return true
    }else{
        return false
    }
}

/*(1)*/
console.log(isAnagram('La mOnalisa','limala asno')) //Returns true.

// ----------------------------------------------------------------------------------


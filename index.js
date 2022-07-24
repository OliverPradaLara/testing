const Palindrome = (myString) => {
    return myString.split('').reverse().join('') === myString
}
//pa probar un luis paricio

console.log('resultado:',Palindrome("anitalavalatina"))

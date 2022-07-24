const Palindrome = (myString) => {
    return myString.split('').reverse().join('') === myString
}
//pa probar un cambio

console.log('resultado:',Palindrome("anitalavalatina"))

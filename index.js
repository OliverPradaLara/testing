const Palindrome = (myString) => {
    return myString.split('').reverse().join('') === myString
}
//pa probar un poliedro

console.log('resultado:',Palindrome("anitalavalatina"))

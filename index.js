const Palindrome = (myString) => {
    return myString.split('').reverse().join('') === myString
}

console.log('resultado:',Palindrome("anitalavalatina"))
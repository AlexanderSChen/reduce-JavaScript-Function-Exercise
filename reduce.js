/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    return arr.reduce(function(acc, next) {
        acc.push(next[key]);
        return acc;
    }, []);
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    //declare vowels
    const vowels = 'aeiou';
    //turn string into an array so it can be used in reduce function
    let strArr = str.split('');
    // use reduce function passing accumulator and next value as parameters, as well as passing an empty object into the second parameter of reduce to store the returned values in.
    return strArr.reduce(function(acc, next) {
        // lowercase all the letters in the array to equalize all the values in case uppercase letters are passed into the string.
        let lowerCased = next.toLowerCase();
        // create if argument to check if the next value inside the lowercased is not equal to -1, meaning if the value is a vowel then it passes
        if(vowels.indexOf(lowerCased) !== -1) {
            // if the accumulated lowercased value is true, meaning it already exists then it passes, e.g. the accumulated[lowercased] = { a: 1 } and 'a' is passed into the argument then acc[lowerCased] is incremented by 1 becoming { a : 2 }
            if(acc[lowerCased]) {
                acc[lowerCased]++;
                // if the vowel has not been seen before then the object creates it set equal to 1, e.g. no o vowels yet so it's created as { o : 1}
            } else {
                acc[lowerCased] = 1;
            }
        }
        // return the accumulated object and continue going through each value of the string array one at a time. 
        return acc;
    }, {});
    // At the end an object is created counting all the vowels in the string in the order of the first vowel seen.
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(acc, next, idx) {
        // takes element of array, first one which is the object {name: 'Elie'}[0]['title'] and sets the value equal to 'professor' which becomes {title: 'instructor', name: 'Elie'}
        acc[idx][key] = value;
        // adds the object entry into a new array and runs again adding the new value into the new key
        return acc;
    }, arr);
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    return arr.reduce(function(acc, next) {
        // if the callback function of the next value returns true, then it is pushed onto the first array.
        if(callback(next)) {
            acc[0].push(next);
            // if the callback returns false the next value is pushed into the second array.
        } else {
            acc[1].push(next);
        }
        // return result on the accumulator and move on to the next value of the array.
        return acc;
        // acc[0] and acc[1] arrays can be accessed within the reduce function.
    }, [[], []]);
}

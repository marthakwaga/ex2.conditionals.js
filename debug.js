

function cleanDatabase(recordIds) {
    // Requirement: Remove all odd numbers from the array
    for (let i = 0; i < recordIds.length; i++) {

        //TASK 1:  The "drift" was realised at line 5 and specifically in the FOR LOOP argument. 

        if (recordIds[i] % 2 !== 0) {
            recordIds.splice(i, 1); 
            i-- //using this decrement operator following hints from the VS code debugger, I was able to fic this code.
        }
    }
    return recordIds;
}
// Test Case
const data = [1, 3, 4, 6, 7, 9, 10]; 

const cleaned = cleanDatabase(data);

console.log("Final Array:", cleaned);


//TASK 2: 
//1. It was caught at the declaration of the initialisation (let i = 0) in the for loop.

//2. i. When moving forward all remaining items shift one position to the left and will skip the first item. With the splice method taking off the top item we risk missing out important information. 

//  ii. When items are spliced off, they move items to the left and this change in positon causes items to be skipped. This makes the pointer blind.

//3. The fix

//(i) I resorted to modifying the loop by using a reverse loop instead of a forward loop. This worked because the reverse loop starts from the last item and moves backwards. 

//(ii)  The method has been changed to .filter to select items from an array instead of eliminating which the .splice does. With this even the condition changes and uses a strict equality so that only numbers that meet the condition will appear in the final array.

//PS. The first function 







//THIS IS THE FIXED CODE WITH THE REVERSED LOOP
function cleanDatabase2(recordIds) {
    for (let i = recordIds.length - 1; i >= 0; i--) {
        if (recordIds[i] % 2 !== 0) {
            recordIds.splice(i, 1);
        }
    }
    return recordIds;
}
const data1 = [1, 3, 4, 6, 7, 9, 10]; //even if I add 2 here it doesn't recognise it because the reminder of 2/2=0. 
const cleaned2 = cleanDatabase2(data);

console.log("Final Array:", cleaned2);



//AN EVEN CLEANER VERSION WITH A CHANGED METHOD
function cleanDatabase1(recordIds) {
    return recordIds.filter(num => num % 2 === 0);
}

const data2 = [1, 3, 4, 6, 7, 9, 10]; //even if I add 2 here it doesn't recognise it because the reminder of 2/2=0. 
const cleaned1 = cleanDatabase1(data);

console.log("Final Array:", cleaned1);
console.log("Original Array", data2)
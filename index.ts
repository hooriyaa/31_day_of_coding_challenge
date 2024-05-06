// QUESTION 91:
let favoriteFruits:string[]=["Mango","Apple","Grapes"];
favoriteFruits.push("Banana");

console.log(favoriteFruits);


// QUESTION 92:
function removedElement(arr:string[]){
    return arr.pop();
}
let FruitsArr:string[]=["Apple","cherry","Grapes","Mango"]
console.log(removedElement(FruitsArr));



// QUESTION 93:
function replaceElement(fruits1:string[]){
    const index = fruits1.indexOf("Banana");
    if (index == 1)
        fruits1[index] = "Mango";  // replaces "Banana" with "Mango" if found
    }
    
    const fruits1: string[] = ["Apple", "Banana", "Cherry","Grapes"];
    replaceElement(fruits1);
    console.log(fruits1);



    





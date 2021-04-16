// Create an array with 4 trees listed 
// { = objects [ = arrays


// document.addEventListener("DOMContentLoaded", function (event) {
    
// });

const trees = ['Oak', 'Pine', 'Aspen', 'Bald Cypress']

const errorElement = document.querySelector('#error')

const displayResults = document.querySelector('#displayResults')

// Display the list of trees inside the displayResults div
// => is an arrow function

const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    });
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`
}

listTrees()

//don't use var anymore, mainly use const or let
// instad of using funtion() use () => it is more modern
// ctrl + / comments out whatever you have highlighted

// Not modern way to add redwood

// var addTreeStart = function() {
//     tree.push('redwood');
//     listTrees();
// };
// var redwood = document.getElementById('add_redwood');
// redwood.onclick = addTreeStart;



// console.log(document.getElementById('add_redwood'));

document.querySelector('#add_redwood').onclick = function() {
    trees.push("Redwood")
    listTrees()
}

// Add a pear to the start

document.querySelector('#add_pear').onclick = () => {
   trees.unshift("Pear")
   listTrees()
}

// Remove the first tree
// If tree length does not equal 0, then error

document.querySelector('#remove_tree1').onclick = () => {
   if (trees.length > 0) {
       trees.shift()
       listTrees()
   } else {
       errorElement.textContent = 'Error, cannot remove the first tree because there are no trees.'
   }
}

// Remove the second tree

document.querySelector('#remove_tree2').onclick = () => {
   if (trees.length > 1) {
       trees.splice(1, 1) 
       listTrees()
   } else {
       errorElement.textContent = 'Error, cannot remove the second tree because there are not two trees.'
   }
}

// Remove the last tree

document.querySelector('#remove_treeLast').onclick = () => {
   if (trees.length > 0) {
       trees.pop() 
       listTrees()
   } else {
       errorElement.textContent = 'Error, cannot remove the last tree because there are is no tree.'
   }
}

// Sort the trees A-Z

document.querySelector('#sortTrees').onclick = () => {
   if (trees.length > 1) {
       trees.sort() 
       listTrees()
   } else {
       errorElement.textContent = 'Error, there are no trees to sort.'
   }
}

// Make all the trees lower case

document.querySelector('#lowerTrees').onclick = () => {
   if (trees.length > 1) {
       displayResults.classList.add('lowercase');
   } else {
       errorElement.textContent = 'Error, there are no trees to make lowercase.'
   }
}

// Get the name of number 3 tree

document.getElementById('showName3').onclick = () => {
   if (trees.length > 2) {
       let thirdItem = trees[2]
    //    displayResults.innerHTML.split(' <br>')[2];
        displayResults.innerHTML = thirdItem;
   } else {
       errorElement.textContent = 'Error, there is no third tree.'
   }
}

// Get the name of number 4 tree

document.getElementById('showName4').onclick = () => {
    if (trees.length > 3) {
        let forthItem = trees[3]
        // .innerHTML.split(' <br>')[3];
         displayResults.innerHTML = forthItem;
    } else {
        errorElement.textContent = 'Error, there is no fourth tree.'
    }
 }

//document.getElementsByTagName('button').addEventListener('click', function () {
//    document.getElementsByTagName('button')[0].innerHTML = "IT SHOULD CHANGE NOW"
//});


// document.getElementById('showName4').onclick = function () {
//    document.getElementById('showName4').innerHTML = "DID IT CHANGE?"
//    if (trees.length > 0) {
//        let tree4 = trees[3];
//        displayResults.innerHTML = `${tree4}`
//        this.innerHTML = "TESTING !! ";
             
//         expand the middle one
          
//    } else {
//        errorElement.textContent = 'Error, cannot remove the last tree because there are is no tree.'
//    }
// }
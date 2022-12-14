/* Deliverable # 1: .querySelector()
 * Step 1 - Declare a variable called "petList".
 * Step 2 - Use .querySelector() to search for the element with the id of 'pet-list' and assign it as the value of the "petList" variable.
 */

/*
 * Your code goes here
 */
let petList;
const element = document.getElementById('ul');


/* Deliverable # 2: .createElement()
 * Step 1 - Declare a variable called "newPet".
 * Step 2 - Use .createElement() to create a new li element and assign it as the value of the "newPet" variable.
 */

/*
 * Your code goes here
 */

// Deliverable # 3: .textContent - Change the textContent of "newPet" to any pet of your choosing (for example: "Guinea Pig")

/*
 * Your code goes here
 */

// Deliverable # 4: .appendChild() - Use .appendChild() to append "newPet" (the new li element you created) to "petList" (the ol containing all of the pets).

/*
 * Your code goes here
 */

/* Deliverable # 5: .querySelectorAll()
 * Step 1 - Declare a variable called "divs".
 * Step 2 - Use .querySelectorAll() to search for all div elements and assign it as the value of the "divs" variable.
 */

/*
 * Your code goes here
 */

/* Deliverable # 6: .forEach()
 * Step 1 - Use .forEach() to iterate through each of the div elements contained inside of the "divs" variable.
 * Step 2 - The argument of the .forEach() method should be a callback function that has one argument of its own representing each "div". Name this argument "div".
 * Step 3 - Inside of the function body of the callback function, declare a variable called "copyrightElement".
 * Step 4 - Use .createElement() to create a new h2 element and assign it as the value of the "copyrightElement" variable.
 * Step 5 - On the next line, inside of the function body of the callback function, change the textContent of "copyrightElement" to "© 2022 YOUR-NAME" where you should replace YOUR-NAME with your name.
 * Step 6 - On the next line, inside of the function body of the callback function, use .appendChild() to append "copyrightElement" (the new h2 element you created) to "div" (the argument of the callback function representing each div element contained within the "divs" variable).
 */

/*
 * Your code goes here
 */

/* Deliverable # 7: .getElementById()
 * Step 1 - Declare a variable called "notAShop".
 * Step 2 - Use .getElementById() to search for the element with the id of 'not-a-shop' and assign it as the value of the "notAShop" variable.
 */

/*
 * Your code goes here
 */

/* Deliverable # 8: .remove()
 * Step 1 - Use .remove() to remove the element with the id of 'not-a-shop' from the DOM. You already have a variable named "notAShop" that references this element.
 */

/*
 * Your code goes here
 */

/* Deliverable # 9: .getElementsByClassName()
 * Step 1 - Declare a variable called "shops".
 * Step 2 - Use .getElementsByClassName() to search for all elements with the class of "shop" and assign it as the value of the "shops" variable.
 */

/*
 * Your code goes here
 */

/* Deliverable # 10: while loop
 * Step 1 - Declare a variable called "counter" using let and initialize "counter" with a value of 0.
 * Step 2 - Create a while loop. While the value of "counter" is less than the length of "shops", continue execution of the while loop.
 * Step 3 - Inside of the while loop, write the code to create a button element and store it in a variable named "button".
 * Step 4 - Change the textContent of the button to display the text "Like This Shop"
 * Step 5 - Let the value of "counter" represent the current index of "shops" ("shops" contains an HTMLCollection that we can iterate through using a while loop).
 *          For example, if "counter" is 0, then shops[counter] is equivalent to shops[0]. Use appendChild() to append the button to each of the shops.
 * Step 6 - Don't forget to increment the value of the "counter" on the last line inside of the while loop!
 */

/*
 * Your code goes here
 */

// Bonus Deliverable: Finish creating the Candy Shop! There is already a div with the id of "candy-shop" currently set up for you.

/*
 * Your code goes here
 */
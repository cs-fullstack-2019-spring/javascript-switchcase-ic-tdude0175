//Put the start of your program in a main function.
// Ask the user to enter a number from 1 through 4.
// Print the corresponding Month that matches each number.
// (Hint: 1 is January).


/*
used a switch case to build it
assign a number for the month
only 4 months are wanted

default isn't necessary
recording break in default is recommended
not necessary in javascript
 */
main();

function main()
{

    switch(parseInt(prompt("enter a number for the coressponding month.")))
    {
        case 1:
            console.log("January");
            break;

        case 2:
            console.log("February");
            break;


        case 3:
            console.log("March");
            break;

        case 4:
            console.log("April");
            break;

        default:
            console.log("that number is to much.");
            break;

    }

}
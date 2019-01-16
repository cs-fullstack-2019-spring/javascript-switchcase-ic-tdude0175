/*
Put the start of your program in a main function.
Ask the user what size shirt they want to order (you decide the shirt sizes).
Once they select the size of shirt add their selection to an array.

Challenge:
Using problem 3,
after the user selects a shirt size ask them if they want to add another shirt to the cart.
If they say yes, add another shirt to the array,
if they say no exit the function,
if they enter something else say ERROR and let them pick yes/no again.
 */

main3();

function main3()
{
    var ShirtList = [];
    let readytoleave = "no";
        while( readytoleave !== "yes")
        {

            switch (element = (prompt("what shirt size do you what?")))
            {

                case "small":
                    ShirtList.push(element);
                    console.log("we have some in stock.");
                    break;
                case "medium":
                    ShirtList.push(element);
                    console.log("we have plenty");
                    break;
                case "large":
                    ShirtList.push(element);
                    console.log("we have enough in stock.");
                    break;
                case "extra large":
                    ShirtList.push(element);
                    console.log("we don't have any at this store.");
                    break;
                case "pants":
                    console.log("we don't sell pants");
                    break;
                case "extra extra large":
                    ShirtList.push(element);
                    console.log("we have one left.");
                    break;


            }
                readytoleave = prompt("are you ready to leave?");
                



        }

console.log(ShirtList);

}



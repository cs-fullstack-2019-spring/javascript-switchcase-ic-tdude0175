/*
Put the start of your program in a main function.
Ask the user to enter a day of the week.
Print the corresponding Spanish word.
If they do not input a day of the week say
"That is not a day of the week in English."

lunes. Monday.
martes. Tuesday.
miércoles. Wednesday.
jueves. Thursday.
viernes. Friday.
sábado. Saturday.
domingo. Sunday
 */

/*
no hablo englas senior
hablo espanol muy bueno
ich spriche deutch ser sleche
really just doing the same thing as problem one
copy pasting from the README makes it a bit easier
ctrl+D for case: console.log(); break; also makes it faster
 */


main1();


function main1()
{
 switch (prompt("please enter a day of the week for the translation."))

 {
     case "Monday" :
         console.log("lunes");
         break;
     case "Tuesday" :
         console.log("martes");
         break;
     case "Wednesday" :
         console.log("miércoles");
         break;
     case "Thursday" :
         console.log("jueves");
         break;
     case "Friday" :
         console.log("viernes");
         break;
     case "Saturday" :
         console.log("sábado");
         break;
     case "Sunday" :
         console.log("domingo");
         break;
     default:
         console.log("That is not an english day of the week.");
         break;
 }
}
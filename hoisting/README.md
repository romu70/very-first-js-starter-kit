# Hoisting

Hoisting describes how the Js virtual machine parse the Js code and this can lead to weird results.

Keep in mind the Js VM runs this simple sequence:
* Parse the code for variables, objects and functions declarations 
* Run the code

This example shows hoisting can lead to bugs probably difficult to find.

BEST PRACTISE: do NOT "play" with hoisting, keep things lain and simple.
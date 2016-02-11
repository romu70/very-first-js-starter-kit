# Object creation

In Js, there are basically 3 ways to create objects:
- Object literal notation (something close to Json)
- Constructor function
- The new ES6 "class" keyword.

I read a lot about objects in Js and came to the conclusion that the best way to create Js objects is to use the literal notation and write factory functions. This is simple, plain Js, prevent having to use "new". A lot of those principles are taken from @ericelliott writings. Hope to do things well enough.

Once we've chosen the literal notation, there are 2 ways to create objects with a factory function:
- using Object.create
- using Object.assign which will also use Object.create
 
Both ways offer encapsulation and allow objects customisation.

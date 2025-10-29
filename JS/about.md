# What is JS :
- Scripting language
- No 1 language
- Easy language


# JS has two types :
- DOM -> Document Object Model
- BOM -> Browser Object Model

# File extension -> .js(ScriptingFile) and for dom -> .html

# How to print in Js :
- console.log(statement/argument);

# It use to manage and store data virtually

# Variables 
-> Virtual container
-> Rules :
-- you can't use same name for two variabe
-- you can't use special character ex(_) in naming
-- First letter should be lowerCharacter only
EX : fristName, First_Name, name1, name2, name3..

1) var
    Global | Old version | Temp
     var variableName = value;

2) let
    Local | New Version(ES6-2015) | Temp
     let variableName = value;

3) const
    Local | New Version | Perm
     const VariableName = value;

# Data Types :
    1) Number =  int, float, complex, double
    2) String = '', "", ``
    3) Boolean = True, False
    4) Undefined = undefined
    5) Null = null
    6) Object = It store multiple + multitype of data
             6.1) List/Array : []
             6.2) Dictionary : {key:value}

# typeof(argument) - It return the data type of object/argument

# Operators 
        1) Arithmatic : + - * / ** //
        2) Assignment : = += -= *= /= **=
        3) Comparision : > <  <= >= == === != !==
        4) Bitwise : & | - Binary - more speed
        5) Logical : and or - String - less speed
        6) String : +
        7) Type : typeof()

# Conditions
    - It control your statement/code/argument
    - if(conditions){code}
      else if(conditions) { code }
      ...
      else{default code}

    - Switch(object) {
        case
    }

# Flow - Loop
    - While
    - For

# Break - it stop process
# continue - it ignore/skip current process

# Functions :
     1) Normal function
     2) Arrow Fucntion
     3) Call back - it run with their parent 

# Function of String:
  string.function('arguments')
    String length
    String slice()
    String replace()
    String replaceAll()
    String toUpperCase()
    String toLowerCase()
    String concat()
    String trim()
    String trimStart()
    String trimEnd()
    String padStart()
    String padEnd()
    String charAt()
    String charCodeAt()
    String split()

>> Function of array : 
    concat()	Joins arrays and returns an array with the joined arrays
    constructor	Returns the function that created the Array object's prototype
    copyWithin()	Copies array elements within the array, to and from specified positions
    entries()	Returns a key/value pair Array Iteration Object
    every()	Checks if every element in an array pass a test
    fill()	Fill the elements in an array with a static value
    filter()	Creates a new array with every element in an array that pass a test
    find()	Returns the value of the first element in an array that pass a test
    findIndex()	Returns the index of the first element in an array that pass a test
    forEach()	Calls a function for each array element
    from()	    Creates an array from an object
    includes()	Check if an array contains the specified element
    indexOf()	Search the array for an element and returns its position
    isArray()	Checks whether an object is an array
    join()	    Joins all elements of an array into a string
    keys()	    Returns a Array Iteration Object, containing the keys of the original array
    lastIndexOf()	Search the array for an element, starting at the end, and returns its position
    length	Sets or returns the number of elements in an array
    map()	Creates a new array with the reasult of calling a function for each array element
    pop()	Removes the last element of an array, and returns that element
    prototype	Allows you to add properties and methods to an Array object
    push()	Adds new elements to the end of an array, and returns the new length
    reduce()	Reduce the values of an array to a single value (going left-to-right)
    reduceRight()	Reduce the values of an array to a single value (going right-to-left)
    reverse()	Reverses the order of the elements in an array
    shift()	Removes the first element of an array, and returns that element
    slice()	Selects a part of an array, and returns the new array
    some()	Checks if any of the elements in an array pass a test
    sort()	Sorts the elements of an array
    splice()	Adds/Removes elements from an array
    toString()	Converts an array to a string, and returns the result
    unshift()	Adds new elements to the beginning of an array, and returns the new length
    valueOf()	Returns the primitive value of an array

>> Date Methods : 
    new Date()
        new Date(date string)
        new Date(year,month)
        new Date(year,month,day)
        new Date(year,month,day,hours)
        new Date(year,month,day,hours,minutes)
        new Date(year,month,day,hours,minutes,seconds)
        new Date(year,month,day,hours,minutes,seconds,ms)
        new Date(milliseconds)

>> Math :
        floor(x)	Returns x, rounded downwards to the nearest integer
        max(x, y, z, ..., n)	Returns the number with the highest value
        min(x, y, z, ..., n)	Returns the number with the lowest value
        pow(x, y)	Returns the value of x to the power of y
        random()	Returns a random number between 0 and 1
        round(x)	Rounds x to the nearest integer

    abs(x)	Returns the absolute value of x 
    acos(x)	Returns the arccosine of x, in radians
    acosh(x)	Returns the hyperbolic arccosine of x
    asin(x)	Returns the arcsine of x, in radians
    asinh(x)	Returns the hyperbolic arcsine of x
    atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
    atan2(y, x)	Returns the arctangent of the quotient of its arguments
    atanh(x)	Returns the hyperbolic arctangent of x
    cbrt(x)	Returns the cubic root of x
    ceil(x)	Returns x, rounded upwards to the nearest integer
    cos(x)	Returns the cosine of x (x is in radians)
    cosh(x)	Returns the hyperbolic cosine of x
    exp(x)	Returns the value of Ex
    log(x)	Returns the natural logarithm (base E) of x
    sign(x)	Returns if x is negative, null or positive (-1, 0, 1)
    sin(x)	Returns the sine of x (x is in radians)
    sinh(x)	Returns the hyperbolic sine of x
    sqrt(x)	Returns the square root of x
    tan(x)	Returns the tangent of an angle
    tanh(x)	Returns the hyperbolic tangent of a number
    trunc(x) Returns the integer part of a number (x)

# Other Function 
    - map() - it run like loop but it's for array only
    - ? - ternary 


# DOM (Document Object Model)
    - To print in html using js - document.write(argument);

****
****
****
****

*   *
*   *
*   *
*   *   

*_*_*
*_*_*
*_*_*
*_*_*

*****
*****
*___*
*___*
*****

*___*
*___*
*____
*___*
*___*

*___*
*_*_*
*___*
*_*_*
*___*

# To print on specific location
    - document.getElementById(idname)
        .html - innerHTML
        .text - innerText
        .style - style - using js properties

# Popups 
    - alert         - warning
    - confirm       - confirmation
    - prompt        - to get value from user

# Console
    log
    error
    warning
    clear
    table

# Pattern 
 
*****
*   *
*****
*   *
*   *

*****
*
*
*
*****

*****
*   *
*   *
*  **
*****
     *

*   *
 * *
  *
  *
  *

    *
   ***
  *****
   ***
    *

    *
  *   *
*       *
*       *
  *   *
    *

# Form Validation :

# Onclick 
# mouse

# History API

# Fetch API 
- Get data from backend or third party server

# Time Out

# Session Storage
- It store your data so you can easily log into your account
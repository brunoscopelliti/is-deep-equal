


/*
 * @name type
 * @function
 * @private
 * @description Return the type of the input value; it fix the problem with "null", and brings consistence.
 */
const type = subject => Object.prototype.toString.call(subject).toLowerCase();




/*
 * @name deepEqual
 * @public
 * @type function
 * @description Check if the input values provided are deep equals; in this case returns true, otherwise false.
 *
 * @example deepEqual({ foo: bar }, { foo: bar, baz: kun }); // false
 */
export default function deepEqual(valA, valB){

  // 1)
  // if the input values have the same primitive value,
  // or are the same reference,
  // then they are deep equals.
  if (valA === valB){
    return true;
  }

  // 2)
  // if the input values have different type, or they are primitives
  // in force of the check (1) here we can return "false"
  if (type(valA) != type(valB) || typeof valA != 'object'){
    return false;
  }


  return true;

}

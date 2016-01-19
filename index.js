
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

}

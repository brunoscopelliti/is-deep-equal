
/**
 *
 * @name is-deep-equal.js
 * @version 1.0.2
 *
 * @description Check if the input values provided are deep equals; in this case returns true, otherwise false.
 *
 * @param {Object} valA
 * @param {Object} valB
 *
 * @example
 *
 * deepEqual({ foo: bar }, { foo: bar, baz: kun }); // false
 *
 */
export default function deepEqual(valA, valB){

  // if the input values have the same primitive value,
  // or are the same reference,
  // then they are deep equals.
  if (valA === valB){
    return true;
  }

  // if the input values have different type, or they are primitives
  // in force of the previouse check, here we can return "false"
  if (type(valA) != type(valB) || typeof valA != 'object'){
    return false;
  }


  // if the execution arrives here we can be sure
  // that the two values have the same type

  const propsEqual = () => getOwnPropNames(valA).concat(getOwnPropSymbols(valA)).every(prop => deepEqual(valA[prop], valB[prop]));


  if (Array.isArray(valA)){

    // when they are both arrays
    // in order to be considered deep equals
    // they should have the same length, and the same element
    if (valA.length != valB.length || !propsEqual()){
      return false;
    }

  }
  else {

    // in case they are object,
    // their own properties (key, and symbol) should be deep equals, and also their inherithed properties should be deep equals.
    if (!deepEqual(getOwnPropNames(valA).sort(), getOwnPropNames(valB).sort()) ||
      !deepEqual(getOwnPropSymbols(valA).sort(), getOwnPropSymbols(valB).sort()) || !propsEqual() || !deepEqual(getPrototypeOf(valA), getPrototypeOf(valB))){
        return false;
    }

  }


  return true;

}



/**
 * @name type
 * @function
 * @private
 * @description Return the type of the input value; it fix the problem with "null", and brings consistence (array, date ...).
 */
const type = subject => Object.prototype.toString.call(subject).toLowerCase().match(/ ([\w]+)/)[1];


/**
 * @name getOwnPropNames
 * @function
 * @private
 * @description Return the own properties of the input parameter.
 */
const getOwnPropNames = obj => Object.getOwnPropertyNames.call(null, obj);


/**
 * @name getOwnPropSymbols
 * @function
 * @private
 * @description Return the own symbols of the input parameter.
 */
const getOwnPropSymbols = obj => Object.getOwnPropertySymbols.call(null, obj);


/**
 * @name getPrototypeOf
 * @function
 * @private
 * @description Return the prototype object of the input parameter.
 */
const getPrototypeOf = obj => Object.getPrototypeOf.call(null, obj);

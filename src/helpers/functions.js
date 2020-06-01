export const setter = set => e => {
  const { target: value } = e;
  // const { value } = target;
  set(value);
};

export const isFunction = f => f && typeof f === 'function';

// export default function createEnum(obj) {
//   return Object.freeze(obj)
// }

const isObject = obj => obj && typeof obj === 'object';
const getPropNames = obj => Object.getOwnPropertyNames(obj);
const getObjectPropObjects = obj =>
  getPropNames(obj).filter(name => isObject(obj[name]));

/**
 * Helper function that recusively freezes passed in object.
 * @param {object} obj Object to recursively freeze.
 * @returns {object} Frozen object.
 */
export function createEnum(obj) {
  if (!obj || typeof obj !== 'object') {
    throw Error(`createEnum must only be passed objects: ${obj}`);
  }

  getObjectPropObjects(obj).forEach(prop => createEnum(obj[prop]));

  // const propNames = getPropNames(obj)
  // getPropNames(obj).forEach(name => {
  //   const value = obj[name]
  //   if (isObject(value)) createEnum(value)
  // })

  return Object.freeze(obj);
}

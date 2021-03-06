/* eslint-disable no-nested-ternary */
import { useState, useEffect, useRef } from 'react';

import useEventListener from './useEventListener';
import { createEnum, isFunction } from '../helpers';

export const createStorage = provider => {
  return createEnum({
    get(key, defaultValue) {
      const json = provider.getItem(key);
      const def = isFunction(defaultValue) ? defaultValue() : defaultValue;
      return json === null ? def : JSON.parse(json);
    },
    set(key, value) {
      provider.setItem(key, JSON.stringify(value));
    },
  });
};

const globalCache = new Map();

export function createGlobalState(key, thisCallback, initialValue) {
  if (!globalCache.has(key)) {
    globalCache.set(key, { callbacks: [], value: initialValue });
  }

  globalCache.get(key).callbacks.push(thisCallback);

  return createEnum({
    deregister() {
      const arr = globalCache.get(key).callbacks;
      const index = arr.indexOf(thisCallback);
      if (index > -1) {
        arr.splice(index, 1);
      }
    },
    emit(value) {
      if (globalCache.get(key).value !== value) {
        globalCache.get(key).value = value;

        globalCache.get(key).callbacks.forEach(cb => {
          if (thisCallback !== cb) cb(value);
        });
      }
    },
  });
}

// const globalState = {};
// export function createGlobalState(key, thisCallback, initialValue) {
//   if (!globalState[key]) {
//     globalState[key] = { callbacks: [], value: initialValue };
//   }

//   globalState[key].callbacks.push(thisCallback);

//   return {
//     deregister() {
//       const arr = globalState[key].callbacks;
//       const index = arr.indexOf(thisCallback);
//       if (index > -1) {
//         arr.splice(index, 1);
//       }
//     },
//     emit(value) {
//       if (globalState[key].value !== value) {
//         globalState[key].value = value;

//         globalState[key].callbacks.forEach(cb => {
//           if (thisCallback !== cb) {
//             cb(value);
//           }
//         });
//       }
//     },
//   };
// }

export function usePersistedState(initialState, key, { get, set }) {
  const globalState = useRef(null);
  const [state, setState] = useState(() => get(key, initialState));

  const handleStorage = ({ key: k, newValue }) => {
    if (k === key) {
      const newState = JSON.parse(newValue);
      if (state !== newState) {
        setState(newState);
      }
    }
  };

  useEventListener('storage', handleStorage);

  useEffect(() => {
    globalState.current = createGlobalState(key, setState, initialState);

    return () => {
      globalState.current.deregister();
    };
  }, [initialState, key]);

  useEffect(() => {
    set(key, state);
    globalState.current.emit(state);
  }, [state, key, set]);

  return [state, setState];
}

export function createPersistedState(key, provider = global.localStorage) {
  if (provider) {
    const storage = createStorage(provider);
    return initialState => usePersistedState(initialState, key, storage);
  }

  return useState;
}

export default usePersistedState;

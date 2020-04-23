import { useState, useEffect, useCallback, useMemo } from 'react';

import { createPersistedState } from './usePersistedState';
import useEventListener from './useEventListener';

const noop = () => {};

const mockElement = {
  classList: {
    add: noop,
    remove: noop,
  },
};

const preferDarkQuery = '(prefers-color-scheme: dark)';

export function initialize(storageKey, storageProvider, glbl = global) {
  const usePersistedDarkModeState = storageKey
    ? createPersistedState(storageKey, storageProvider)
    : useState;

  const mql = glbl.matchMedia ? glbl.matchMedia(preferDarkQuery) : {};

  const mediaQueryEventTarget = {
    addEventListener: (_, handler) =>
      mql.addListener && mql.addListener(handler),
    removeEventListener: (_, handler) =>
      mql.removeListener && mql.removeListener(handler),
  };

  const isColorSchemeQuerySupported = mql.media === preferDarkQuery;

  const getInitialValue = usersInitialState =>
    isColorSchemeQuerySupported ? mql.matches : usersInitialState;

  // Mock element if SSR else real body element.
  const defaultElement = (glbl.document && glbl.document.body) || mockElement;

  const getDefaultOnChange = (
    element = defaultElement,
    classNameDark = 'dark-mode',
    classNameLight = 'light-mode'
  ) => val => {
    element.classList.add(val ? classNameDark : classNameLight);
    element.classList.remove(val ? classNameLight : classNameDark);
  };

  return {
    usePersistedDarkModeState,
    getDefaultOnChange,
    mediaQueryEventTarget,
    getInitialValue,
  };
}

export function useDarkMode(
  initialValue = false,
  {
    element,
    classNameDark,
    classNameLight,
    onChange,
    storageKey = 'darkMode',
    storageProvider,
    global,
  } = {}
) {
  const {
    usePersistedDarkModeState,
    getDefaultOnChange,
    getInitialValue,
    mediaQueryEventTarget,
  } = useMemo(() => initialize(storageKey, storageProvider, global), [
    storageKey,
    storageProvider,
    global,
  ]);

  const [state, setState] = usePersistedDarkModeState(
    getInitialValue(initialValue)
  );

  const stateChangeCallback = useMemo(
    () =>
      onChange || getDefaultOnChange(element, classNameDark, classNameLight),
    [onChange, element, classNameDark, classNameLight, getDefaultOnChange]
  );

  // Call the onChange handler
  useEffect(() => {
    stateChangeCallback(state);
  }, [stateChangeCallback, state]);

  // Listen for media changes and set state.
  useEventListener(
    'change',
    ({ matches }) => setState(matches),
    mediaQueryEventTarget
  );

  return {
    value: state,
    enable: useCallback(() => setState(true), [setState]),
    disable: useCallback(() => setState(false), [setState]),
    toggle: useCallback(() => setState(current => !current), [setState]),
  };
}

export default useDarkMode;

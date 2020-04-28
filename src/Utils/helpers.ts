import {
  isEmpty,
  isNil,
  anyPass,
  addIndex,
  map,
  keys,
  forEach,
  curry,
  assoc,
  reduce,
  any,
  values,
  omit,
  pipe,
  ascend,
  prop,
  descend,
  sort,
  range,
} from 'ramda';
import {Dimensions} from 'react-native';
import {useRef, useEffect, useState} from 'react';

// returns true if the param is empty or nil
export const isEmptyOrNil = anyPass([isEmpty, isNil]);
export const mapIndexed = addIndex(map);

export const createFormData = (data: object) => {
  const formData = new FormData();
  const formKeys = keys(data);

  forEach((key) => {
    formData.append(key, data[key]);
  }, formKeys);

  return formData;
};

export const renameKeysInObject = curry((keysMap, obj) =>
  reduce(
    (acc, key) => assoc(keysMap[key] || key, obj[key], acc),
    {},
    keys(obj),
  ),
);

export const isAnyPropertyEmptyInObject = (
  obj: object,
  omittedKeys: Array<string> = [],
) => {
  return pipe(omit(omittedKeys), values, any(isEmptyOrNil))(obj);
};

export const sortListByKey = curry((sortOrder, key, list) => {
  const sortingFunction =
    sortOrder === 'asc' ? ascend(prop(key)) : descend(prop(key));
  //@ts-ignore
  const sortedList = sort(sortingFunction, list);
  return sortedList;
});

/**
 *  uuid generator
 *
 * @returns
 */
export function generateUUID() {
  const oldStr = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

  return `${Date.now()}-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Hook
export const usePreviousHook = (value: any) => {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
};

// Hook
const isOrientationPortrait = () => {
  const {height, width} = Dimensions.get('screen');
  return width < height;
};

export const useIsDeviceOrientationPortrait = () => {
  const [isPortrait, setIsPortrait] = useState(isOrientationPortrait());

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setIsPortrait(isOrientationPortrait());
    });
  }, []);

  return isPortrait;
};

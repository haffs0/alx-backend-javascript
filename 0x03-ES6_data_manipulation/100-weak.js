export const weakMap = new WeakMap();

export const queryAPI = (api) => {
  if (weakMap.get(api) >= 5) {
    throw new Error('Endpoint load is high');
  }
  if (!weakMap.has(api)) {
    weakMap.set(api, 1);
  } else {
    weakMap.set(api, weakMap.get(api) + 1);
  }
  return weakMap.get(api);
};

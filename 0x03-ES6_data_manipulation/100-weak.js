export const weakMap = new WeakMap();

export const queryAPI = (api) => {
  if (!weakMap.has(api)) {
    weakMap.set(api, 0);
  } else {
    weakMap.set(api, weakMap.get(api) + 1);
  }
  if (weakMap.get(api) >= 5) {
    throw new Error('Endpoint load is high');
  }
};

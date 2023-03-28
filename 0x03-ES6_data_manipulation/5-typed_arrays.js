const createInt8TypedArray = (len, position, value) => {
  const buffer = new ArrayBuffer(len);
  const dataView = new DataView(buffer, 0, len);
  try {
    dataView.setInt8(position, value);
  } catch (err) {
    throw new Error('Position outside range');
  }
  return dataView;
};

export default createInt8TypedArray;

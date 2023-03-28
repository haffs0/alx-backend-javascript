const getListStudentIds = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((value, idx) => value.id);
};

export default getListStudentIds;

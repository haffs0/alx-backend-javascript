const getListStudentIds = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((value) => value.id);
};

export default getListStudentIds;

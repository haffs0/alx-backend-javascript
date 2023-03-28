const getListStudentIds = (arr) => {
  if (typeof arr !== 'object') {
    return [];
  }
  return arr.map((value, idx) => value.id);
};

export default getListStudentIds;

const getStudentsIdsSum = (arr) => (arr.reduce((acc, curr) => acc + curr.id, 0));

export default getStudentsIdsSum;

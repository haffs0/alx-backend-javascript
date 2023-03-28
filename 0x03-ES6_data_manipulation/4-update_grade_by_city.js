const updateStudentGradeByCity = (students, city, newGrades) => {
  const filterResults = students.filter((value) => value.location === city);
  const studentWithGrades = filterResults.map((value) => {
    const student = value;
    const filterGrade = newGrades.filter((grade) => grade.studentId === student.id);
    if (filterGrade.length !== 0) {
      student.grade = filterGrade[0].grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });
  return studentWithGrades;
};

export default updateStudentGradeByCity;

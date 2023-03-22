export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees);
  let employeesName = [];
  for (const arr of allEmployees) {
    employeesName = employeesName.concat(arr);
  }
  return employeesName;
}

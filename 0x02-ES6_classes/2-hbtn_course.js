export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }
    if (typeof (length) === 'number') {
      this._length = length;
    } else {
      throw new Error('Length must be a number');
    }
    if (typeof (students) === 'object') {
      this._students = students;
    } else {
      throw new Error('Students must be an array');
    }
  }

  set name(newName) {
    if (typeof (newName) === 'string') {
      this._name = newName;
    } else {
      throw new Error('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(newLength) {
    if (typeof (newLength) === 'number') {
      this._length = newLength;
    } else {
      throw new Error('Length must be a number');
    }
  }

  get length() {
    return this._length;
  }

  set students(newStudents) {
    if (typeof (newStudents) === 'object') {
      this._students = newStudents;
    } else {
      throw new Error('Students must be an array');
    }
  }

  get students() {
    return this._students;
  }
}

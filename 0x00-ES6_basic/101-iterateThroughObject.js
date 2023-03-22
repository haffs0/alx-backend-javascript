export default function iterateThroughObject(reportWithIterator) {
  const len = reportWithIterator.length;
  let count = 1;
  let result = '';
  for (const item of reportWithIterator) {
    if (count < len) {
      result += `${item} | `;
    } else {
      result += item;
    }
    count += 1;
  }
  return result;
}

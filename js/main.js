document.addEventListener('DOMContentLoaded', function () {
  const tbody = document.querySelector('.tbody');

  const tr = document.createElement('tr');
  tr.classList.add('tr');

  const tdArray = [];
  const newTdArray = [];
  const max = 1000;
  const column = 10;
  for (let i = 1; i <= max; i++) {
    const td = document.createElement('td');
    td.textContent = i;
    tdArray.push(td);
    if (tdArray.length % column === 0) {
      const row = tdArray.slice(i - 10, i + column);
      newTdArray.push(row);
    }
  }
  console.log(newTdArray);
});

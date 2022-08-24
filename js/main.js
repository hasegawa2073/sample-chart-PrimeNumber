document.addEventListener('DOMContentLoaded', function () {
  const tbody = document.querySelector('.tbody');

  // 素数のときtrueを返す関数
  const primeJudge = (num) => {
    if (num === 1) {
      return false;
    } else if (num === 2) {
      return true;
    } else {
      for (i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
        if (i + 1 === num) {
          return true;
        }
      }
    }
  };

  const tdArray = [];
  const newTdArray = [];
  const max = 10000;
  const column = 10;
  for (let i = 1; i <= max; i++) {
    const td = document.createElement('td');
    td.textContent = i;
    if (primeJudge(i)) {
      td.classList.add('primeNumber');
    }
    tdArray.push(td);
    // 行単位でtdをnewTdArrayへ
    if (tdArray.length % column === 0) {
      const row = tdArray.slice(i - column, i + column);
      newTdArray.push(row);
    }
  }
  newTdArray.forEach((row) => {
    const tr = document.createElement('tr');
    tr.classList.add('tr');
    for (let i = 0; i < row.length; i++) {
      tr.appendChild(row[i]);
    }
    tbody.appendChild(tr);
  });
});

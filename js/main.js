document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('.table');

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

  const max = 1000;
  let column = 10;

  const deleteChart = () => {
    const tr = document.querySelectorAll('.tr');
    tr.forEach((tr) => {
      tr.remove();
    });
  };

  const createChart = () => {
    const tdArray = [];
    const newTdArray = [];
    const tbody = document.querySelector('.tbody');
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
  };

  createChart();

  const inputColumn = document.querySelector('#column');
  inputColumn.addEventListener('change', function (e) {
    column = e.target.value;
    deleteChart();
    createChart();
  });

  const chartField = document.querySelector('.chart-field');
  const inputRange = document.querySelector('.range');
  inputRange.addEventListener('input', function (e) {
    const scaleRatio = Number(e.target.value);
    chartField.style.transform = `scale(${scaleRatio})`;
    console.log(scaleRatio);
  });
});

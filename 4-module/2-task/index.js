function makeDiagonalRed(table) {
  let rows = table.rows;
  let color = rows[0];

  for (let i = 0; i < rows.length; ++i) {
    let item = rows[i].querySelectorAll('td');
    
    for (let j = 0; j < item.length; ++j) {
      color = item[i];
      color.style.backgroundColor = "red";
    }
  }
}
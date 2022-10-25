
function highlight(table) {
  let row = table.rows;
  let age;
  let gender;
  let status;

  for (let i = 0; i < row[0].cells.length; ++i) {
    if (row[0].cells[i].innerHTML === "Age") {
      age = i;
    }
    if (row[0].cells[i].innerHTML === "Gender") {
      gender = i;
    }
    if (row[0].cells[i].innerHTML === "Status") {
      status = i;
    }
  };

  let Container = {
    m: "male",
    f: "female",
    true: "available",
    false: "unavailable",
  };

  for (let j = 1; j < row.length; ++j) {
    let Gender = row[j].cells[gender];
    Gender.parentElement.classList.add(Container[Gender.innerHTML]);
    
    let Age = row[j].cells[age].innerHTML;
    if (Age < 18) {
      Gender.parentElement.setAttribute("style", "text-decoration: line-through");
    }
    let Status = row[j].cells[status];
    
    if (Status.hasAttribute("data-available")) {
      let value = Status.getAttribute("data-available");
      Status.parentElement.classList.add(Container[value]);

    } else {
      Status.parentElement.hidden = true;
    }
  }
};
function handleOnclick(element) {
    let items = document.querySelectorAll("#navList li");
    items.forEach(item => {
        item.classList.remove("li-color");
    });
    element.classList.add("li-color");
}

let data = [];
let tableBody = document.getElementById("tableBody");
let nameInput = document.getElementById("nameInput");
let lastNameInput = document.getElementById("lastNameInput");
let addBtn = document.getElementById("addBtn");
let deleteBtn = document.getElementById("deleteBtn");

function renderTable() {
  tableBody.innerHTML = "";
  data.forEach((item, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.firstName}</td>
      <td>${item.lastName}</td>
      <td>
        <button class="btn btn-danger btn-sm deleteBtn" data-index="${index}">
          Delete
        </button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  let deleteButtons = document.querySelectorAll(".deleteBtn");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let index = e.target.getAttribute("data-index");
      data.splice(index, 1);
      renderTable();
    });
  });
}

addBtn.addEventListener("click", () => {
  let firstName = nameInput.value.trim();
  let lastName = lastNameInput.value.trim();
  if (firstName && lastName) {
    data.push({ firstName, lastName });
    nameInput.value = "";
    lastNameInput.value = "";
    renderTable();
  }
});

deleteBtn.addEventListener("click", () => {
  data.pop();
  renderTable();
});
const form = document.getElementById("addForm");
const itemInput = document.getElementById("item");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");

//Form submit event
form.addEventListener("submit", addItem);

//Add Item Function
function addItem(e) {
  e.preventDefault();
  if (itemInput.value != "") {
    const newItem = document.createElement("li");
    newItem.className = "list-group-item";
    newItem.innerHTML = `${itemInput.value} <button class="btn btn-danger btn-sm float-right delete">x</button>`;
    itemList.appendChild(newItem);
  }
}

//Remove Item Event
itemList.addEventListener("click", removeItem);
//Remove Item Function
function removeItem(e) {
  if (e.target.parentNode.classList[0] === "list-group-item") {
    e.target.parentNode.remove();
  }
}

//Filter Items Event
filter.addEventListener("keyup", filterItems);
//Filter Item Function
function filterItems(e) {
  const listGroupItems = document.querySelectorAll(".list-group-item");
  // listGroupItems[0].firstChild.data
  for (let i = 0; i < listGroupItems.length; i++) {
    let item = listGroupItems[i];
    let doesThisElement = item.firstChild.data.toLowerCase();
    let inputValue = filter.value.toLowerCase();
    if (doesThisElement.includes(inputValue)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}

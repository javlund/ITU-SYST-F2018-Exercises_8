import { createBike, removeBike, getBikes } from './bikeshed';

function createErrorMessage(message) {
  document.getElementById('fejl');
  fejl.innerHTML = message;
}
  
function createDeleteLink(bike) {
  const deleteLink = document.createElement('a');
  const deleteText = document.createTextNode('X ');
  deleteLink.appendChild(deleteText);
  deleteLink.addEventListener('click', () => {
    removeBike(bike.name);
    updateBikes();
  });
  return deleteLink;
}
 
function createBikeElement(bike) {
  const listItem = document.createElement('li');
  const bikeText = document.createTextNode(bike.name + '  - ' + bike.gears + ' gears');
  listItem.appendChild(createDeleteLink(bike));
  listItem.appendChild(bikeText);
  return listItem;
}
 
function updateBikes() {
  const listContainer = document.getElementById('cykelListe');
  listContainer.innerHTML = '';
  getBikes().forEach(entry => {
    const bikeElement = createBikeElement(entry);
    listContainer.appendChild(bikeElement);
  });
}
 
 
function addBike(event) {
  event.preventDefault();
  const nameField = document.getElementById('navn');
  const gearField = document.getElementById('gear');
  const name = nameField.value;
  const gears = gearField.value;
  const bike = {
    name: name,
    gears: gears
  };
  try {
      createBike(bike);
  } catch(error) {
    createErrorMessage(error.message);
    return;
  }
  updateBikes();
   
  nameField.value = '';
  gearField.value = '1'
  nameField.focus();
}

document.getElementById('bikeform').addEventListener('submit', addBike);
updateBikes();
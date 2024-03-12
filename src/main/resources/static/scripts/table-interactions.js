// wait until the page loads
window.onload = function() {
    // select all edit links
    const editLinks = document.querySelectorAll('.edit');
    for (const link of editLinks) {
        link.onclick = editRecord;
    }

    const deleteLinks = document.querySelectorAll('.delete');
    for (const link of deleteLinks) {
        link.onclick = deleteRecord;
    }
}

function deleteRecord(evt) {
    const deleteLink = evt.target;
    const row = deleteLink.parentElement.parentElement;
    const cells = row.children;

    const id  = cells[0].innerHTML;

    // send the fetch request

    // how to remove the row?
    row.remove();
}

function editRecord(evt) {
    console.log(evt.target);

    // look for the ID we are editing
    const editLink = evt.target;
    const row = editLink.parentElement.parentElement;
    const cells = row.children;

    const id  = cells[0].innerHTML;
    console.log(`Editing id ${id}`);

    const species = cells[2].innerHTML;
    const age = cells[3].innerHTML;
    const location = cells[4].innerHTML;
    console.log(`Editing species ${species}`);

    // replace the text with an input element
    cells[2].innerHTML = `<input type="text" id="species" value="${species}">`;
    cells[3].innerHTML = `<input type="text" id="age" value="${age}">`;
    cells[4].innerHTML = `<input type="text" id="location" value="${location}">`;
    cells[5].innerHTML = `<a href="#" class="save">Save</a>`;
}

showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
  let addTxt = document.getElementById('addTxt');
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem('notes', JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();


})
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);

  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="noteCard my-2 mx-3 card" style="width: 18rem;">
          <div class="card-body bg-dark">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
          </div>
          
        </div>
      
        
      `

  })
  let noteElm = document.getElementById('notes');
  if (notesObj.length != 0) {
    noteElm.innerHTML = html;
  } else {
    noteElm.innerHTML = "no notes";
  }
}
function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice('index', 1);
  localStorage.setItem('notes', JSON.stringify(notesObj));
  showNotes();





}
let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {
  let inputval = search.value.toLowerCase();
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardtxt = element.getElementsByTagName('p')[0].innerText;
    if (cardtxt.includes(inputval)) {
      element.style.display = 'block';
    } else {
      element.style.display = "none";
    }

  })
})
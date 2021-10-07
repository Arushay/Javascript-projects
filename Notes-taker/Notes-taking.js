// console.log('DOM BASIC');
// let a = document;
// a = document.all;
// a = document.images;
// let a = document.links;  this line used for both upper and lower code
// let myText = 'harry';
// Array.from(a).forEach(function (element) {

//     if (String(element).includes(myText)) {

//         console.log(element);

//     }

// });

// smart webpage crawler......
// let mytext = 'code';
// Array.from(a).forEach(function linklist(element) {

//     if (String(element).includes(mytext)) {
//         console.log(element);
//     }

// });


// project 1
console.log('notes taking app in pure js');
showNotes();
// if user adds a note add it to the local storage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {

    let addtxt = document.getElementById('addtxt');
    let addtitle = document.getElementById('addtitle');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addtitle.value,
        text: addtxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addtxt.value = "";
    addtitle.value = "";
    console.log(notesObj);
    showNotes();
})


// function to show notes from localstorage 
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"> ${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-success">Delete note </button>
                </div>
            </div>
        
            `
    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Your agenda is empty.`;
    }
}


// function to delete a note 
function deleteNote(index) {
    console.log('delete', index);


    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchtxt');
search.addEventListener('input', function () {
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputVal)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    })
})






myjson = `{
    "name": "ashi",
    "marks": 80,
    "isEasy": "yes",
    "store": ["soap", "shampoo", "oil"]

}`;
JSON.parse(myjson);
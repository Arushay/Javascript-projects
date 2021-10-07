// exercise 5
// console.log('Alarm clock');
// const alarmSubmit = document.getElementById('alarmSubmit');
// Add an event listener to the submit button
// alarmSubmit.addEventListener('click', setAlarm);

// var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
// function ringBell() {
//     audio.play();
// }

// This function will run whenever alarm is set from the UI
// function setAlarm(e) {
//     e.preventDefault();
//     const alarm = document.getElementById('alarm');
//     alarmDate = new Date(alarm.value);
//     console.log(`setting alarm ${alarm.value}`);

//     now = new Date();
//     let timeToAlarm = alarmDate - now;
//     if (timeToAlarm>=0) {
//         setTimeout(() => {
//             ringBell();
//         }, timeToAlarm);
//     }
// }


console.log('cv screener');

// random data generated
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]

// cv iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    }
}
const candidates = cvIterator(data);
nextCV();

let next = document.getElementById('next');
next.addEventListener('click', nextCV);
function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if (currentCandidate != undefined) {
        image.innerHTML = `<img src="${currentCandidate.image}" alt="">`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else {
        alert('End of file');
        window.location.reload();
    }
}
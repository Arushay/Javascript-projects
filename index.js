console.log('drag and drop in js ');
const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');
// console.log(imgBox, whiteBoxes);

imgBox.addEventListener('dragstart', (e) => {
    console.log('start');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});

imgBox.addEventListener('dragend', (e) => {
    console.log('end');
    e.target.className = 'imgBox';
});

for (const whitBox of whiteBoxes) {
    whitBox.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    whitBox.addEventListener('dragenter', () => {

    });
    whitBox.addEventListener('dragleave', () => {

    });
    whitBox.addEventListener('drop', (e) => {
        e.target.append(imgBox);
    });
}
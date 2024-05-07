const image = document.getElementById('image');
const changeBtn = document.getElementById('changeBtn');

let isSmiley = true;

changeBtn.addEventListener('click', () => {
    if (isSmiley) {
        image.src = 'sad.png';
        document.body.style.backgroundColor = '#ffcccc';
    } else {
        image.src = 'smiley.png';
        document.body.style.backgroundColor = '#f0f0f0';
    }
    isSmiley = !isSmiley;
});

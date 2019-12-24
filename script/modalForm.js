
let buttOnModal = document.getElementById('openForm'),
buttOffModal = [];

buttOffModal[0] = document.getElementById('filter');
buttOffModal[1] = document.getElementById('subFeedback');

buttOnModal.addEventListener('click', ()=>{
    show('block');
});
for (let i of buttOffModal) {
    i.addEventListener('click', ()=>{
        show('none');
    });
}

let show = (state) =>{
    document.getElementById('feedback').style.display = state;
    document.getElementById('filter').style.display = state;
};


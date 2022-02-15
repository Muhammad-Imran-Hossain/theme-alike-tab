

const menu = document.querySelectorAll('.menu ul li a');
const body = document.querySelectorAll('.tab-content .tab-pane');

menu.forEach( item => {
    item.addEventListener('click',function(e){
        e.preventDefault();

        menu.forEach( item => {
            item.classList.remove('active');
        })
        item.classList.add('active');

        const tab_body = document.querySelector(this.getAttribute('href'));
        body.forEach( item => {
            item.classList.remove('active');
        })
        tab_body.classList.add('active');
    })

});
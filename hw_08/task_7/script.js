let dropItem = document.getElementsByClassName('dropdown-item');

for ( let i = 0; i < dropItem.length; i++) {
    dropItem[i].addEventListener('click', function() {
        this.querySelector('.dropdown-menu').classList.toggle('d-none');
    })
}

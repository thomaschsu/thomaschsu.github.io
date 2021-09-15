// Function to make navbar change color
$(function() {
    $(document).scroll(function() {
        var $nav = $('#navbar');
        $nav.toggleClass('scroll', $(this).scrollTop() > $nav.height());
    });
});

// Tooltip function
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
})

AOS.init();

// Enter key submits form function
document.addEventListener('keypress', function (event) {
    const submit = document.querySelector('#submit');
    const submit2 = document.querySelector('#submit2');
    const contactTextArea = document.querySelector('#contactTextArea');
    const textArea = document.querySelector('textArea');
    
    // If text area is not empty and enter key is pressed submit form
    if (contactTextArea !== '' && event.keyCode === 13) {
        // Prevent default action
        event.preventDefault();
        // Submits on click
        submit.click();
    }
});

// Year for copyright
let now = new Date();
let month = now.getFullYear();

// Replaces id with year
let copyrightyear = document.getElementById('copyrightyear');
copyrightyear.textContent = month;

// Icon movements
const bug = document.querySelector('#bug');
const laptop = document.querySelector('#laptop');
const lang = document.querySelector('#lang');
const plane = document.querySelector('.fa-paper-plane');
const smile = document.querySelector('.fa-smile');
const envelope = document.querySelector('.fa-envelope');
const home = document.querySelector('.fa-home');
const list = document.querySelector('.fa-list-alt');
const file = document.querySelector('.fa-file');

let elemArray = [bug, laptop, lang, plane, smile, envelope, home, list, file];

elemArray.forEach(function(elem){
    elem.addEventListener('mouseover', makeIconRubberBand);
    elem.addEventListener('mouseout', makeIconStop);
})

function makeIconRubberBand(){
    this.classList.add('animated', 'rubberBand', 'infinite');
}

function makeIconStop(){
    this.classList.remove('animated', 'swing', 'infinite');
}
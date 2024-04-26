
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

// Get all play buttons and audio elements
const playButtons = document.querySelectorAll('.playButton');
const audios = document.querySelectorAll('.audio');

// Loop through each play button and add click event listener
playButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        const audio = this.parentElement.querySelector('.audio');
        // Pause all other audios
        audios.forEach(a => {
            if (a !== audio) {
                a.pause();
            }
        });
        // Toggle play/pause state of the clicked audio
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        // Update the button icon based on audio state
        updateButtonIcon(button, audio);
    });
});

// Function to update the button icon based on audio state
function updateButtonIcon(button, audio) {
    if (audio.paused) {
        button.innerHTML = '<i class="fas fa-play"></i>'; // Show play icon
    } else {
        button.innerHTML = '<i class="fas fa-pause"></i>'; // Show pause icon
    }
}

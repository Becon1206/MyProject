function reloadPage() {
    location.reload();
}


// Show the info popup
function showInfo(id) {
    const infoPopup = document.getElementById('info' + id);
    if (infoPopup) {
        infoPopup.style.display = 'block';
    }
}

// Hide the info popup
function hideInfo(id) {
    const infoPopup = document.getElementById('info' + id);
    if (infoPopup) {
        infoPopup.style.display = 'none';
    }
}

// Attach hover events to all course cards
document.addEventListener('DOMContentLoaded', () => {
    const courseCards = document.querySelectorAll('.courses-container .course-card');

    courseCards.forEach((courseCard, index) => {
        const id = index + 1; // Tạo ID duy nhất cho từng thẻ
        const popup = document.getElementById('info' + id);

        if (popup) {

            popup.style.position = 'absolute';
            popup.style.top = '70px';
            popup.style.left = '10px';

            // Gắn sự kiện hover cho từng thẻ
            courseCard.addEventListener('mouseover', () => showInfo(id));
            courseCard.addEventListener('mouseout', () => hideInfo(id));
        }
    });
});
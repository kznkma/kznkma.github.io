function getStars(rating) {
    const isCoquetteMode = document.body.classList.contains('coquette-mode');
    const filledStar = isCoquetteMode ? 'pink star.png' : 'dark star.png';
    let stars = '';

    for (let i = 0; i < rating; i++) {
        stars += `<img src="${filledStar}" class="star">`;
    }
    return stars;
}

let currentPage = 0;
const commentsPerPage = 12; // 3 rows * 4 columns

function loadComments() {
    const comments = localStorage.getItem('comments');
    return comments ? JSON.parse(comments) : [];
}

const isAdmin = true; // Set this to true if the user is an admin, false otherwise

function renderComments() {
    const container = document.getElementById('comments-container');
    container.innerHTML = ''; // Clear existing comments

    const comments = loadComments();
    const start = currentPage * commentsPerPage;
    const end = start + commentsPerPage;
    const commentsToRender = comments.slice(start, end);

    // Set the number of columns
    const columns = 4; // 4 columns

    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridAutoRows = 'minmax(100px, auto)';
    container.style.gap = '20px'; // Use gap instead of gridGap

    commentsToRender.forEach((comment, index) => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
            <div class="profile">
                <img src="${comment.profileImg}" alt="Profile Picture">
                <div class="name">${comment.name}</div>
            </div>
            <div class="message">${comment.message}</div>
            <div class="comment-rating">${getStars(comment.rating)}</div>
        `;
        container.appendChild(commentElement);

        // Add event listener for deleting comments
        if (isAdmin) {
            commentElement.addEventListener('click', (event) => {
                if (event.ctrlKey) {
                    deleteComment(index);
                }
            });
        }
    });

    // Initialize Masonry after comments are rendered
    new Masonry(container, {
        itemSelector: '.comment',
        columnWidth: '.comment',
        percentPosition: true,
        gutter: 20 // Adjust gutter as needed
    });
}

function deleteComment(index) {
    const comments = loadComments();
    comments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(comments));
    renderComments();
}

function addComment(profileImg, name, message, rating) {
    const comments = loadComments();
    comments.push({ profileImg, name, message, rating });
    localStorage.setItem('comments', JSON.stringify(comments));
    renderComments();
}

function scrollLeft() {
    if (currentPage > 0) {
        currentPage--;
        renderComments();
    }
}

function scrollRight() {
    const comments = loadComments();
    if ((currentPage + 1) * commentsPerPage < comments.length) {
        currentPage++;
        renderComments();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('scroll-left').addEventListener('click', scrollLeft);
    document.getElementById('scroll-right').addEventListener('click', scrollRight);

    renderComments();
});

function showError(type) {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');

    let imagePath = '';
    if (document.body.classList.contains('dark-mode')) {
        switch (type) {
            case 'name':
                imagePath = 'name red msg.png';
                break;
            case 'rating':
                imagePath = 'red rating msg.png';
                break;
            case 'message':
                imagePath = 'red message.png';
                break;
        }
    } else {
        switch (type) {
            case 'name':
                imagePath = 'name pink msg.png';
                break;
            case 'rating':
                imagePath = 'rating pink msg.png';
                break;
            case 'message':
                imagePath = 'pink msg.png';
                break;
        }
    }

    errorMessage.innerHTML = `<img src="${imagePath}" alt="${type} error">`;
    const errorContainer = document.getElementById('error-container');
    errorContainer.appendChild(errorMessage);
    errorMessage.style.display = 'block';

    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rating-form');
    const anonymousSwitch = document.getElementById('anonymous-switch');
    const nameLabel = document.getElementById('name-label');
    const nameInput = document.getElementById('name');
    const starRating = document.getElementById('star-rating');
    const commentsContainer = document.getElementById('comments-container');
    const themeSwitcher = document.getElementById('theme-switcher');
    const errorContainer = document.getElementById('error-container');
    const lightbox = document.getElementById('lightbox');
    let selectedRating = 0;

    lightbox.style.display = 'none';
    function updateNameVisibility() {
        if (anonymousSwitch.checked) {
            nameLabel.style.display = 'none';
            nameInput.style.display = 'none';
        } else {
            nameLabel.style.display = 'block';
            nameInput.style.display = 'block';
        }
    }

    anonymousSwitch.addEventListener('change', updateNameVisibility);

    updateNameVisibility();

    starRating.addEventListener('click', (e) => {
        if (e.target.classList.contains('star')) {
            selectedRating = parseInt(e.target.dataset.value);
            updateStars(selectedRating);
        }
    });

    starRating.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('star')) {
            updateStars(parseInt(e.target.dataset.value));
        }
    });

    starRating.addEventListener('mouseout', () => {
        updateStars(selectedRating);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = anonymousSwitch.checked ? 'Anonymous' : nameInput.value.trim();
        const message = document.getElementById('message').value.trim();

        errorContainer.innerHTML = '';

        let hasError = false;

        if (!anonymousSwitch.checked && !name) {
            showError('name');
            hasError = true;
        }

        if (!message) {
            showError('message');
            hasError = true;
        }

        if (selectedRating === 0) {
            showError('rating');
            hasError = true;
        }

        if (!hasError) {
            addComment('path/to/profile.jpg', name, message, selectedRating);
            form.reset();
            updateNameVisibility();
        }
    });

    themeSwitcher.addEventListener('click', () => {
        const isCoquetteMode = document.body.classList.contains('coquette-mode');
        if (isCoquetteMode) {
            document.body.classList.remove('coquette-mode');
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('coquette-mode');
        }
        setTimeout(() => {
            renderComments();
        }, 1000);
    });

    function updateStars(rating) {
        const stars = document.querySelectorAll('#star-rating .star');
        const isCoquetteMode = document.body.classList.contains('coquette-mode');
        const filledStar = isCoquetteMode ? 'pink star.png' : 'dark star.png';
        const emptyStar = 'white star.png';

        stars.forEach((star, index) => {
            if (index < rating) {
                star.src = filledStar;
            } else {
                star.src = emptyStar;
            }
        });
    }

    renderComments();
});

renderComments();
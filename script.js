document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('featureModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');

    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', () => {
            modalTitle.textContent = card.dataset.title;
            modalContent.textContent = card.dataset.content;
            modalImage.src = card.dataset.image;
            modalImage.alt = card.dataset.title;
            modal.classList.remove('hidden');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
  document.addEventListener('DOMContentLoaded', () => {
            function createStars() {
                const starCount = 250;
                const body = document.body;
                if (!body) return;

                for (let i = 0; i < starCount; i++) {
                    const star = document.createElement('div');
                    star.classList.add('star');
                    const size = Math.random() * 2.5 + 0.5;
                    star.style.width = `${size}px`;
                    star.style.height = `${size}px`;
                    star.style.top = `${Math.random() * 100}%`;
                    star.style.left = `${Math.random() * 100}%`;
                    const duration = Math.random() * 5 + 4;
                    const delay = Math.random() * 6;
                    star.style.animationDuration = `${duration}s`;
                    star.style.animationDelay = `${delay}s`;
                    body.insertBefore(star, body.firstChild);
                }
            }
            createStars();

            const openModalBtn = document.getElementById('openStarModal');
            const closeModalBtn = document.getElementById('closeStarModal');
            const modal = document.getElementById('starModal');
            const iframe = modal ? modal.querySelector('iframe') : null;
            const originalSrc = iframe ? iframe.src : '';

            function stopIframeMedia(iframeElement) {
                if (iframeElement) {
                    iframeElement.src = '';
                }
            }

            if (openModalBtn && modal) {
                openModalBtn.addEventListener('click', () => {
                    if (iframe && iframe.src !== originalSrc) {
                        iframe.src = originalSrc;
                    }
                    modal.classList.add('active');
                });
            }

            if (closeModalBtn && modal) {
                 closeModalBtn.addEventListener('click', () => {
                    modal.classList.remove('active');
                    stopIframeMedia(iframe);
                });
            }

            // Für meine Lada :))
            
            if (modal) {
                modal.addEventListener('click', (event) => {
                    if (event.target === modal) {
                        modal.classList.remove('active');
                        stopIframeMedia(iframe);
                    }
                });
            }
        });
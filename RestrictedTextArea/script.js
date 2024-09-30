document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('limited-textarea');
    const charCount = document.getElementById('char-count');
    const maxLength = textarea.getAttribute('maxlength');

    textarea.addEventListener('input', () => {
        const currentLength = textarea.value.length;
        charCount.textContent = `${currentLength}/${maxLength} caracteres`;

        if (currentLength >= maxLength) {
            textarea.classList.add('limit-reached');
            charCount.classList.add('limit-reached');
        } else {
            textarea.classList.remove('limit-reached');
            charCount.classList.remove('limit-reached');
        }
    });
});

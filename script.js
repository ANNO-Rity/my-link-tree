document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    const text = title.textContent;
    title.textContent = '';

    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 150);
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

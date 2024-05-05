const explanation1 = document.getElementById('explanation1');
    const explanation2 = document.getElementById('explanation2');
    const explanationButton1 = document.getElementById('explanationOfOutput');
    const explanationButton2 = document.getElementById('codeForOutput');

    explanationButton1.addEventListener('click', () => {
        explanation1.style.width = '250px';
    });

    explanationButton2.addEventListener('click', () => {
        explanation2.style.width = '250px';
    });

    [explanation1, explanation2].forEach((explanation) => {
        explanation.addEventListener('mouseleave', () => {
            explanation.style.width = '0';
        });
    });
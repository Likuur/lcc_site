document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const tabs = document.querySelectorAll('.tab');
    const subTabs = document.querySelectorAll('.sub-tab');
    const buttonSound = document.getElementById('button-sound');
    const errorSound = document.getElementById('error-sound');
    const grantedSound = document.getElementById('granted-sound');
    const accessKeyInput = document.getElementById('access-key-input');
    const submitKeyButton = document.getElementById('submit-key');
    const accessStatus = document.getElementById('access-status');
    const accessContent = document.getElementById('access-content');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000);

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            buttonSound.play();
            document.querySelector('.tab.active').classList.remove('active');
            tab.classList.add('active');
            document.querySelector('.tab-content.active').classList.remove('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });

    subTabs.forEach(subTab => {
        subTab.addEventListener('click', () => {
            buttonSound.play();
            const parent = subTab.closest('.tab-content');
            parent.querySelector('.sub-tab.active').classList.remove('active');
            subTab.classList.add('active');
            parent.querySelector('.sub-tab-content.active').classList.remove('active');
            parent.querySelector(`#${subTab.dataset.tab}`).classList.add('active');
        });
    });

    submitKeyButton.addEventListener('click', () => {
        if (accessKeyInput.value === 'VanyAAc19506esSGranteD') {
            grantedSound.play();
            accessStatus.style.color = 'green';
            accessStatus.textContent = 'Доступ разрешен';
            accessContent.style.display = 'block';
        } else {
            errorSound.play();
            accessStatus.style.color = 'red';
            accessStatus.textContent = 'Ошибка: ключ не найден';
            accessContent.style.display = 'none';
        }
    });
});

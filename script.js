document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const tabs = document.querySelectorAll('.tab');
    const subTabs = document.querySelectorAll('.sub-tab');
    const panels = document.querySelectorAll('.panel');
    const buttonSound = document.getElementById('button-sound');
    const loadingMessages = document.getElementById('loading-messages');
    const captchaContainer = document.getElementById('captcha-container');
    const captchaInput = document.getElementById('captcha-input');

    function showMessage(message, delay) {
        return new Promise(resolve => {
            setTimeout(() => {
                loadingMessages.innerHTML += `<p>${message}</p>`;
                resolve();
            }, delay);
        });
    }

    async function startLoadingSequence() {
        await showMessage("Check Malwares... OK", 4000);
        await showMessage("Check root... OK", 700);
        await showMessage("Loading FileSystem... DONE", 200);
        await showMessage("Loading Scripts... DONE", 100);
        await showMessage("Loading branch: Main", 100);
        await showMessage("Main info... OK", 1000);
        await showMessage("Loading Projects... OK", 100);
        await showMessage("Loading Nedohackers... OK", 2000);
        await showMessage("Initializing Network... CONNECTED", 500);
        await showMessage("Verifying User Credentials... VALID", 300);
        await showMessage("Checking System Resources... OK", 400);
        await showMessage("Loading Configuration Files... DONE", 600);
        await showMessage("Starting Background Services... RUNNING", 500);
        await showMessage("Establishing Database Connection... SUCCESS", 700);
        await showMessage("Preparing User Interface... READY", 800);
        await showMessage("Finalizing Setup... COMPLETE", 1000);

        captchaContainer.style.display = 'block';
        captchaInput.focus();
    }

    captchaInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            if (captchaInput.value === '5') {
                loadingMessages.innerHTML += `<p>Successful!</p>`;
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    mainContent.style.display = 'block';
                }, 1000);
            } else {
                loadingMessages.innerHTML += `<p style="color: red;">Failed!</p>`;
                setTimeout(() => {
                    window.close();
                }, 1000);
            }
        }
    });

    startLoadingSequence();



    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            buttonSound.play();
            document.querySelector('.tab.active').classList.remove('active');
            tab.classList.add('active');
            document.querySelector('.tab-content.active').classList.remove('active');
            document.getElementById(tab.dataset.tab).classList.add('active');

            const subTabsContainer = document.querySelector(`#${tab.dataset.tab} .sub-tabs`);
            if (subTabsContainer) {
                const activeSubTab = subTabsContainer.querySelector('.sub-tab.active');
                if (activeSubTab) {
                    activeSubTab.classList.remove('active');
                }
                const firstSubTab = subTabsContainer.querySelector('.sub-tab');
                if (firstSubTab) {
                    firstSubTab.classList.add('active');
                    const firstSubTabContent = document.querySelector(`#${firstSubTab.dataset.tab}`);
                    if (firstSubTabContent) {
                        firstSubTabContent.classList.add('active');
                    }
                }
            }
        });
    });

    subTabs.forEach(subTab => {
        subTab.addEventListener('click', () => {
            buttonSound.play();
            const parent = subTab.closest('.tab-content');
            const activeSubTab = parent.querySelector('.sub-tab.active');
            if (activeSubTab) {
                activeSubTab.classList.remove('active');
            }
            subTab.classList.add('active');
            parent.querySelector('.sub-tab-content.active').classList.remove('active');
            parent.querySelector(`#${subTab.dataset.tab}`).classList.add('active');
        });
    });

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            buttonSound.play();
            panels.forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.panel-content').forEach(p => p.classList.remove('active'));
            panel.classList.add('active');
            document.getElementById(panel.dataset.panel).classList.add('active');
        });
    });
});

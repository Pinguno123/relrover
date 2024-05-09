const user = JSON.parse(sessionStorage.getItem('currentSesson'))
if (!user) {
    window.location.href = 'landingPage.html';
}

function closeSession() {
    sessionStorage.clear();
    window.location.reload();
}
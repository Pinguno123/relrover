function getCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    return currentPage;
}

const currentPage = getCurrentPage();

var idiom = document.getElementById('idiom');
idiom.addEventListener("change", (event) => {
    switch (currentPage) {
        case "landingPage.html":
            if (event.target.value === "espaniol") {
                window.location.href = "landingPage.html";
            } else if (event.target.value === "english") {
                window.location.href = "landingPageEnglish.html";
            }
            break;
        case "landingPageEnglish.html":
            if (event.target.value === "espaniol") {
                window.location.href = "landingPage.html";
            } else if (event.target.value === "english") {
                window.location.href = "landingPageEnglish.html";
            }
            break;            
        case "index.html":
            if (event.target.value === "espaniol") {
                window.location.href = "index.html";
            } else if (event.target.value === "english") {
                window.location.href = "indexEnglish.html";
            }
            break;
        default:
            console.error("Página no reconocida:", currentPage);
    }
});
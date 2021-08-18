let mainSection = document.getElementById("mainContent");

function fetchContain(nav) {
    let url = './partials/portfolio.html';

    if (nav == "home") {
        url = './partials/home.html';
    } else {
        url = './partials/portfolio.html';
    }

    fetch(url)
    .then(response => response.text())
    .then(repos => {
        mainSection.innerHTML = repos
    })
    .catch(err => console.log(err))
}

fetchContain('home')

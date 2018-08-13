const container = document.querySelector(".section");
const links = document.querySelectorAll(".button");


const sections = {};

fetch("./partials/home.html").then(function (response) {
    return response.text();
}).then(function (data) {
    container.innerHTML = data;
})


const contents = function (nav) {
    if (!sections[nav]) {
        fetch(nav)
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                sections[nav] = data;
                container.innerHTML = sections[nav];
            })
    } else {
        container.innerHTML = sections[nav];
    }
};


const handleClick = function (e) {
    e.preventDefault();
    let url = e.target.href;

    contents(url);
};

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", handleClick);
}

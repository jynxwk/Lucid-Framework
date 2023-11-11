function setAnchors() {
    const anchors = document.querySelectorAll("a");

    anchors.forEach(anchor => {
        const route = anchor.getAttribute("href");
        if (!route.includes("://")) {
            anchor.addEventListener("click", (event) => {
                event.preventDefault();
                loadPage(route)
            })
        }
    })
}

function loadPage(route) {
    route = window.location.pathname + "../" + route;
    fetch("./.jspa/router.php", {
        method: "POST",
        headers: {
                "Content-Type": "application/json"
            },
        body: JSON.stringify({route})
    })
    .then(async (response) => {
        const data = await response.json();
        document.querySelector("body").innerHTML = data;
        setAnchors()
    })
}

setAnchors()
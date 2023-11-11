// Listen to popstate history events and get page depending on the path.
// addEventListener("popstate", async (event) => {
//     event.preventDefault();
//     const path = event.target.location.pathname;
// });

function setAnchors() {
    const anchors = document.querySelectorAll("a");

    anchors.forEach(anchor => {
        let route = anchor.getAttribute("href");
        if (!route.includes("://")) {
            if(route.charAt(route.length) !== "/") route = route + "/";
            if (route.charAt(0) === "/") route = route.slice(1)
            route = "/" + route;
            const root = window.location.pathname.split("/")[1];
            route =  "/" + root + route;
            anchor.setAttribute("href", route);
            anchor.addEventListener("click", (event) => {
                event.preventDefault();
                loadPage(route)
            })
        }
    })
}

function loadPage(route) {
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
        history.pushState({}, "", route);
        setAnchors()
    })
}

onload = () => {
    setAnchors();
}
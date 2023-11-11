addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a").forEach(anchor => {
        let route = anchor.getAttribute("href");
        if (!route.includes("://")) {
            if(route.charAt(route.length) !== "/") route = route + "/";
            if (route.charAt(0) === "/") route = route.slice(1);
            route = root + route;
            anchor.setAttribute("href", route);
            anchor.addEventListener("click", (event) => {
                event.preventDefault();
                navigateTo(route);
                history.pushState({}, "", route);
            })
        }
    })
})

// Listen to popstate history events and get page depending on the path.
addEventListener("popstate", async (event) => {
    event.preventDefault();
    const path = event.target.location.pathname;
    loadPage(path)
});

// Set Anchors to prevent normal redirects

// Fetch file and update page function
function navigateTo(route) {
    fetch("./.jspa/router.php", {
        method: "POST",
        headers: {
                "Content-Type": "application/json"
            },
        body: JSON.stringify({route})
    })
    .then(response => response.text())
    .then(html => {
        document.open()
        document.write(html)
        document.close()
    })
    .catch(err => {
        document.write(err)
    })
}
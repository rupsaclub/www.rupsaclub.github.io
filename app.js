function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            let element = document.getElementById(elementId);
            element.innerHTML = data;

            // Execute inline scripts manually
            let scripts = element.querySelectorAll("script");
            scripts.forEach(oldScript => {
                let newScript = document.createElement("script");
                newScript.textContent = oldScript.textContent; // Copy script content
                document.body.appendChild(newScript).parentNode.removeChild(newScript); // Execute script
            });
        })
        .catch(error => console.error("Error loading the file:", error));
}


// Load footer.html into the div with id="footer"
loadHTML('./html/main.html', 'main');


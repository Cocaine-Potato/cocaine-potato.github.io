let settings;
fetch('../JSON/settings.json')
    .then(response => response.json())
    .then(async data => {
        settings = data
    })
    .catch(error => {
        console.log('Error fetching the JSON file:', error);
    });

fetch('../JSON/lang.json')
    .then(response => response.json())
    .then(async data => {
        let lang = data
        // DOCBUILDER

        let sidebar_info = document.getElementById("sidebar_info");
        let sidebar_history = document.getElementById("sidebar_history");
        let sidebar_products = document.getElementById("sidebar_products")

        switch(settings.language) {
            case "de":
                sidebar_info.innerText = lang.de.buttons.sidebar.info;
                sidebar_products.innerText = lang.de.buttons.sidebar.products
        }

    })
    .catch(error => {
        console.log('Error fetching the JSON file:', error);
    });


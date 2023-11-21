function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        createMenuItem(
            "HOT YASAI ROLL",
            "Rice, wakame seaweed, avocado, cucumbers, kanpyo, bell pepper, sesame seeds, sesame sauce, tempura"
        )
    );
    menu.appendChild(
        createMenuItem(
            "PHILADELPHIA ROLL",
            "Salmon, rice, wakame seaweed, cream cheese, cucumbers, avocado"
        )
    );
    menu.appendChild(
        createMenuItem(
            "RAINBOW MIX",
            "Rice, squid, cream cheese, cucumbers, salmon, eel, tuna, shrimp, wakame seaweed, tobiko roe."
        )
    );
    menu.appendChild(
        createMenuItem(
            "CALIFORNIA EBI",
            "Shrimp, rice, wakame seaweed, cucumber, avocado, mayonnaise, tobiko"
        )
    );
    menu.appendChild(
        createMenuItem(
            "CANADA ROLL",
            "Rice, wakame seaweed, salmon, eel, avocado, unagi sauce, sesame seeds, cream cheese"
        )
    );
    menu.appendChild(
        createMenuItem(
            "GREEN DRAGON ROLL",
            "Rice, wakame seaweed, salmon, cream cheese, avocado, iceberg lettuce"
        )
    );
    menu.appendChild(
        createMenuItem(
            "KATANA ROLL",
            "Rice, salmon, wakame seaweed, cream cheese, mango, arugula"
        )
    );
    menu.appendChild(
        createMenuItem(
            "MANGO ROLL",
            "Rice, cream cheese, wakame seaweed, mango, cucumbers, eel"
        )
    );

    return menu;
}

function createMenuItem(name, description){
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    const foodImage = document.createElement("img");
    foodImage.src = `images/rolls/${name.toLowerCase()}.jpg`;
    foodImage.alt = `${name}`;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;
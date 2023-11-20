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
            "CALIFORNIA SYAKE ROLL",
            "Rice, fried salmon, avocado, cucumber, mayonnaise, sesame seeds, wakame seaweed"
        )
    );
    menu.appendChild(
        createMenuItem(
            "HOT YASAI ROLL",
            "Rice, wakame seaweed, avocado, cucumbers, kanpyo, bell pepper, sesame seeds, sesame sauce, tempura"
        )
    );
    menu.appendChild(
        createMenuItem(
            "HOT YASAI ROLL",
            "Rice, wakame seaweed, avocado, cucumbers, kanpyo, bell pepper, sesame seeds, sesame sauce, tempura"
        )
    );
    menu.appendChild(
        createMenuItem(
            "HOT YASAI ROLL",
            "Rice, wakame seaweed, avocado, cucumbers, kanpyo, bell pepper, sesame seeds, sesame sauce, tempura"
        )
    );
    menu.appendChild(
        createMenuItem(
            "HOT YASAI ROLL",
            "Rice, wakame seaweed, avocado, cucumbers, kanpyo, bell pepper, sesame seeds, sesame sauce, tempura"
        )
    );
    menu.appendChild(
        createMenuItem(
            "HOT YASAI ROLL",
            "Rice, wakame seaweed, avocado, cucumbers, kanpyo, bell pepper, sesame seeds, sesame sauce, tempura"
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
    foodImage.src = `images/rolls/${name.toLowerCase()}.png`;
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
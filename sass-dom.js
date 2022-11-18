const bookButtons = document.querySelectorAll(".btn__book");
const netherlandButton = document.querySelectorAll("#netherland__button");
const netherlandImage = document.querySelector("#netherland__image");
const images = ["./assets/mountain3.jpg", "./assets/mountain2.jpg", "./assets/mountain1.jpg", "./assets/mountain4.jpg"];
const alaskaButton = document.querySelectorAll("#alaska__button");

bookButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.style.backgroundColor = "red";
        button.style.color = "white";
    });
});

netherlandButton.forEach((button) => {
    button.addEventListener("click", () => {
        netherlandImage.src = images[Math.floor(Math.random() * images.length)];

        document.querySelector("#netherland__title")
        .innerHTML = "DOM Manipulation";

        document.querySelector("#netherland__text")
        .innerHTML = "DOM Manipulation is the process of changing the structure, style, and content of a document by using a scripting language such as JavaScript. DOM is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";
    });
});
netherlandImage.addEventListener("mouseenter", () => { 
    netherlandImage.style.transform = "scale(1.1)";
    netherlandImage.style.transition = "transform 0.5s";
});
netherlandImage.addEventListener("mouseleave", () => { 
    netherlandImage.style.transition = "transform 0.5s";
    netherlandImage.style.transform = "scale(1,1)";
});

alaskaButton.forEach((button) => {
    button.addEventListener("click", () => {
        alert("You clicked the button!");

        document.querySelector("#alaska__button")
        .innerHTML = "Clicked manipulation!";
        
    });
});

const japan = document.querySelector("#japan__title");
    japan.addEventListener("mouseover", () => {
        onmouseover = 
            alert("Hover manipulation!");

            document.querySelector("#japan__title")
            .innerHTML = "Hover manipulation!";
        
            japan.style.color='red', 
            japan.style.fontSize='30px', 
            japan.style.transition='all 0.5s', 
            japan.style.fontWeight='bold'
        });

const japanInput = document.querySelector("#japan__input");
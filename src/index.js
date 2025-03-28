document.addEventListener("DOMContentLoaded", (event) => {

    const targetColumn = document.querySelector(".column");

    for (let i = 0; i < 36; i++) {
        const column = document.createElement("div");
        column.classList.add("single-columns"); // Creates a name for the created element.
        column.innerHTML = `Column ${i}`;
        targetColumn.appendChild(column);

        console.log("targetColumn_2: ", targetColumn);
        console.log("column_2: ", column);
    }


    /*columns.forEach((columns) => {
        columns.addEventListener("click", () => {
            console.log("Clicked.");
            columns.style.display = "none";

        });
    });*/


    function generateRandomNumber() {

    }


    function handleCardPress() {
        console.log("Clicked.");
    }


});
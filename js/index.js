(function () {
    // Function to insert an image into the #imageContainer
    function insertImage() {
        // Create an image element
        const imageElement = document.createElement("img");
        imageElement.src = "path/to/your/image.jpg"; // Replace with the image path

        // Append the image to the container
        const imageContainer = document.getElementById("imageContainer");
        imageContainer.appendChild(imageElement);
    }

    // Add a click event listener to the button
    const insertImageButton = document.getElementById("insertImageButton");
    insertImageButton.addEventListener("click", insertImage);
})();

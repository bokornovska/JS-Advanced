function extractText() {
    let ulElement = document.getElementById('items');
    console.log(ulElement.textContent)

    let texEareaElement = document.getElementById('result');
    texEareaElement.textContent = ulElement.textContent;
}
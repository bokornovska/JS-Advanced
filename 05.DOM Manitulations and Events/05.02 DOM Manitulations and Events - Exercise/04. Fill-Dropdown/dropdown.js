function addItem() {
    
    let textElement = document.getElementById('newItemText').value;
    let valueElement = document.getElementById('newItemValue').value;

    
    let option = document.createElement('option');
    
    option.text = textElement;
    option.value = valueElement
    
    let dropDownElement = document.getElementById('menu');

    if(textElement != '' && valueElement != ''){
        
        dropDownElement.appendChild(option);
    }

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

    
}
function colorize() {

    //Solution with CSS selector
    // let rowElements = document.querySelectorAll('tr:nth-of-type(2n) td');

    // rowElements.forEach(x => {
    //     x.style.backgroundColor = 'teal'
    // })


    let rowElements = document.getElementsByTagName('tr');
    
    let rows = Array.from(rowElements); //convert to array

    rows.forEach((element, i) => {
        if(i % 2 !==0){
            element.style.backgroundColor = 'teal'
        }
    });
}
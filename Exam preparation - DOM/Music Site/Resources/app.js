window.addEventListener('load', solve);

function solve() {

    let genreInputElement = document.getElementById('genre');
    let nameInputElement = document.getElementById('name');
    let authorInputElement = document.getElementById('author');
    let dateInputElement = document.getElementById('date');

    let divAllHitsElement = document.querySelector('.all-hits-container');
    let pLikesElement = document.querySelector('.likes p');
    let divSavedElement = document.querySelector('.saved-container');


    let addBtnElement = document.getElementById('add-btn');

    addBtnElement.addEventListener('click', onAdd);

    function onAdd(e) {
        e.preventDefault();

        let genre = genreInputElement.value;
        let name = nameInputElement.value;
        let author = authorInputElement.value;
        let date = dateInputElement.value;

        if (genre == '' || name == '' || author == '' || date == '') {
            return;
        };

        let divHitsInfoElement = document.createElement('div');
        divHitsInfoElement.setAttribute('class', 'hits-info');

        let imgElement = document.createElement('img');
        imgElement.src = './static/img/img.png';

        let h2GenreElement = document.createElement('h2');
        h2GenreElement.textContent = `Genre: ${genre}`;

        let h2NameElement = document.createElement('h2');
        h2NameElement.textContent = `Name: ${name}`;

        let h2AuthorElement = document.createElement('h2');
        h2AuthorElement.textContent = `Author: ${author}`;

        let h3DateElement = document.createElement('h3');
        h3DateElement.textContent = `Date: ${date}`;

        let saveButtonElement = document.createElement('button');
        saveButtonElement.setAttribute('class', 'save-btn');
        saveButtonElement.textContent = 'Save song';

        let likeBtnElement = document.createElement('button');
        likeBtnElement.setAttribute('class', 'like-btn');
        likeBtnElement.textContent = 'Like song';

        let deleteBtnelement = document.createElement('button');
        deleteBtnelement.setAttribute('class', 'delete-btn');
        deleteBtnelement.textContent = 'Delete';

        divHitsInfoElement.appendChild(imgElement);
        divHitsInfoElement.appendChild(h2GenreElement);
        divHitsInfoElement.appendChild(h2NameElement);
        divHitsInfoElement.appendChild(h2AuthorElement);
        divHitsInfoElement.appendChild(h3DateElement);
        divHitsInfoElement.appendChild(saveButtonElement);
        divHitsInfoElement.appendChild(likeBtnElement);
        divHitsInfoElement.appendChild(deleteBtnelement);

        divAllHitsElement.appendChild(divHitsInfoElement);

        genreInputElement.value = '';
        nameInputElement.value = '';
        authorInputElement.value = '';
        dateInputElement.value = '';

        likeBtnElement.addEventListener('click', onLike);

        function onLike() {

            likeBtnElement.disabled = true;

            let likes = Number(pLikesElement.textContent.slice(-1));
            likes++;
            pLikesElement.textContent = `Total Likes: ${likes}`;


        };

        saveButtonElement.addEventListener('click', onSave)

        function onSave(e) {

            divSavedElement.appendChild(divHitsInfoElement);

            saveButtonElement.remove();
            likeBtnElement.remove();

        };

        deleteBtnelement.addEventListener('click', () => {

            divHitsInfoElement.remove();
        })


        
    }
}
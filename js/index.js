/*---------All id founded and add javascript------*/

const searchInput = document.getElementById('input-btn');
const searchRejult = document.getElementById('button-search');
const allCardFind = document.getElementById('all-card-find');
const resultSearch = document.getElementById('result-section');

const buttonSearch = () => {
    const searchIn = searchInput.value;
    searchInput.value = '';

    // load data
    const url = ` https://openlibrary.org/search.json?q=${searchIn}`;

    fetch(url)
        .then(res => res.json())
        .then((data) => searchShow(data.docs))

}

const searchShow = (books) => {
    /*-------Clear dom------*/
    resultSearch.innerHTML = '';
    allCardFind.innerHTML = '';

    /*----Show website results all number count---*/
    const div2 = document.createElement('div');
    div2.classList.add('text-center')
    div2.innerHTML = `
        <h4>About ${books.length} results (Website show )</h4>
        `;
    allCardFind.appendChild(div2);

    /*----Show website results ---*/
    books.forEach(book => {

        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg " class="card-img-top figure-img img-fluid rounded" alt="...">
               <div class="card-body">
                    <h4 class="card-title">
                    Book Name : ${book.title} 
                    </h4>
                    <h4 class="card-title">
                    Author name : ${book.author_name}
                    </h4>
                    <h5 class="card-title">
                    First Publish Yesr : ${book.first_publish_year}
                    </h5>
                    <h5 class="card-title">
                    Publisher Name : ${book.publisher}
                    </h5>
                </div>
            </div>
            `;

        resultSearch.appendChild(div);

    });

}


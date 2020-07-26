function filterNames() {
    let filterValue = searchBar.value.toLowerCase();

    let cards = document.querySelectorAll(`.card`);

    cards.forEach(card => {
        let a = card.querySelector('h1');
        if (a.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
            card.style.display = '';
        } else {
            card.style.display = 'none'
        }
    });    
}

function populateCards({firstname, lastname, thumbnail}) {
    let cards = document.getElementById('cards')
    cards.innerHTML += `
        <div class='card'>
            <div class='image-container'> 
                <img src='images/thumbnails/${thumbnail}'>
            </div>

            <h1>${firstname}</h1>

            <div class='links'>
                <button>
                    <a href='${yandereLink}${lastname}_${firstname}' target="_blank">yande.re</a>
                </button> 
                <button>
                    <a href='${konachanLink}${lastname}_${firstname}' target="_blank">konachan</a>
                </button> 
                <button>
                    <a href='${gelbooruLink}${lastname}_${firstname}' target="_blank">gelbooru</a>
                </button> 
                <button>
                    <a href='${pixivLink}${firstname} ${lastname}' target="_blank">pixiv</a>
                </button>
                <button>
                    <a href='${nhentaiLink}${firstname} ${lastname}' target="_blank">nhentai</a>
                </button>  
            </div>
        </div>
    `     
}

characters.forEach( character => {
    populateCards(character)
})

searchBar.addEventListener('keyup', filterNames)
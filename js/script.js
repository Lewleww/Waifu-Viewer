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
                <a href='${yandereLink}${lastname}_${firstname}' target="_blank"><button>yande.re</button></a>
                <a href='${konachanLink}${lastname}_${firstname}' target="_blank"><button>konachan</button></a>
                <a href='${gelbooruLink}${lastname}_${firstname}' target="_blank"><button>gelbooru</button></a>
                <a href='${nhentaiLink}${firstname} ${lastname}' target="_blank"><button>nhentai</button></a>
                <a href='${pixivLink}${firstname} ${lastname}' target="_blank"><button>pixiv</button></a>
            </div>
        </div>
    `     
}

characters.forEach( character => {
    populateCards(character)
})

searchBar.addEventListener('keyup', filterNames)
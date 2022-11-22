const heroCard = document.querySelector(".hero-card");
const heroButton = document.querySelectorAll(".hero-button");
const images = ["./assets/yardact.jpg", "./assets/workingmensclub.jpg", "./assets/waltdisco.jpg", "./assets/findlay.jpg" ];

const favoriteAlbums = [
    {
        album: 'The Overload', 
        artist: 'Yard Act', 
        bio: 'Yard Act is a band from the UK that released their debut album The Overload in 2022. The Overload is a concept album about the end of the world.',
        year: 2022,
        genre: 'Alternative',
        image: images[0]

    },
    {
        album: 'Fear Fear',
        artist: 'Working mens Club',
        bio: 'Working Mens Club is a band from the UK that released their debut album Fear Fear in 2022.',
        year: 2022,
        genre: 'Alternative',
        image: images[1]
    },
    {
        album: 'Unlearning',
        artist: 'Walt Disco',
        bio: 'Walt Disco is a band from the UK that released their debut album Unlearning in 2022.',
        year: 2022,
        genre: 'Alternative',
        image: images[2]
    },
    {
        album: 'The Last of the 20th Century Girls',
        artist: 'Findlay',
        bio: 'Findlay is a band from the UK that released their sophomore album The Last of the 20th Century Girls in 2022.',
        year: 2022,
        genre: 'Alternative',
        image: images[3]
    }
];

heroButton.forEach((button) => {
    button.addEventListener('click', () => {
        const album = favoriteAlbums[Math.floor(Math.random() * favoriteAlbums.length)];

        heroCard.innerHTML = 
        `
            <div class="hero-card">
                <img src="${album.image}" alt="album cover" class="card-image">
                <div class="card-text">
                    <h2 class="album">
                        ${album.album} <span class="year">${album.year}</span> 
                    </h2>
                    <p class="artist">
                        ${album.artist} <span class="genre">${album.genre}</span>
                    </p>
                    <p class="bio">${album.bio}</p>
                </div>
            </div>
        `;
    });
});

        /* 
        document.querySelector('.album').innerHTML = album.album;
        document.querySelector('.artist').innerHTML = album.artist;
        document.querySelector('.bio').innerHTML = album.bio;
        document.querySelector('.year').innerHTML = album.year;
        document.querySelector('.genre').innerHTML = album.genre;
        document.querySelector('.card-image').src = album.image;
        */
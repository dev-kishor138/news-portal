const headlines = () => {
    const url = 'https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const newsContent = document.querySelector('.news-headline');
            newsContent.innerHTML = `
                <div class="bg-img">
                    <div class="bg-opacity"></div>
                    <img src="${data.data[0].image_url}" alt="">
                </div>
                <div class="img-text">
                    <h2>${data.data[0].title}</h2>
                    <div class="ntime">
                        <p>${data.data[0].author.published_date.slice(0, 11)}</p>
                        <p>CNN Indonesia</p>
                    </div>
                </div>
                <div class="news-tab">
                    <div class="catagoty">
                        <p>International</p>
                    </div>
                    <div class="icon">
                        <p><i class="fa-solid fa-eye"></i> 1.5M</p>
                        <p><i class="fa-solid fa-comment"></i> 5k</p>
                        <p><i class="fa-sharp fa-solid fa-square-share-nodes"></i> 15k</p>
                    </div>
                </div>
        `;
        })

}

const latestNews = () => {
    const url = 'https://openapi.programming-hero.com/api/news/category/02';
    fetch(url)
    .then(res => res.json())
    .then(data => displayLatestNews(data.data))
}
const displayLatestNews = allNews => {
    const latestContainer = document.querySelector('.latest-news');
    allNews.forEach(news => {
        // console.log(news);
        const div = document.createElement('div');
        div.classList.add('card-news');
        div.innerHTML = `
        <div class="card-img">
            <img src="${news.image_url}" alt="">
        </div>
        <div class="card-text">
            <h3>${news.title}</h3>
            <div class="post-time">
                <p>${news.author.published_date.slice(0, 11)}</p>
                <p>CNN Indonesia</p>
            </div>
        </div>
        `;
        latestContainer.appendChild(div);
    });
}




const sideNews = () => {
    const url = 'https://openapi.programming-hero.com/api/news/category/02';
    fetch(url)
    .then(res => res.json())
    .then(data => displaySideNews(data.data))
}
const displaySideNews = allNews => {
    const latestContainer = document.querySelector('.sidebar-news');
    allNews.forEach(news => {
        console.log(news);
        const div = document.createElement('div');
        div.classList.add('card-news');
        div.innerHTML = `
        <div class="card-img">
            <img src="${news.image_url}" alt="">
        </div>
        <div class="card-text">
            <h3>${news.title}</h3>
            <div class="post-time">
                <p>${news.author.published_date.slice(0, 11)}</p>
                <p>CNN Indonesia</p>
            </div>
        </div>
        `;
        latestContainer.appendChild(div);
    });
}


sideNews();












latestNews();






headlines();
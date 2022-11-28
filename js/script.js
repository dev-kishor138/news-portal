
const getAllNews = () => {
    const url = 'https://openapi.programming-hero.com/api/news/category/08';
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllNews(data.data));
}

const displayAllNews = allNews => {
    const newsContainer = document.querySelector('.news-section');
    allNews.forEach(news => {
        // console.log(news);
        const div = document.createElement('div');
        div.classList = 'news';
        div.innerHTML = `
        <div class="img-box">
            <img src="${news.thumbnail_url}" alt="">
        </div>
        <div class="textbox">
            <div class="text">
                <h3>${news.title}</h3>
                <p>${news.details.slice(0, 400)}</p>
            </div>
            <div class="author-box">
                <div class="author">
                    <div class="author-img">
                        <img src="${news.author.img}" alt="">
                    </div>
                    <div class="autor-name">
                        <p>${news.author.name}</p>
                        <p>${news.author.published_date}
                    </div>
                </div>
                <div class="view">
                    <i class="fa-regular fa-eye"></i>
                    <p>${news.total_view}</p>
                </div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div class="read-more">
                    <button onclick="getDetails('${news._id}')">Read More <i class="fa-solid fa-arrow-right"></i></i></button>
                </div>
            </div>
        </div>
        `;
        newsContainer.appendChild(div);
    });

}

const getDetails = news_id => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.data[0]))
}
const displayDetails = data => {
    // console.log(data);
    const newsSection = document.querySelector('.news-section');
    newsSection.innerText = '';
    const detailsContainer = document.querySelector('.details-news');
    detailsContainer.innerHTML = `
        <div class="img-box">
            <img src="${data.image_url}" alt="">
        </div>
        <div class="text-box">
            <h3>${data.title}</h3>
            <p>${data.details}</p>
        </div>
        <div class="author-box">
            <div class="author-name">
                <div class="author-img">
                    <img src="${data.author.img}" alt="">
                </div>
                <div class="name">
                    <h4>${data.author.name}</h4>
                    <p>${data.author.published_date.slice(0, 11)}</p>
                </div>
            </div>
            <div class="icon-box">
                <p><i class="fa-regular fa-eye"></i> <span>${data.total_view}</span></p>
                <p><i class="fa-solid fa-comment"></i> <span>3.5K</span></p>
                <p><i class="fa-solid fa-share-nodes"></i> <span>3.5K</span></i></p>
            </div>
        </div>
        `;

}






getAllNews();


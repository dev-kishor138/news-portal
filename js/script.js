const getCatagory = () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    fetch(url)
    .then(res => res.json())
    .then(data => displayCatagory(data.data.news_category))
}
getCatagory();

const displayCatagory = catagories => {
    const catagoryContainer = document.querySelector('menu ul');
    // console.log(catagories);
    catagories.forEach(catagory => {
        // console.log(catagory.category_name);
        const li = document.createElement('li');
        li.innerText = `
            ${catagory.category_name}
        `;
        catagoryContainer.appendChild(li);
    })
}

const getAllNews = () => {
    const url = 'https://openapi.programming-hero.com/api/news/category/08';
    fetch(url)
    .then(res => res.json())
    .then(data => displayAllNews(data.data));
}
getAllNews();
const displayAllNews =  allNews => {
    const newsContainer = document.querySelector('.news-section');
    allNews.forEach(news => {
        // console.log(news);
        const div = document.createElement('div');
        div.classList = 'news';
        div.innerHTML = `
        <div class="img-box">
            <img src="${news.image_url}" alt="">
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
                    <p>1.5M</p>
                </div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div class="read-more">
                    <button>Read More <i class="fa-solid fa-arrow-right"></i></i></button>
                </div>
            </div>
        </div>
        `;
        newsContainer.appendChild(div);
    });
   
}

const ul = document.querySelector('menu ul');
ul.children[0].addEventListener('click', () => {
    window.location.href = 'all.html';
});
ul.children[1].addEventListener('click', () => {
    window.location.href = 'breaking.html';
});
ul.children[2].addEventListener('click', () => {
    window.location.href = 'regular.html';
});
ul.children[3].addEventListener('click', () => {
    window.location.href = 'international.html';
});
ul.children[4].addEventListener('click', () => {
    window.location.href = 'sports.html';
});
ul.children[5].addEventListener('click', () => {
    window.location.href = 'entertainment.html';
});
ul.children[6].addEventListener('click', () => {
    window.location.href = 'culture.html';
});
ul.children[7].addEventListener('click', () => {
    window.location.href = 'arts.html';
});
ul.children[8].addEventListener('click', () => {
    window.location.href = 'index.html';
});
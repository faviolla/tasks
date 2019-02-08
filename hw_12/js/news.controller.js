const newsService = new NewsService();
const uiService = new NewsUI();
const notificationService = new NotificationsUI();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const searchInput = document.getElementById('search');

function onSelectChange(event) {
    const country = countrySelect.value;
    const category = categorySelect.value;

    if (!country || !category) return console.error('Введите страну и категорию для поиска');

    newsService.getTopHeadlinesNews(category, country, (response) => {
        const { totalResults, articles } = response;

        // console.time();
        uiService.clearContainer();
        // console.timeEnd();

        // console.time();
        articles.forEach((article) => uiService.addArticle(article));
        // console.timeEnd();
    });
}

function onInputChange() {
    const search = searchInput.value;

    if (search.length < 3) {
        uiService.clearContainer(); 
        return console.error('Введите больше 2х символов');
    }
    if (!search)  return console.error('Введите поисковое слово');

    uiService.clearContainer();

    newsService.getNewsByPhrase(search, (response) => {
        const {totalResults, articles} = response;

        uiService.clearContainer();
        articles.forEach((article) => uiService.addArticle(article));
        
        if (articles.length == 0) {
            notificationService.clearContainer(); 
            notificationService.addNotification();
            
            return console.error('Введите поисковое слово');
        }
    })
    
}


countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);

searchInput.addEventListener('keyup', onInputChange);


class NewsUI {
    constructor() {
        this.newsContainer = document.querySelector('.news-wrap .row');
    }

    /**
     * 
     * @param {Object} article 
     */
    addArticle(article) {
        // console.time();
        const template = (NewsUI.generateArticleTemplate(article)).toString();
        // console.timeEnd();
        this.newsContainer.insertAdjacentHTML("afterbegin", template);
    }


    clearContainer() {
        let first = this.newsContainer.firstElementChild;
        while (first) {
            this.newsContainer.removeChild(first);
            first = this.newsContainer.firstElementChild;
        }
    }

    /**
     * 
     * @param {Object} article 
     */
    static generateArticleTemplate(article) {
        
        // let parentEl = document.createElement('div');
        // parentEl.setAttribute('class', 'col s12 m6');
        // let card = document.createElement('div');
        // card.setAttribute('class', 'card');
        // parentEl.appendChild(card);
        // let cardImage = document.createElement('div');
        // cardImage.setAttribute('class', 'card-image');
        // cardImage.innerHTML = '<img src="' + article.urlToImage + '">'
        // card.appendChild(cardImage);
        // let cardContent = document.createElement('div');
        // cardContent.setAttribute('class', 'card-content');
        // card.appendChild(cardContent);
        // let cardTitle = document.createElement('span');
        // cardTitle.setAttribute('class', 'card-title');
        // cardTitle.innerHTML = article.title || '' ;
        // cardContent.appendChild(cardTitle);
        // let p = document.createElement('p');
        // p.innerHTML = article.description || '' ;
        // cardContent.appendChild(p);
        // let cardAction = document.createElement('div');
        // cardAction.setAttribute('class', 'card-action');
        // let link = document.createElement('a');
        // link.setAttribute('href', article.url);
        // link.setAttribute('target', '_blank');
        // link.innerHTML = 'Read more';
        // cardAction.appendChild(link);
        // card.appendChild(cardAction);

        // console.log(parentEl);
        // return parentEl;
        
        return `
        <div class="col s12 m6">
            <div class="card">
                <div class="card-image">
                    <img src="${article.urlToImage}">
                </div>
                <div class="card-content">
                    <span class="card-title">${article.title || ''}</span>

                    <p>${article.description || ''}</p>
                </div>
                <div class="card-action">
                    <a href="${article.url}" target="_blank">Read more</a>
                </div>
            </div>
        </div>
        `;
    }
}
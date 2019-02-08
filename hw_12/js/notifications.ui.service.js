class NotificationsUI {
    constructor() {
        this.notificationsContainer = document.querySelector('.news-wrap .row');
    }
    /**
     * 
     * @param {Object} article 
     */
    addNotification() {
        const template = NotificationsUI.generateNotificationTemplate();
        this.notificationsContainer.insertAdjacentHTML("afterbegin", template);
    }

    clearContainer() {
        let first = this.notificationsContainer.firstElementChild;
        while (first) {
            this.notificationsContainer.removeChild(first);
            first = this.notificationsContainer.firstElementChild;
        }
    }

    static generateNotificationTemplate() {
        return `<div class="search-notification">Упс! По Вашему запросу ничего не найдено :(</div>`
    }
}
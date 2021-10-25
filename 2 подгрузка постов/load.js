'use strict';

// 1. Получите ссылку на .scrollCheck
let scrollCheck = document.querySelector('.scrollCheck');

/**
 * Инициализация. При открытии страницы вставляем несколько постов
 * на страницу
 */
function init() {
    // 4. Если условие истинно, то вызывайте insertPosts и рекурсивно вызывайте
    // init.
    if (window.innerHeight === document.body.offsetHeight) {
        insertPosts();
        init();
    }
}
init();

document.addEventListener('scroll', function (event) {
    if (scrollCheck.getBoundingClientRect().top <= window.innerHeight) {
        // 5. Если условие истинно вызывайте insertPosts.
        insertPosts();
    }
});

/**
 * Функция вставляет несколько постов на страницу.
 */
function insertPosts() {
    // 3. в postsMarkup вам надо будет в цикле дописывать с помощью конкатенации
    // разметку, возвращаемую getPostMarkup.
    // 3.1 в getPostMarkup в качестве аргумента передавайте счетчик цикла
    let postsMarkup = '';
    for (let i = 0; i < 5; i++) {
        postsMarkup += getPostMarkup(i);
    }
    // 3.2 Перед scrollCheck вставьте записанную в postsMarkup разметку
    scrollCheck.insertAdjacentHTML('beforebegin', postsMarkup);
}

/**
 * Функция возвращает html-разметку для одного поста, который будет
 * вставляться на страницу.
 * @param {number} counter число, для того, чтобы прибавить его ко времени unix.
 * @returns {string} html-разметка одного поста
 */
function getPostMarkup(counter) {
    /* 2. Сделайте, чтобы в num записывалось текущее время unix (https://mzl.la/3iMz2Jr)
    плюс counter
    */
    let num = new Date().getTime() + counter;
    return `<div class="post">
        <img src="https://picsum.photos/200/300?random=${num}">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dicam, inquam, et quidem discendi causa magis, quam quo te aut Epicurum reprehensum velim. Partim cursu et peragratione laetantur, congregatione aliae coetum quodam modo civitatis imitantur; Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. Duo Reges: constructio interrete. Tecum optime, deinde etiam cum mediocri amico. Restatis igitur vos; Eorum enim omnium multa praetermittentium, dum eligant aliquid, quod sequantur, quasi curta sententia; Ergo id est convenienter naturae vivere, a natura discedere. Cum autem venissemus in Academiae non sine causa nobilitata spatia, solitudo erat ea, quam volueramus. Quae ista amicitia est? Quid in isto egregio tuo officio et tanta fide-sic enim existimo-ad corpus refers? Quodsi ipsam honestatem undique pertectam atque absolutam. Sedulo, inquam, faciam. Quae duo sunt, unum facit.
    </div>`;
}

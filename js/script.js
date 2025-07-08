
document.addEventListener('DOMContentLoaded', () => {

    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("is-visible");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("is-visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                // Раскомментируйте, если хотите, чтобы анимация повторялась при прокрутке вверх
                // hideScrollElement(el);
            }
        });
    };

    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Инициализация при загрузке
    handleScrollAnimation();
});

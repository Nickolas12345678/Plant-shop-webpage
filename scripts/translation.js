const translations = {
    en: {
        "Register": "Sign up",
        "Login": "Sign in",
        "product-title": "Kembang Flower Mantap",
        "product-description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "product-nav-prev": "← Kaktus Plant",
        "product-nav-next": "Next → Rahasia Plant",
        "features-fast-delivery": "Fast Delivery",
        "features-title": "Features",
        "features-customer-service": "Great Customer Service",
        "features-original-plants": "Original Plants",
        "features-affordable-prices": "Affordable Prices",
        "features-description-1": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        "features-description-2": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        "features-description-3": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        "features-description-4": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        "plants-title": "Featured Plants",
        "shop-now-title": "Get your favourite plants on our shop now",
        "shop-now-button": "Visit Shop",
        "footer-title": "PLANTKU",
        "footer-address": "Plantku House<br>Jl. Laksda Adisucipto No.51, Demangan, Kec. Depok,<br>Kota Yogyakarta, Daerah Istimewa Yogyakarta 55282",
        "footer-subscribe": "Enter your email",
        "footer-submit": "Submit",
        "plants-title": "Featured plants",
        "plant-card-name-1": "Cactus Plants",
        "plant-card-name-2": "Landak Plants",
        "plant-card-name-3": "Kecubung Plants",
        "plant-card-name-4": "Kecubung Plants",
        "plant-card-name-5": "Kecubung Plants",
        "relax-plants-title": "Buy more plants, it helps you to be relaxed",
        "relax-plants-description": "Lorem Ipsum — це просто текст для заповнення друкарських і наборних індустрій. Lorem Ipsum використовується як стандартний текст."
    },
    ua: {
        "Register": "Зареєструватись",
        "Login": "Увійти",
        "features-title": "Особливості",
        "product-title": "Квітка Кембанг Мантеп",
        "product-description": "Lorem Ipsum — це просто текст для заповнення друкарських і наборних індустрій. Lorem Ipsum використовується як стандартний текст з 1500-х років.",
        "product-nav-prev": "← Кактус",
        "product-nav-next": "Далі → Рахасія",
        "features-fast-delivery": "Швидка доставка",
        "features-customer-service": "Чудове обслуговування клієнтів",
        "features-original-plants": "Оригінальні рослини",
        "features-affordable-prices": "Доступні ціни",
        "features-description-1": "Lorem Ipsum — це просто текст для заповнення друкарських і наборних індустрій. Lorem Ipsum використовується як стандартний текст.",
        "features-description-2": "Lorem Ipsum — це просто текст для заповнення друкарських і наборних індустрій. Lorem Ipsum використовується як стандартний текст.",
        "features-description-3": "Lorem Ipsum — це просто текст для заповнення друкарських і наборних індустрій. Lorem Ipsum використовується як стандартний текст.",
        "features-description-4": "Lorem Ipsum — це просто текст для заповнення друкарських і наборних індустрій. Lorem Ipsum використовується як стандартний текст.",
        "plants-title": "Рекомендовані рослини",
        "shop-now-title": "Придбайте ваші улюблені рослини в нашому магазині зараз",
        "shop-now-button": "Перейти до магазину",
        "footer-title": "PLANTKU",
        "footer-address": "Будинок Plantku<br>Jl. Laksda Adisucipto No.51, Деманган, Кец. Депок,<br>Кота Йог’якарта, Дієрій Істімевої Йог’якарти 55282",
        "footer-subscribe": "Введіть ваш email",
        "footer-submit": "Надіслати",
        "plant-card-name-1": "Кактус",
        "plant-card-name-2": "Ландак",
        "plant-card-name-3": "Кецубунг",
        "plant-card-name-4": "Кецубунг",
        "plant-card-name-5": "Кецубунг",
        "relax-plants-title": "Купуйте більше рослин, це допомагає вам розслабитись",
        "relax-plants-description": "Lorem Ipsum — це просто текст для заповнення друкарських і наборних індустрій. Lorem Ipsum використовується як стандартний текст."
    }
};


function changeLanguage(language) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const translationKey = element.getAttribute('data-translate');
        element.innerHTML = translations[language][translationKey];
    });
    localStorage.setItem('language', language);
}


window.addEventListener('load', () => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    changeLanguage(savedLanguage);

    document.getElementById('language-toggle-en').addEventListener('click', () => changeLanguage('en'));
    document.getElementById('language-toggle-ua').addEventListener('click', () => changeLanguage('ua'));
});

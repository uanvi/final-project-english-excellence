# English Excellence - Landing Page

Це сховище містить вихідний код цільової сторінки "English Excellence". Сторінка
адаптивна і розроблена для різних пристроїв (робочого столу ПК, планшету,
мобільного). Він рекламує послуги з вивчення англійської мови з різними пакетами
та зручним інтерфейсом.

## Зміст

1. [Огляд проекту](#огляд-проекту)
2. [Використані технології](#використані-ехнології)
3. [Структура файлу](#структура-файлу)
4. [Встановлення](#встановлення)
5. [Особливості](#особливості)
6. [Адаптивний дизайн](#адаптивний-дизайн)
7. [Розгортання](#розгортання)
8. [Деплой](#деплой)
9. [Ліцензія](#ліцензія)

## Огляд проекту

Цільова сторінка «English Excellence» призначена для надання інформації про
уроки англійської мови. Він містить детальну інформацію про послуги, ціни,
викладачів і форму для користувачів, щоб подати заявку.

### Основні розділи:

- **Header Section**: містить навігаційні посилання для швидкого доступу до
  різних розділів
- **Hero Section**: знайомство з сервісом із кнопкою заклику до дії.
- **About Us**: короткий опис платформи та її основних переваг.
- **Our Lessons**: ціни та опис різних пакетів уроків.
- **Power of English**: підкреслює переваги навчального пакету.
- **Meet Our Teachers**: знайомство з вчителями на платформі.
- **Leave an Application**: форма для потенційних студентів, щоб подати свої
  контактні дані.
- **Reviews**: відгуки попередніх студентів.
- **Footer**: посилання на соціальні мережі та контактну інформацію.

## Використані технології

- **HTML5**: мова розмітки для структурування сторінки.
- **CSS3**: стилізація макета, включаючи Flexbox і Grid для швидкої реакції.
- **JavaScript**: для базової взаємодії та функціональності.
- **Адаптивний дизайн**: медіа-запити для адаптації до ПК, планшетів і мобільних
  пристроїв.

## Структура файлу

```bash
English-Excellence/
├── index.html                    # Main HTML file
├── css/                          # Main CSS folder for styling
│   ├── about.css                 # Styles for the "About" section
│   ├── animations.css            # CSS animations
│   ├── application.css           # Styles for the application form
│   ├── back-link.css             # Styles for the back link
│   ├── badges.css                # Styles for badges and awards
│   ├── base.css                  # Base styles and resets
│   ├── burger.css                # Styles for the burger menu
│   ├── container.css             # Layout container styles
│   ├── effects.css               # Visual effects
│   ├── fonts.css                 # Font styles and imports
│   ├── footer.css                # Styles for the footer section
│   ├── header.css                # Styles for the header and navigation
│   ├── hero.css                  # Styles for the Hero section
│   ├── lesson.css                # Styles for the lesson section
│   ├── proposals.css             # Styles for proposals and offers
│   ├── reset.css                 # CSS reset for consistent styling
│   ├── reviews.css               # Styles for the reviews section
│   ├── teachers.css              # Styles for the teachers' section
│   ├── vite-promo.css            # Styles for Vite promotion section
│   └── styles.css                # Main CSS file for styling
├── img/                          # Image assets
│   ├── about/                    # Images for the "About" section
│   ├── application/              # Images for the application form
│   ├── footer/                   # Images for the footer section
│   ├── hero-background/          # Background images for the Hero section
│   ├── proposals/                # Images for proposals and offers
│   ├── reviews/                  # Images for the reviews section
│   ├── teachers/                 # Images for teachers' section
│   ├── webp/                     # WebP format images
│   ├── javascript.svg            # JavaScript logo
│   ├── sprite.svg                # SVG sprite for icons
│   ├── vite-logo.png             # Vite logo image
│   └── logo.svg                  # Website logo
├── public/                       # Public assets
│   └── favicon.ico               # Website favicon
├── partials/                     # HTML partials for modular content
│   ├── about.html                # HTML partial for the "About" section
│   ├── application.html          # HTML partial for the application form
│   ├── back-link.html            # HTML partial for the back link
│   ├── badges.html               # HTML partial for badges and awards
│   ├── burger.html               # HTML partial for the burger menu
│   ├── footer.html               # HTML partial for the footer section
│   ├── header.html               # HTML partial for the header and navigation
│   ├── hero.html                 # HTML partial for the Hero section
│   ├── lesson.html               # HTML partial for the lessons section
│   ├── proposals.html            # HTML partial for proposals and offers
│   ├── reviews.html              # HTML partial for the reviews section
│   ├── teachers.html             # HTML partial for the teachers' section
│   └── vite-promo.html           # HTML partial for Vite promotion section
└── main.js                       # Optional JavaScript file for interactivity
```

## Встановлення

1. Клонуйте репозиторій:

```bash
git клон https://github.com/yourusername/English-Excellence.git
```

2. Переконайтеся, що на вашому комп’ютері встановлено LTS-версію Node.js.
   Завантажте та встановіть його, якщо необхідно.

3. Встановіть залежності проекту, виконавши таку команду в терміналі:

```bash
   npm install
```

4. Запустіть сервер розробки, виконавши:

```bash
 npm run dev
```

5. Відкрийте браузер і перейдіть до http://localhost:5173. Сторінка автоматично
   перезавантажуватиметься, коли ви вносите зміни у файли проекту.

## Особливості

- **Заклик до дії (CTA):** Зрозуміла та зручна кнопка для виходу із програми.
- **Адаптивний макет:** адаптується до різних розмірів екрану, включаючи
  настільний комп’ютер, планшет і мобільні пристрої.
- **Інтерактивні елементи:** Плавне прокручування до різних розділів сторінки.
- **Профілі вчителів:** відображає інформацію про доступних вчителів.
- **Форма заявки:** дозволяє користувачам надсилати свої дані для реєстрації на
  урок.

## Адаптивний дизайн

Дизайн оптимізовано для трьох основних екранів:

- **Настільного комп’ютера:** 1280 пікселів і вище.
- **Планшета:** від 768 пікселів до 1280 пікселів.
- **Мобільного:** 768 пікселів і нижче.

Коригування включають:

- Зміна розміру зображень і блоків вмісту.
- Розташування елементів вертикально на менших екранах.
- Зміна навігаційного меню на згорнутий формат на мобільному телефоні та
  планшеті.
- Оптимізація зображень (JPEG, WebP, 2x для екранів з високою роздільною
  здатністю).

## Розгортання

Щоб розгорнути цей проект, ви можете розмістити його на будь-якій статичній
службі веб-хостингу, наприклад GitHub Pages

### Кроки для створення сторінки GitHub:

1. Надішліть репозиторій на GitHub.
2. У налаштуваннях сховища перейдіть у розділ «Pages».
3. Виберіть основну гілку для розгортання (main).
4. Сторінка буде доступна за адресою
   `https://yourusername.github.io/English-Excellence/`.

## Деплой

2. Створіть свою гілку функцій (`git checkout -b feature/NewFeature`).
3. Зафіксуйте свої зміни (`git commit -m 'Додати деякі функції'`).
4. Надішліть до гілки (`git push origin feature/NewFeature`).
5. Відкрийте запит на отримання.

## Ліцензія

Цей проект ліцензовано згідно з ліцензією MIT.

### Vanilla App Template

Цей проект було створено за допомогою Vite. Для знайомства та налаштування
додаткових можливостей [звернись до документації](https://vitejs.dev/)

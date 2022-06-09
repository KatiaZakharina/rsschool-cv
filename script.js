const portfolioRoot = window.document.querySelector('#portfolio');

const projects = [
  {
    alt: 'GitHub search',
    img: 'img/github-search.jpg',
    deployLink: 'https://tiny-lollipop-e5622f.netlify.app/',
    title: 'GitHub search - React, Redux, Typescript, react-paginate, GitHub API',
    description:
      'Test work for Paralect. Search user and repositories by username',
  },
  {
    alt: 'Art Quiz',
    img: 'img/art-quiz.jpg',
    deployLink: 'https://art-quiz-coursework.herokuapp.com/',
    title: 'Art Quiz - React, Redux, Typescript, react-router, i18next',
    description:
      'The game is an art test with two types of questions. Supports two languages and a dark theme',
  },
  {
    alt: 'Christmas task',
    img: 'img/christmas-task.jpg',
    deployLink: 'https://rolling-scopes-school.github.io/katiazakharina-JSFE2021Q3/christmas-task/',
    title: 'Christmas task - TypeScript, Webpack, custom "drag and drop"',
    description:
      'Christmas game that allows you to sort toys and dress up the Christmas tree with them',
  },
  {
    alt: 'Museum Webpack',
    img: 'img/museum-webpack.jpg',
    deployLink: 'https://rolling-scopes-school.github.io/katiazakharina-JSFE2021Q3/museum-webpack/',
    title: 'Museum - HTML, CSS, TypeScript, Webpack',
    description:
      'Landing page for the Louvre Museum. It contains a custom video player and several sliders. Works with mapbox API and AOS.',
  },
  {
    alt: 'Momentum',
    img: 'img/momentum.jpg',
    deployLink: 'https://rolling-scopes-school.github.io/katiazakharina-JSFE2021Q3/momentum/',
    title: 'Momentum - weather, quotes, and stock APIs',
    description:
      'Momentum is an analog of the Chrome online store application of the same name. To store data, the application uses local storage - local storage.',
  },
  // {
  //   alt: 'Happy Journey',
  //   img: 'img/happy-journey.jpg',
  //   deployLink: 'https://katiazakharina.github.io/HappyJourney/',
  //   title: 'Happy Journey - HTML, CSS, JS',
  //   description:
  //     'Landing page for travel agency. Made with BEM and Bootstrap. Responsive and cross-browser.',
  // },
  // {
  //   alt: 'Mortal Combat',
  //   img: 'img/mortal-combat.jpg',
  //   deployLink: 'https://katiazakharina.github.io/MortalCombatLanding/',
  //   title: 'Mortal Combat - HTML, CSS',
  //   description:
  //     'Landing page for the cinema. Made using the Video and Fancybox libraries. Responsive. Homework at the Glo Academy.',
  // },
];

const generateProjectLayout = project => {
  const { img, alt, deployLink, title, description } = project;
  return `
  <div class="card d-sm-none">
    <div class="card__inner">
      <img class="card__image" src="${img}" alt="${alt}" />
    </div>
    <div class="card__details">
      <a class="card__center link-wrapper"
        href="${deployLink}"
        target="_blank">
        <h5 class="card__title hover-effect">${title}
        </h5>
        <p class="card__text">
          ${description}
        </p>
      </a>
    </div>
  </div>

  <div class="portfolio__item border-left_yellow d-none d-sm-flex">
    <div class="portfolio__description">
      <h5 class="portfolio__title">${title}</h5>
      <p class="portfolio__text">
       ${description}
      </p>
    </div>
    <a href="${deployLink}"
      class="link-wrapper" target="_blank"><img src="${img}" alt="${alt}"
        class="portfolio__img" /></a>
  </div>`;
};

portfolioRoot.innerHTML = projects.map(project => generateProjectLayout(project)).join('');

export const projects = [
  {
    name: 'Filmacorn',
    iconName: '🍿 Filmacorn',
    type: '개인 프로젝트',
    images: [
      { src: './image/Filmacorn/Filmacorn_main.png' },
      { src: './image/Filmacorn/Filmacorn_movies.png' },
      { src: './image/Filmacorn/Filmacorn_watchlist.png' },
      { src: './image/Filmacorn/Filmacorn_search.png' },
      { src: './image/Filmacorn/Filmacorn_login.png' }
    ],
    description:
      '영화의 자세한 정보를 제공하는 서비스로 TMDB API를 이용한 회원가입과 로그인 기능과 "watchlist" 기능으로 사용자들이 원하는 영화 리스트를 보관하고 저장할수 있는 서비스를 제공합니다. 또한 영화를 카테고리화해 추천해주고 자세한 정보를 보여주며 영화를 찾아볼수있는 검색 기능등 편리한 기능들을 포함하고 있습니다. 초기 로딩 시간 단축을 위해 Lazy loading에 집중해 개발하였습니다',
    github: 'https://github.com/soheee-bae/Filmacorn',
    demo: 'https://filmacorn.vercel.app/',
    skills: ['React', 'Next.js', 'SCSS', 'TypeScript', 'TMBD API', 'Lazy loading']

    // blog: ['', ''], // 소개, 개발과 리팩토링, 프로젝트 회고
    // testAccount: { id: '', password: '' }
  },
  {
    name: 'Blog Starter',
    iconName: '✍🏻 Blog Starter',
    type: '개인 프로젝트',
    images: [
      { src: './image/Blog/Blog_MainLight.png' },
      { src: './image/Blog/Blog_Main2Light.png' },
      { src: './image/Blog/Blog_MainDark.png' },
      { src: './image/Blog/Blog_Main2Dark.png' },
      { src: './image/Blog/Blog_PostsLight.png' },
      { src: './image/Blog/Blog_Posts2Light.png' },
      { src: './image/Blog/Blog_PostsDark.png' },
      { src: './image/Blog/Blog_Posts2Dark.png' },
      { src: './image/Blog/Blog_AboutLight.png' },
      { src: './image/Blog/Blog_AboutDark.png' }
    ],
    description:
      'Gatsby와 Graphql을 이용한 블로그를 운영하고 싶은 사람들을 대상으로 한 블로그 스타터 탬플릿입니다. 커스텀 스타일을 원하는 사용자들을 위해 쉬운 하드코딩 문자열 또는 숫자 변경을 위한 깔끔한 폴더 구조 및 정리에 집중해 개발했으며 여러가지의 hook을 포함시켜 페이지네이션, 목차, 테마변경 등의 기능들을 개발했습니다.',
    github: 'https://github.com/soheee-bae/Gatsby-Image-Blog-Starter',
    demo: 'https://gatsbyimageblogstartermain.gatsbyjs.io/',
    skills: ['Gatsby', 'Graphql', 'React', 'SCSS']
    // blog: ['', ''], // 소개, 개발과 리팩토링, 프로젝트 회고
  },
  {
    name: 'Tasting Table',
    iconName: '🥚 Tasting Table',
    type: '개인 프로젝트',
    images: [
      { src: './image/TT/TT_Main.png' },
      { src: './image/TT/TT_Recipes.png' },
      { src: './image/TT/TT_Detail1.png' },
      { src: './image/TT/TT_Detail2.png' },
      { src: './image/TT/TT_Detail3.png' },
      { src: './image/TT/TT_Review.png' },
      { src: './image/TT/TT_Search.png' },
      { src: './image/TT/TT_Profile.png' },
      { src: './image/TT/TT_MyRecipe.png' },
      { src: './image/TT/TT_Bookmark.png' },
      { src: './image/TT/TT_AddRecipe.png' },
      { src: './image/TT/TT_Login.png' }
    ],
    description:
      '"오늘은 뭘 해먹지?" 라는 고민을 가진 사용자들이 각자 공유하고 싶은 레시피를 사진과 글을 통해 공유하고 원하는 레시피를 쉽고 편리하게 찾을수 있는 서비스를 제공합니다. SCSS와 Framer-motion을 이용한 깔끔한 디자인과 소소한 애니매이션을 가지고 있는 이 서비스는 Nodejs, Express, MongoDB를 이용한 회원가입 및 로그인을 통해서 프로필을 생성하고 편집할수 있는 기능이 있으며 북마크 기능을 통해 다시 보고 싶은 레시피를 저장하고 관리할수 있습니다. 또한 원하는 레시피에 사진과 댓글을 달고 점수를 매길수 있는 기능도 개발하였습니다. ',
    github: 'https://github.com/soheee-bae/Tasting-Table',
    demo: 'https://tasting-table.netlify.app/',
    skills: [
      'React',
      'SCSS',
      'TypeScript',
      'NodeJS',
      'Express',
      'Mongoose',
      'MongoDB',
      'Amazon S3',
      'Framer-motion'
    ]
  },
  {
    name: 'Moodie',
    iconName: '😊 Moodie',
    type: '개인 프로젝트',
    images: [
      { src: './image/Moodie/Moodie_Main.png' },
      { src: './image/Moodie/Moodie_ListView.png' },
      { src: './image/Moodie/Moodie_Add.png' },
      { src: './image/Moodie/Moodie_Detail.png' },
      { src: './image/Moodie/Moodie_Highlight.png' },
      { src: './image/Moodie/Moodie_Font.png' },
      { src: './image/Moodie/Moodie_Background.png' },
      { src: './image/Moodie/Moodie_Lang.png' },
      { src: './image/Moodie/Moodie_Empty.png' }
    ],
    description:
      '사용자들이 하루동안 있었던 일들을 정리하며 느꼈었던 감정들을 글, 이모티콘과 사진을 통해 기록할 수 있는 서비스를 제공합니다. 사용자들은 감정에 이름을 주는 과정에서 막연했던 감정을 분명하게 할수 있으며 그 감정의 원인을 찾아보고 미래에는 좀 더 유연하게 대처할수 있는 능력과 메타인지 능력을 기를 수가 있습니다. 여러가지 hook을 통해 언어, 글씨 스타일과 배경색상을 설정할수 있는 기능을 포함시켰으며 사용자는 기록하는 과정중에서 날짜, 이모티콘과 하이라이트 색상을 편집할 수 있습니다. 조금 더 나은 사용성을 주기 위해 저장된 감정들을 캘린더 뷰 또는 리스트 뷰 형태로 한눈에 확인할 수 있습니다.',
    github: 'https://github.com/soheee-bae/Moodie',
    demo: 'https://tasting-table.netlify.app/',
    skills: ['React Native', 'Expo', 'Firebase', 'TypeScript', 'SCSS']
  },
  {
    name: 'Portfolio',
    iconName: '🙋🏻‍♀️ Portfolio',
    type: '개인 프로젝트',
    images: ['', ''],
    description: '개인 포트폴리오로 제 소개 및 개인 프로젝트의 자세한 내용들이 정리 되어있습니다. React three fiber을 이용해 단순히 2D 웹사이트가 아닌 3D개발을 포함시켜 포트폴리오를 조금 더 부간시키는데에 집중해 개발하였고 ',
    github: 'https://github.com/soheee-bae/Portfolio23',
    demo: '',
    skills: ['React Three Fiber', 'SCSS', 'React', 'Javascript', 'Three.js', 'Blender']
  }
];

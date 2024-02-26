import {
  Confluence,
  Css,
  Figma,
  Firebase,
  Git,
  Html,
  Intellij,
  Javascript,
  Jira,
  Materialui,
  Nextjs,
  React,
  Sass,
  Slack,
  Storybook,
  Typescript,
  Vscode
} from '../icons';

export const FESkills = [
  {
    icon: <Html />,
    label: 'HTML5',
    description: '',
    disable: true
  },
  {
    icon: <Css />,
    label: 'CSS3',
    description: '',
    disable: true
  },
  {
    icon: <Sass />,
    label: 'SASS',
    description: 'SASS'
  },
  {
    icon: <Materialui />,
    label: 'MUI',
    description:
      'MUI를 통해 보다 빠르게 컴포넌트를 개발하며 개발 속도를 향상 시키는데에 집중하였습니다.'
  }, 
  {
    icon: <Javascript />,
    label: 'JS(ES6)',
    description: '',
    disable: true
  },
  {
    icon: <React />,
    label: 'React',
    description:
      'JavaScript에서 좀 더 나아가 프로젝트의 범위가 커지며 코드 재사용성과 clean code에 대한 고민과 함께 사용하기 시작한 Framework입니다. 컴포넌트 단위로 세분화해 개발하는 데에 집중하여 효율적으로 일을 진행시켰고 React Hook과 React query에 대한 이해도를 통해 상태관리를 해주고 코드 수를 감소하며 로직들을 단순화하였습니다.'
  },
  {
    icon: <Nextjs />,
    label: 'Next.js',
    description:
      'React과 함께 사용하기 시작한 Framework입니다. SEO를 위한 SSR의 pre-reloading을 통해 미리 데이터가 렌더링된 페이지를 가져오게끔 하여 사용자에게 더 좋은 경험을 주는데에 집중하였습니다.'
  },
  {
    icon: <Typescript />,
    label: 'TypeScript',
    description:
      '함께 개발하는 환경에서 코드 안정성에 대한 고민을 시작했을때 Generic Type과 Utility Type에 대한 이해도를 통해 코드에 대한 안전성과 퀄리티를 높였고 함수에 매개변수로 들어오는 값의 type을 정확하게 하여 직관적인 코드를 작성했습니다.'
  },
  {
    icon: <Storybook />,
    label: 'Storybook',
    description:
      '아토믹 디자인 패턴을 활용하여 컴포넌트 단위 개발을 했을 때 유용하게 사용되었던 UI 컴포넌트 개발 오픈소스 툴입니다. 특히 공통 컴포넌트를 개발할 때 스토리북을 통해서 다른 개발자들에게 공유하여 직접 사용하게 해 보며 더 나은 설계에 대한 고민과 리팩토링을 하였고 개발자뿐만 아니라 디자이너도 쉽게 컴포넌트를 미리 확인하는 동시에 그에 대한 피드백을 받으며 일의 속도를 높였던 경험이 있습니다.'
  }
];

export const ToolsSkill = [
  {
    icon: <Intellij />,
    label: 'IntelliJ',
    description:
      '주로 일 목적으로 사용하는 코딩툴이며, 필요한 확장프로그램들을 설치해 사용하고 있습니다.'
  },
  {
    icon: <Vscode />,
    label: 'VS Code',
    description:
      '개인 프로젝트를 할 때 주로 사용하는 코딩툴이며, 필요한 확장프로그램들을 설치해 사용하고 있습니다.'
  },
  {
    icon: <Git />,
    label: 'Git',
    description:
      'commit, push, pull, clone, rebase 등 git 명령어를 사용하여 쉽게 repository나 다른 팀원들의 branch에 접근하여 개발하는 데에 사용하고 있습니다.'
  },
  {
    icon: <Jira />,
    label: 'Jira',
    description:
      '프로젝트를 세분화해해야 할 일들을 잘 나누어 티켓으로 정리하며 먼저 해야 할 일들을 순서대로 나열해 일에 능률을 높이는 데에 집중해서 사용하고 있습니다. 또한 티켓들을 단계별로 옮기며 다른 팀원들에게도 진행상황을 쉽게 알리는 역할로 사용되고 있습니다.'
  },
  {
    icon: <Confluence />,
    label: 'Confluence',
    description:
      '팀원들이 알아야 할 업데이트된 내용들이나 새롭게 배운 내용들을 정리하여 기록하고 공유하는데에 사용했습니다.'
  },
  {
    icon: <Slack />,
    label: 'Slack',
    description:
      '일 목적으로 매일 사용했던 커뮤니케이션 툴이며 채널이나 개인 메시지로 소통하여 빠른 속도로 일을 진행하는데 집중했습니다.'
  },
  {
    icon: <Figma />,
    label: 'Figma',
    description:
      '개인 프로젝트 또는 일 목적으로 웹 디자인을 구현할 때 사용되었습니다. 특히 디자이너와 직접적으로 컴포넌트 단위 디자인과 페이지 단위 디자인에 소통할 때 주로 사용되어 디자인 작업을 더욱 빠르고 효율적으로 진행시켰습니다.'
  },
  {
    icon: <Firebase />,
    label: 'Firebase',
    description:
      '프론트엔드 위주의 프로젝트를 할 때 firebase를 적극 활용하여 개발한 경험이 있습니다. firestore, storage, hosting 등을 통해 개인 프로젝트에 필요한 데이터들을 저장하거나 편집하고 결과물을 배포하는 데 사용했습니다.'
  }
];

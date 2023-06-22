import { useContext } from 'react';
import styles from './MiniAbout.module.scss';
import ToggleContext from '../../context/toggleContext';

function MiniAbout() {
  const { isLightMode } = useContext(ToggleContext);

  return (
    <div className={styles.miniAbout} data-darkMode={!isLightMode}>
      <ul>
        <li>
          오랜 유학생활을 통해 쌓아올린 경험을 토대로 남다른 도전정신을 가지고 새로운 환경이나
          영역에 긍정적으로 도전하는것을 즐깁니다.
        </li>
        <li>꾸준함의 가치가 얼마나 중요한지 알기에 1일 1커밋 운동을 실천하고 있습니다.</li>{' '}
        <li>
          기록의 중요성을 잘 알기에 배운 내용이나 프로젝트 과정들을 정리하여 기술 블로그에 꾸준히
          기록중입니다.
        </li>
        <li>코드 재사용성과 Clean code에 대한 고민을 진지하게 하고 있습니다. </li>
        <li>
          넓은 세상에서 다양한 많은 사람들을 만나고 함께하며 어떻게 하면 더 좋은 의사 소통을 할수
          있는지를 고민합니다.
        </li>
      </ul>
    </div>
  );
}

export default MiniAbout;

import { useContext } from 'react';
import styles from './MiniAbout.module.scss';
import ToggleContext from '../../context/toggleContext';

function MiniAbout() {
  const { isLightMode } = useContext(ToggleContext);

  return (
    <div className={styles.miniAbout} data-darkMode={!isLightMode}>
      <ul>
        <li>안녕하세요! 2년 차 프론트엔드 개발자 배소희입니다.</li>
        <li>
          오랜 유학생활을 통해 쌓아올린 경험을 토대로 남다른 도전정신을 가지고 새로운 환경이나
          영역에 긍정적으로 도전하는것을 즐깁니다.
        </li>
        <li>
          꾸준함의 가치가 얼마나 중요한지 알기에 1일 1커밋 운동을 실천하고 배운 내용이나 프로젝트
          과정들을 정리하여 기술 블로그에 꾸준히 기록중 입니다.
        </li>
        <li>코드 재사용성과 Clean code에 대한 고민을 진지하게 하고 있습니다.</li>
        <li>
          넓은 세상에서 다양한 많은 사람들을 만나고 함께하며 같이 고민하고 대화를 통해 문제를 해결해
          나아가는 능력을 길렀습니다.
        </li>
      </ul>
    </div>
  );
}

export default MiniAbout;

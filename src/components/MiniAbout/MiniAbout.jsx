import { useContext } from 'react';
import styles from './MiniAbout.module.scss';
import ToggleContext from '../../context/toggleContext';

function MiniAbout() {
  const { isLightMode } = useContext(ToggleContext);

  return (
    <div className={styles.miniAbout} data-darkMode={!isLightMode}>
      <ul>
        <li>안녕하세요, 5년차 프론트엔드 개발자 배소희입니다.</li>
        <br />
        <li>
          오랜 유학 생활을 통해 얻은 유연한 사고와 적응력을 바탕으로, 새로운 기술과 낯선 환경에서도
          주도적으로 문제를 해결해왔습니다.
        </li>
        <br />
        <li>
          저는 <b>어제보다 더 나은 코드</b>를 지향합니다. 단순히 기능 구현에 그치지 않고, 코드의
          재사용성(Reusability)과 클린 코드(Clean Code)를 끊임없이 고민하며 유지보수가 가능한
          결과물을 만들어 내려고 노력하고 있습니다.
        </li>
        <br />
        <li>
          넓은 세상에서 배운 소통의 가치를 코드로 녹여내며, 사용자와 팀원 모두가 행복한 서비스를
          만들고 싶습니다.
        </li>
      </ul>
    </div>
  );
}

export default MiniAbout;

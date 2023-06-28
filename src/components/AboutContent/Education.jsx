import clsx from 'clsx';
import { school, studies } from '../../datas/Educations';
import styles from './AboutContent.module.scss';

function Education() {
  return (
    <div className={styles.content}>
      <div className={styles.educationContent}>
        <div>
          <p className={styles.subtitle}>University of Alaska Anchorage</p>
          <div className={styles.hr} />
          <ul>
            {school.map((sc) => (
              <li className={styles.educationList} key={sc.label}>
                {sc.icon}
                {sc.label}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className={clsx(styles.subtitle, styles.subtitleKor)}>컴퓨터공학 수강과목</p>
          <div className={styles.hr} />
          <ul>
            {studies.map((sc) => (
              <li key={sc.label} className={styles.educationList}>
                {sc.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Education;

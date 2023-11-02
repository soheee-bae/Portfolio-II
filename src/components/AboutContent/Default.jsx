import styles from './AboutContent.module.scss';

function Default() {
  return (
    <div className={styles.defaultContainer}>
      <p>키보드를 통해</p>
      <div className={styles.defaultContent}>
        <span>Career</span>, <span>Education</span>, <span>Skill</span>
      </div>

      <p>에 대해서 알아보세요!</p>
    </div>
  );
}
export default Default;

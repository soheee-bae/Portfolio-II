import { FESkills, ToolsSkill } from '../../datas/Skills';
import styles from './AboutContent.module.scss';

function Skill() {
  return (
    <div className={styles.content}>
      <div className={styles.skillsContent}>
        <div className={styles.skillContent}>
          <p className={styles.subtitle}>Frontend</p>
          <ul className={styles.skills}>
            {FESkills.map((skill) => (
              <li key={skill.label} className={styles.skill} data-skill={skill.label}>
                {skill.icon}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.skillContent}>
          <p className={styles.subtitle}>Tools & Collaboration</p>
          <ul className={styles.skills}>
            {ToolsSkill.map((skill) => (
              <li key={skill.label} className={styles.skill} data-skill={skill.label}>
                {skill.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Skill;

import { FESkills, ToolsSkill } from '../../datas/Skills';
import Tooltip from '../Tooltip/Tooltip';
import styles from './AboutContent.module.scss';

function Skill() {
  return (
    <div className={styles.content}>
      <div className={styles.skillsContent}>
        <div>
          <p className={styles.subtitle}>Frontend</p>
          <ul className={styles.skills}>
            {FESkills.map((skill) => (
              <Tooltip
                key={skill.label}
                trigger={
                  <li className={styles.skill} data-skill={skill.label}>
                    {skill.icon}
                  </li>
                }
              >
                <div>
                  <p>{skill.label}</p>
                  <p className={styles.description}>{skill.description}</p>
                </div>
              </Tooltip>
            ))}
          </ul>
        </div>
        <div>
          <p className={styles.subtitle}>Tools & Collaboration</p>
          <ul className={styles.skills}>
            {ToolsSkill.map((skill) => (
              <Tooltip
                key={skill.label}
                trigger={
                  <li key={skill.label} className={styles.skill} data-skill={skill.label}>
                    {skill.icon}
                  </li>
                }
              >
                <div>
                  <p>{skill.label}</p>
                  <p>{skill.description}</p>
                </div>
              </Tooltip>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Skill;

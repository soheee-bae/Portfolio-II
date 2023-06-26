import styles from './AboutContent.module.scss';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';

function Education() {
  return (
    <div className={styles.content}>
      <div className={styles.educationContent}>
        <div>
          <SchoolOutlinedIcon />
          <p className={styles.subtitle}>University of Alaska Anchorage</p>
        </div>
        <div>
          <ComputerOutlinedIcon />
          <p>Bachelor of Science, Computer Science </p>{' '}
        </div>
        <div>
          <EventNoteOutlinedIcon />
          <p>Aug 2015 - Dec 2020</p>
        </div>
        <div>
          <EmojiEventsOutlinedIcon />
          <p>Honors : cum laude (GPA : 3.66 / 4)</p>
        </div>
      </div>
    </div>
  );
}
export default Education;

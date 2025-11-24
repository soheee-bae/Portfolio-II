import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './ResumeBtn.module.scss';

function ResumeBtn() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div onClick={handleClick} className={styles.nav}>
        Resume
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem onClick={handleClose}>
          <Link
            to="https://soheedev.notion.site/2ef5ab86c81a4609b932a19126f0146f"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={styles.resumeLink}>
            Korean
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            href="/assets/Resume.pdf"
            download
            className={styles.resumeLink}
            target="_blank" //
            rel="noopener noreferrer">
            English
          </a>
        </MenuItem>
      </Menu>
    </>
  );
}

export default ResumeBtn;

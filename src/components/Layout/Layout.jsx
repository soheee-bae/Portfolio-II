import { a } from '@react-spring/web';
import { motion } from 'framer-motion';
import ToggleContext from '../../context/toggleContext';
import { useContext } from 'react';

const variants = {
  initial: {
    opacity: 0,
    scale: 0.95
  },
  finally: {
    opacity: 1,
    scale: 1
  }
};

function Layout({ children, className }) {
  const { x } = useContext(ToggleContext);

  return (
    <a.div
      style={{
        backgroundColor: x.to([0, 1], ['var(--whiteColor350)', 'var(--blackColor350)'])
      }}>
      <motion.div
        className={className}
        variants={variants}
        initial="initial"
        animate="finally"
        transition={{
          type: 'spring',
          duration: 0.8,
          delay: 0.2
        }}>
        {children}
      </motion.div>
    </a.div>
  );
}

export default Layout;

import { a } from '@react-spring/web';
import { motion } from 'framer-motion';
import ToggleContext from '../../context/toggleContext';
import { useContext } from 'react';

const scaleVariant = {
  initial: {
    opacity: 0,
    scale: 0.95
  },
  finally: {
    opacity: 1,
    scale: 1
  }
};

const defaultVariant = {
  initial: {
    opacity: 0
  },
  finally: {
    opacity: 1
  }
};

function Layout({ children, className, isFullScreen = true, animationType }) {
  const { x } = useContext(ToggleContext);

  return (
    <a.div
      style={{
        backgroundColor: x.to([0, 1], ['var(=--whiteColor350)', 'var(--blackColor350)'])
      }}>
      <motion.div
        className={className}
        variants={
          animationType === 'default'
            ? defaultVariant
            : animationType === 'scale'
            ? scaleVariant
            : null
        }
        initial="initial"
        animate="finally"
        transition={{
          type: 'spring',
          duration: 0.8,
          delay: 0.4
        }}
        style={{ height: isFullScreen ? 'calc(100vh - 70px)' : 'auto' }}>
        {children}
      </motion.div>
    </a.div>
  );
}

export default Layout;

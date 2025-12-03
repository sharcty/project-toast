import React from 'react';
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, dismissToast, id, children }) {
  const IconComponent = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${defineStyle(variant)}`}>
      <div className={styles.iconContainer}>
        <IconComponent size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button
        className={styles.closeButton}
        onClick={() => {
          dismissToast(id);
        }}
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

function defineStyle(variant) {
  if (variant === 'notice') {
    return styles.notice;
  } else if (variant === 'warning') {
    return styles.warning;
  } else if (variant === 'success') {
    return styles.success;
  } else {
    return styles.error;
  }
}

export default Toast;

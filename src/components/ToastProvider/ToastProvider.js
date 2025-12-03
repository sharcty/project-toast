import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider() {
  const [playbackRate, setPlaybackRate] = React.useState(1);
  const resetPlaybackRate = React.useCallback(() => {
    setPlaybackRate(1);
  }, []);

  return (
    <ToastContext.Provider value={{ playbackRate, resetPlaybackRate }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

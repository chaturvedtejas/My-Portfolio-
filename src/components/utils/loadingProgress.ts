export const setProgress = (setLoading: (value: number) => void) => {
  let percent = 0;

  const interval = window.setInterval(() => {
    if (percent <= 50) {
      const rand = Math.round(Math.random() * 5);
      percent = Math.min(100, percent + rand);
      setLoading(percent);
    } else {
      percent = Math.min(100, percent + Math.round(Math.random() * 2));
      setLoading(percent);
      if (percent >= 100) {
        window.clearInterval(interval);
      }
    }
  }, 100);

  function clear() {
    window.clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<void>((resolve) => {
      const intervalCheck = window.setInterval(() => {
        if (percent >= 100) {
          window.clearInterval(intervalCheck);
          resolve();
        }
      }, 50);
    });
  }

  return { clear, loaded };
};

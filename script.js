window.onload = () => {
  const container = document.querySelector('.main');
  const slideLinks = document.querySelectorAll('a[href]');

  function reset() {
    container.querySelectorAll('.page').forEach(element => {
      if (element?.classList.contains('show'))
        element?.classList.remove('show');
    });
  };
  
  slideLinks.forEach(e => {
    e.addEventListener('click', function(event) {
      event.preventDefault();
      reset();
      const targetPage = container.querySelector(e.getAttribute('href'));
      targetPage.classList.add('show');
    });
  });

  requestWakeLock();
};

let wakeLock = null;

const requestWakeLock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request('screen');
    wakeLock.addEventListener('release', () => {
    });
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
};

const releaseWakeLock = async () => {
  if (wakeLock) {
    await wakeLock.release();
    wakeLock = null;
  }
};
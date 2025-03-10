window.onload = () => {
  const container = document.querySelector('.main');
  const slideLinks = document.querySelectorAll('a[href]');
  
  slideLinks.forEach((e, i) => {
    e.addEventListener('click', function(event) {
      event.preventDefault();
      container.querySelectorAll('.page').forEach(el => {
        console.log(el);
        el.style.right = i * 100 + "%";
      });
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
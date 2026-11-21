// Nhạc nền + tự cuộn nhẹ cho page-2.html.
(() => {
  const audio = document.getElementById('bg-music');
  const musicButton = document.getElementById('music-toggle');
  const scrollButton = document.getElementById('auto-scroll-toggle');
  if (!audio || !musicButton || !scrollButton) return;

  // MUSIC: đặt file nhạc được phép sử dụng tại assets/music.mp3.
  let musicOn = false;
  const setMusicButton = (on, message) => {
    musicOn = on;
    musicButton.setAttribute('aria-pressed', String(on));
    musicButton.innerHTML = on ? '♫ <span>Tắt nhạc</span>' : '♫ <span>' + (message || 'Bật nhạc') + '</span>';
    musicButton.title = on ? 'Tắt nhạc nền' : (message || 'Bật nhạc nền');
  };
  const playMusic = async () => {
    try {
      await audio.play();
      setMusicButton(true);
    } catch (error) {
      setMusicButton(false, audio.error ? 'Kiểm tra file nhạc' : 'Chạm để bật nhạc');
    }
  };
  musicButton.addEventListener('click', async () => {
    if (musicOn && !audio.paused) { audio.pause(); setMusicButton(false); }
    else await playMusic();
  });
  audio.addEventListener('play', () => setMusicButton(true));
  audio.addEventListener('pause', () => setMusicButton(false));
  audio.addEventListener('error', () => setMusicButton(false, 'Thêm music.mp3'));

  // Cố gắng tự phát sau thao tác Mở thiệp ở trang đầu. Một số trình duyệt
  // vẫn yêu cầu khách chạm nút nhạc lần đầu; nút luôn hiển thị để bật thủ công.
  let requested = false;
  try { requested = sessionStorage.getItem('weddingMusicRequested') === '1'; sessionStorage.removeItem('weddingMusicRequested'); } catch (_) {}
  if (requested) playMusic();

  // AUTO SCROLL: tốc độ chậm, có nút dừng/chạy lại; tự dừng khi khách tự cuộn.
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let running = !reduceMotion;
  let frame = 0;
  let lastTime = 0;
  const speed = 17; // pixel/giây — chỉnh số này để nhanh/chậm hơn
  const updateScrollButton = () => {
    scrollButton.setAttribute('aria-pressed', String(running));
    scrollButton.innerHTML = running ? 'Ⅱ <span>Tạm dừng cuộn</span>' : '▶ <span>Tiếp tục cuộn</span>';
    scrollButton.title = running ? 'Tạm dừng cuộn tự động' : 'Tiếp tục cuộn tự động';
  };
  const stopScroll = () => { running = false; cancelAnimationFrame(frame); updateScrollButton(); };
  const step = (time) => {
    if (!running) return;
    if (!lastTime) lastTime = time;
    const delta = Math.min((time - lastTime) / 1000, 0.05);
    lastTime = time;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY >= max - 2) { stopScroll(); return; }
    window.scrollTo(0, Math.min(max, window.scrollY + speed * delta));
    frame = requestAnimationFrame(step);
  };
  const startScroll = () => {
    if (reduceMotion) return;
    running = true; lastTime = 0; updateScrollButton();
    cancelAnimationFrame(frame); frame = requestAnimationFrame(step);
  };
  scrollButton.addEventListener('click', () => running ? stopScroll() : startScroll());
  ['wheel', 'touchstart', 'keydown'].forEach(type => {
    window.addEventListener(type, (event) => {
      if (type === 'keydown' && !['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(event.key)) return;
      stopScroll();
    }, { passive: true });
  });
  updateScrollButton();
  if (running) setTimeout(startScroll, 1800);
})();

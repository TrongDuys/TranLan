// Hiệu ứng cánh hoa nhẹ trên cả hai trang.
// Tự tắt nếu khách truy cập bật Reduce Motion trên thiết bị.
(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  for (let i = 0; i < 13; i++) {
    const petal = document.createElement('i');
    petal.className = 'petal';
    petal.style.setProperty('--left', Math.random() * 100 + 'vw');
    petal.style.setProperty('--drift', (Math.random() * 160 - 80) + 'px');
    petal.style.setProperty('--duration', (12 + Math.random() * 13) + 's');
    petal.style.setProperty('--delay', (-Math.random() * 24) + 's');
    document.body.appendChild(petal);
  }
})();

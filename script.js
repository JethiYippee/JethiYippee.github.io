const avatar = document.querySelector('.avatar');
const fallback = document.querySelector('.avatar-fallback');
const marqueeField = document.querySelector('.marquee-field');

function fillMarqueeField() {
  const rowHeight = 30;
  const rowCount = Math.ceil(window.innerHeight / rowHeight) + 2;
  const allRows = [...marqueeField.querySelectorAll('.marquee-row')];

  allRows.slice(rowCount).forEach((row) => row.remove());

  const existingRows = marqueeField.querySelectorAll('.marquee-row');

  existingRows.forEach((row, index) => {
    row.classList.toggle('marquee-row--right', index % 2 === 1);
    row.classList.toggle('marquee-row--left', index % 2 === 0);
    row.classList.toggle('marquee-row--faint', index % 3 === 2);
  });

  for (let index = existingRows.length; index < rowCount; index += 1) {
    const row = document.createElement('div');
    row.className = `marquee-row ${index % 2 === 1 ? 'marquee-row--right' : 'marquee-row--left'}${index % 3 === 2 ? ' marquee-row--faint' : ''}`;
    row.innerHTML = `<div class="marquee-track">${'<span>meow :3</span>'.repeat(32)}</div>`;
    marqueeField.append(row);
  }
}

fillMarqueeField();
window.addEventListener('resize', fillMarqueeField);

avatar.addEventListener('error', () => {
  avatar.style.display = 'none';
  fallback.style.display = 'grid';
});

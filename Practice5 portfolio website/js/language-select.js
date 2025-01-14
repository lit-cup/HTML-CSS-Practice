document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.querySelector('.language-select');
    const selected = document.querySelector('.select-selected');
    const items = document.querySelector('.select-items');
    
    selected.addEventListener('click', () => {
        languageSelect.classList.toggle('open');
    });
    
    items.addEventListener('click', (e) => {
        if (e.target.closest('div')) {
          const selectedItem = e.target.closest('div');
          const imgSrc = selectedItem.querySelector('img').src;
          const lang = selectedItem.getAttribute('data-lang');
    
          // 更新選中的內容
          selected.innerHTML = `<img src="${imgSrc}" alt="icon">`;
    
          // 模擬語言切換邏輯
          //alert(`切換到語言：${text}`);
          languageSelect.classList.remove('open');
        }
    });

    
});

document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.querySelector('.language-select');
    const selected = document.querySelector('.select-selected');
    const items = document.querySelector('.select-items');
    const menuItems = document.querySelectorAll('nav .menu li a');
    
    
    //menuheightlight
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });
    
    //translate language
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


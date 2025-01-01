document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.querySelector('.register-form');
    const tableBody = document.querySelector('.responsive-table tbody');
    //監聽表單送出事件
    form.addEventListener('submit', (e) => {
        //防止頁面重新預載
        e.preventDefault();
        //取得表單欄位的值
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();
        const phone = document.getElementById('Phone').value.trim();
        const otherHabit = document.getElementById('other-habit').value.trim();
        //取得性別與興趣的值(已全部有打勾的元素
        const gender = document.querySelector('input[name="gender"]:checked');
        const habits = Array.from(document.querySelectorAll('input[name="habit"]:checked')).map(check => check.nextElementSibling.textContent);
        if(document.querySelector('input[name="other-habit"]:checked')){
            habits.push(otherHabit);
        }
        //檢查必填欄位是否有填寫
        if (!name || !email || !password || !confirmPassword || !phone || !gender === null) {
            console.log('請填寫所有必填欄位!');
            return;
        }
        //檢查密碼是否一致
        if(password !== confirmPassword){
            alert('密碼不一致!');
            return;
        }
        //檢查手機號碼格式
        if(!/^\d{10}$/.test(phone)){
            console.log('手機號碼格式錯誤!');
            return;
        }
        //新增一列到表格
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${gender.nextElementSibling.textContent}</td>
            <td>${habits.join(',') || "這個人很神祕"}</td>
            <td>${phone}</td>
        `;
        //將新列加入表格
        tableBody.appendChild(newRow);
        //清空表單
        form.reset();
    });
});
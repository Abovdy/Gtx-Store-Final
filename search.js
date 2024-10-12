document.querySelector('.search-btn').addEventListener('click', function() {
    const searchValue = document.getElementsByName('search')[0].value.toLowerCase();
    const elementsWithNames = document.querySelectorAll('[name]');
    let found = false;

    elementsWithNames.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchValue) && searchValue) {
            found = true;
            item.scrollIntoView({ behavior: 'smooth', block: 'center' }); // التمرير للعنصر
            item.style.backgroundColor = 'yellow'; // تسليط الضوء على العنصر
        } else {
            item.style.backgroundColor = ''; // إزالة التظليل من العناصر الأخرى
        }
    });

    if (!found) {
        alert('لا توجد نتائج مطابقة.');
    }
});
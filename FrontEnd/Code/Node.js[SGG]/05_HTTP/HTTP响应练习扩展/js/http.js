//点击单元格可以高亮显示
let tds = document.querySelectorAll('td');
tds.forEach(item => {
    item.onclick = function () {
        this.style.background = 'red';
    }
})
const addBtn = document.getElementsByTagName("button");
const links = document.links;

addBtn[0].onclick = () => {
    let name = document.getElementsByName("name")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let money = document.getElementsByName("money")[0].value;
    const table = document.querySelectorAll("tbody")[0];
    /*
        点击超链接 默认会发生跳转行为 并在地址栏后加上值
        在事件中可以通过取消默认行为来阻止超链接的跳转 
            使用return false;
                这种方式 适用于所有默认行为 但只在 xxx.xxx = function()这种形式绑定的事件中才适用
    */
    //此方式👇容易被XSS注入！
    // table.insertAdjacentHTML("beforeend", `<tr><td>${name}</td><td>${email}</td><td>${money}</td><td><a href="javascript:;">删除</a></td></tr>`);
    //通过textContent解决XSS注入问题
    const tr = document.createElement("tr");
    const nameTd = document.createElement("td");
    const emailTd = document.createElement("td");
    const moneyTd = document.createElement("td");
    nameTd.textContent = name;
    emailTd.textContent = email;
    moneyTd.textContent = money;
    tr.appendChild(nameTd);
    tr.appendChild(emailTd);
    tr.appendChild(moneyTd);
    tr.insertAdjacentHTML("beforeend", '<td><a href="javascript:;">删除</a></td>');
    table.appendChild(tr);
    //通过单独绑定事件响应函数来达到删除的目的
    links[links.length - 1].onclick = deleteFun;
}

const deleteFun = function () {
    let flag = confirm("确认要删除吗？");
    flag ? this.parentNode.parentNode.remove() : null;
}
const addBtn = document.getElementsByTagName("button");
const links = document.links

addBtn[0].onclick = () => {
    let name = document.getElementsByName("name")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let money = document.getElementsByName("money")[0].value;
    const table = document.querySelectorAll("tbody")[0];
    table.insertAdjacentHTML("beforeend", `<tr><td>${name}</td><td>${email}</td><td>${money}</td><td><a href='javascript:;'>删除</a></td></tr>`);
}


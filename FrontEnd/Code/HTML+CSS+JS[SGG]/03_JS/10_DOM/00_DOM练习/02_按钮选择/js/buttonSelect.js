const reset = document.getElementById("no");
const all = document.getElementById("all");
const check_all = document.getElementById("check-all");
const reverse = document.getElementById("reverse");
const send = document.getElementById("send");
const allcheck = document.getElementsByName("hobby");
const form = document.getElementsByTagName("form");
let v = 0;

check_all.onchange = () => {
    if (check_all.checked == false) {
        reset.onclick();
    } else {
        all.onclick();
    }
}

all.onclick = () => {
    check_all.checked = true;
    for (let i = 0; i < allcheck.length; i++) {
        allcheck[i].checked = true;
    }
}

reset.onclick = () => {
    check_all.checked = false;
    for (let i = 0; i < allcheck.length; i++) {
        allcheck[i].checked = false;
    }
}

reverse.onclick = () => {
    for (let i = 0; i < allcheck.length; i++) {
        allcheck[i].checked = allcheck[i].checked == false ? true : false;
    }
}

send.onmousemove = () => {
    send.hidden = true;
}

for (let i = 0; i < allcheck.length; i++) {
    allcheck[i].onchange = () => {
        if (allcheck[i].checked == true) {
            v++;
            if (v == 4) {
                check_all.checked = true;
            }
        } else {
            v--;
            check_all.checked = false;
        }
    }

}
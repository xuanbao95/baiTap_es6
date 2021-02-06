document.querySelector("button").onclick = function () {
    let staff = {};
    let arrInput = document.querySelectorAll(".form-group .info, .form-group select");
    for (let i = 0; i < arrInput.length; i++) {
        let tagInput = arrInput[i];
        let { id, value, } = tagInput;
        staff = { ...staff, [id]: value, };
    };
    let heSoLuong = document.getElementById("heSoLuong").value;
    let LuongCoBan = document.getElementById("luongCoban").value;
    let tongLuong = heSoLuong * LuongCoBan;






    document.getElementById("tongLuong").innerHTML = tongLuong;
}
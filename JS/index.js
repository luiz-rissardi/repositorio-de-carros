let arr = [];
let group = document.querySelectorAll(".card");
let obj = {
    img: "",
    currency: 0,
    desc: ""
};

$(".btn").click(() => {
    let largura = window.screen.width;
    let id = event.target.id;
    obj.currency = Number($("#" + id).val());
    obj.img = $("#" + id).siblings('img')[0].src;
    obj.desc = $("#" + id).prev().html();
    $("#imgstore")[0].src = obj.img;
    $("#preco").text("Preço:" + obj.currency)
    if (largura > 426) {
        $(".menu").animate({ left: "50%" }, { Easings: "swing", duration: 1000 })
    }
    else {
        $(".menu").animate({ left: "0%" }, { Easings: "swing", duration: 1000 })
    }
})

$("#voltar").click(() => {
    $(".menu").animate({ left: "100%" }, 1000)
})

$("#comprar").click(() => {
    arr = JSON.parse(localStorage.getItem("__DATAS__"));
    if (!Array.isArray(arr)) {
        arr = [];
    }
    arr.push(obj)
    localStorage.setItem("__DATAS__", JSON.stringify(arr));
    $(".menu").animate({ left: "100%" }, 1000);
})


$("#search").on({
    keyup: () => {
        let key = $('#search').val();
        let regExp = new RegExp(key, "gi");
        for (var i = 0; i < group.length; i++) {
            if (regExp.test(group[i].innerHTML)) {
                group[i].style.display = "block"
            }
            else {
                group[i].style.display = "none"
            }
        }
    }
})
$(".navbar2").click(() => {
    $("body").append(`<div class="menu1">
    <nav>
                <ul>
                    <li>
                            <a href="index.html" >Home</a>
                            <a href="index2.html">Comprar</a>
                            <a href="index3.html">Privacy</a>
                    </li>
                </ul>
            </nav>
    </div>`)
    $(".menu1").animate({ left: "0%" }, { Easings: "swing", duration: 1000 })
})


let arr2 = [];
let conta = 0;

$(document).ready(()=>{
    arr2 = JSON.parse(localStorage.getItem("__DATAS__"))
    arr2.forEach((item,index)=>{
        $(".contentCard").append(`<div class="card">
        <div class="slide-card">
            <img src=${item.img} alt="">
            <div class="desc">
                ${item.desc}
            </div>
        </div>
    </div>`);
    conta += item.currency;
    $("#total").text("Compras totais :"+Number(index+1))
    })
    $("#valor").text("Valor a pagar :R$"+conta)
})

$("#finalizar").click(()=>{
    alert("pagamento realizado com sucesso !");
    localStorage.clear();
    location.reload();
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
var dataSource = getCartFromCookie();

function atualizarItemCookie(item){
    var cart = getCartFromCookie();

    cart.forEach(x => {
        if(x.B1_COD == item.B1_COD){
            x.qtd = item.qtd;
        }
    });

    writeCookie("cart", JSON.stringify(cart), 1);
}

function removerItemCookie(item){
    var cart = getCartFromCookie();

    cart = cart.filter(x => x.B1_COD != item.B1_COD);

    writeCookie("cart", JSON.stringify(cart), 1);
}

function getCartFromCookie(){
    var cookieCart = readCookie("cart");

    return JSON.parse(cookieCart);
}

$(document).ready(function () {
    var dataGrid = $("#gridContainer").dxDataGrid({
        dataSource: dataSource,
        remoteOperations: {
            paging: true,
            filtering: true,
        },   
        columnsAutoWidth: true,
        filterRow: {
            visible: false
        },
        headerFilter: {
            visible: false
        },
        showColumnHeaders: false,
        // groupPanel: {
        //     visible: true
        // },
        scrolling: {
            rowRenderingMode: 'virtual'
        },
        pager: {
            allowedPageSizes: [10, 20, 50],
            showPageSizeSelector: true
        },
        // searchPanel: {
        //     width: 300,
        //     visible: true,
        //     highlightCaseSensitive: true
        // },
        showBorders: true,
        columns: [
            {
                caption: "Photo",
                dataField: "IMAGE",
                width: 100,
                visible: false,
            },{
                caption: "Código do produto",
                dataField: "B1_COD",
            },{
                dataField: "B1_DESC",
                visible: false,
            },{
                dataField: "DA1_PRCVEN",
            },{
                dataField: "PACK",
            },{
                dataField: "B5_EMBALT",
            },{
                dataField: "B5_EMBLAR",
            },{
                dataField: "B5_EMBCOM",
            },{
                dataField: "B5_CEME",
            }
        ],
        rowTemplate: function (container, item) {
            var data = item.data;
            var html = "";
            var quantidade = data.qtd;
            var price = data.DA1_PRCVEN.toLocaleString('pt-br', {minimumFractionDigits: 2});

            html += `<tbody class='dx-row'>`;
                html += `<tr class='row-item'>`;
                    html += `<td>`;
                        html += `<div class='thumbnail' style="background-image: url(${data.IMAGE})"></div>`;
                        html += `<div class='content-description'>`;
                            html += `<p class="title">`;
                                html += `<strong>${data.B1_COD}</strong> - ${data.B1_DESC}`;
                            html += `</p>`;
                            html += `<p>`;
                            html += `Pack ${data.PACK} pc - Alt. Master ${data.B5_EMBALT} cm - Larg. Master ${data.B5_EMBLAR} cm - Comp. Master ${data.B5_EMBCOM} cm <br> ${data.B5_CEME}`;
                            html += `</p>`;
                            html += `<p class="price">`;
                                html += `R$ ${price}`;
                            html += `</p>`;
                        html += `</div>`;
                        html += `<div class='content-compra'>`;
                            html += `<div class='content-quantidade'>`;
                                html += `<span class="minus"><i class="fas fa-minus"></i></span>`;
                                html += `<input type="number" value="${quantidade}" />`;
                                html += `<span class="plus"><i class="fas fa-plus"></i></span>`;
                            html += `</div>`;
                            html += `<button class="remover-carrinho" data-item='${JSON.stringify(data)}'>Remover Item</button>`;
                        html += `</div>`;
                    html += `</td>`;
                html += `</tr>`;
            html += `</tbody>`;

            container.append(html);
        },
    });

    // Calcular total e colocar no HTML
    var total = 0;
    var cart = getCartFromCookie();

    cart.forEach(item => {
        total += item.DA1_PRCVEN;
    });

    $(".price-total span").html(total.toLocaleString('pt-br', {minimumFractionDigits: 2}));

    // Quantidade - aumentar ou diminuir
    $(document).on('click tap', '.content-quantidade .minus, .content-quantidade .plus', function() {
        var input = $(this).parents(".content-quantidade").find("input");
        var qtd = input.val();
        var type = $(this).attr("class");

        // Se não tiver nada no campo inserir a quantidade 1
        if(typeof qtd == "undefined" || qtd == null){
            qtd = 1;
        }

        // Converter para número pois do campo vem como string
        qtd = Number(qtd);

        // Drecementar ou incrementar o valor
        if(type == "minus"){
            if(qtd > 1){
                qtd--;
            }
        } else{
            qtd++;
        }

        // Atribuir ao campo novamente para o item dentro do cookie
        var data = JSON.parse($(this).parents(".content-compra").find(".remover-carrinho").attr("data-item"));
        data.qtd = qtd;
        atualizarItemCookie(data);

        // Atualizar o grid com os novos dados
        $("#gridContainer").dxDataGrid("instance").option("dataSource", getCartFromCookie());
    });

    // Remover item do carrinho
    $(document).on('click tap', '.remover-carrinho', function() {
        var data = JSON.parse($(this).attr("data-item"));

        // Remover item do cookie
        removerItemCookie(data);

        // Atualizar o número do header para aparecer o carrinho
        checkCarrinhoHeader();

        // Atualizar o grid com os novos dados
        $("#gridContainer").dxDataGrid("instance").option("dataSource", getCartFromCookie());
    });

});

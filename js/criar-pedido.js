
var popup;
var popupFicha;
var MultiView;
var dataGalleryDiv;
var produtoSelecionadoDetalhe;

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

    // Atribuir ao campo novamente
    input.attr("value", qtd);
});

$(document).on("click tap", ".adicionar-carrino", function(){
    // Pegar os dados do item que queremos adicionar
    var data = JSON.parse($(this).attr("data-item"));
    var qtd = $(this).parents(".content-compra").find("input[type=number]").val();
    data.qtd = qtd;
    
    adicionarNoCarrinho(data);
});


// Para a multiseleção quando utilizamdo o rowTemplate do DataGrid é obrigatório fazer na mão a seleção das linhas, esse código faz isso
$(document).on("click tap", ".content-selecao.all", function(){
    var thisChecked = $(this).find("input").is(':checked');

    $(".content-selecao.row").each(function(){
        $(this).find("input").prop("checked", thisChecked);
    })
});

// Para a multiseleção quando utilizamdo o rowTemplate do DataGrid é obrigatório fazer na mão a seleção das linhas, esse código adiciona todos selecionados no carrinho
$(document).on("click tap", ".adicionar-carrinho-multiselect", function(){
    $(".selecionar-linha:checked").each(function(){
        var data = JSON.parse($(this).val());
        var qtd = $(this).parents(".row-item").find(".content-compra").find("input[type=number]").val();
        data.qtd = qtd;
        
        adicionarNoCarrinho(data);
    });

    iziToast.success({
        title: '',
        message: 'Produto adicionado com sucesso',
    });
});

function renderDataGrid(){
    $("#gridContainer").dxDataGrid({
        dataSource: DevExpress.data.AspNet.createStore({
            key: "B1_COD",
            loadUrl: "https://run.mocky.io/v3/f46339a1-ad60-4d6e-8ec6-2ad23519c706"
        }),
        remoteOperations: {
            paging: true,
        },   
        showColumnHeaders: false,
        columnsAutoWidth: true,
        filterRow: {
            visible: false
        },
        headerFilter: {
            visible: false
        },
        groupPanel: {
            visible: false
        },
        scrolling: {
            rowRenderingMode: 'virtual'
        },
        pager: {
            allowedPageSizes: [10, 20, 50],
            showPageSizeSelector: true
        },
        searchPanel: {
            width: 300,
            visible: true,
            placeholder: "Pesquisar",
            highlightCaseSensitive: true
        },
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
            var quantidade = 1;
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
                            html += `<p class="detalhe">Ver mais detalhes <i class="fas fa-angle-double-right"></i></p>`;
                        html += `</div>`;
                        html += `<div class='content-compra'>`;
                            html += `<div class='content-quantidade'>`;
                                html += `<span class="minus"><i class="fas fa-minus"></i></span>`;
                                html += `<input type="number" value="${quantidade}" />`;
                                html += `<span class="plus"><i class="fas fa-plus"></i></span>`;
                            html += `</div>`;
                            html += `<button data-item='${JSON.stringify(data)}' class="adicionar-carrino"><i class="fas fa-shopping-cart"></i></button>`;
                        html += `</div>`;
                    html += `</td>`;
                html += `</tr>`;
            html += `</tbody>`;

            container.append(html);
        },
        onRowClick: function (e) {
            var data = e.data;

            // Se tem dados e se NÃO clicar na parte de quantidade/compra
            if (data && $(e.event.target).parents(".content-compra").length == 0) {
                produtoSelecionadoDetalhe = data;
                MultiView.repaint();
                MultiView.option("selectedIndex", 1);
            }
        }
    });
}

function templateProdutos(itemData, itemIndex, element) {
    let dataGridDiv = $("<div id='gridContainer'>");
	
    dataGridDiv.appendTo(element);

    renderDataGrid();
}

function renderDataGridCancelados(){
    $("#gridContainerCancelados").dxDataGrid({
        dataSource: DevExpress.data.AspNet.createStore({
            key: "B1_COD",
            loadUrl: "http://localhost:9090/produtosCancelados"
        }),
        remoteOperations: false,  
        columnsAutoWidth: true,
        filterRow: {
            visible: false
        },
        headerFilter: {
            visible: false
        },
        groupPanel: {
            visible: false
        },
        scrolling: {
            rowRenderingMode: 'virtual'
        },
        pager: {
            allowedPageSizes: [10, 20, 50],
            showPageSizeSelector: true
        },
        searchPanel: {
            width: 300,
            visible: true,
            placeholder: "Pesquisar",
            highlightCaseSensitive: true
        },
        showBorders: true,
        columns: [
            {
                caption: "Select",
                dataField: "B1_COD",
                allowSorting: false,
                allowReordering: false,
                headerCellTemplate: function (header, info) {
                    var html = "";

                    html += `<label class='content-selecao all'>`;
                        html += `<input type="checkbox" name='produto-adicionar' class="selecionar-todos" />`;
                        html += `<span class="icon"></span>`;
                    html += `</label>`;

                    $('<div class="center-object all">')
                        .html(html)
                        .appendTo(header);
                }
            },{
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
            var price = data.DA1_PRCVEN.toLocaleString('pt-br', {minimumFractionDigits: 2});

            html += `<tbody class='dx-row'>`;
                html += `<tr class='row-item'>`;
                    html += `<td>`;
                        html += `<div class='center-object'>`;
                            html += `<label class='content-selecao row'>`;
                                html += `<input type="checkbox" class="selecionar-linha" name='produto-adicionar' value='${JSON.stringify(data)}' />`;
                                html += `<span class="icon"></span>`;
                            html += `</label>`;
                        html += `</div>`;
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
                        html += `<div class='content-compra btn-off'>`;
                            html += `<div class='content-quantidade'>`;
                                html += `<span class="minus"><i class="fas fa-minus"></i></span>`;
                                html += `<input type="number" value="${data.QTD_SOLICIDADA}" />`;
                                html += `<span class="plus"><i class="fas fa-plus"></i></span>`;
                            html += `</div>`;
                        html += `</div>`;
                    html += `</td>`;
                html += `</tr>`;
            html += `</tbody>`;

            container.append(html);
        },
        onRowClick: function (e) {
            var data = e.data;

            // Se tem dados e se NÃO clicar na parte de quantidade/compra
            if (data && $(e.event.target).parents(".content-compra").length == 0) {
                produtoSelecionadoDetalhe = data;
                MultiView.repaint();
                MultiView.option("selectedIndex", 1);
            }
        }
    });
}

function templateProdutosCancelados(element) {
    var html = "";

    html += "<div id='gridContainerCancelados'></div>";
    html += `<button class="adicionar-carrinho-multiselect"><i class="fas fa-shopping-cart"></i> Adicionar selecionados</button>`;

    element.html(html);

    renderDataGridCancelados();
}

function templateFichaTecnica(element) {
    var html = "";

    var html = "";

    html += `<button class='imprimir'>Imprimir <i class="fas fa-print"></i></button>`;
    html += "<div id='grid-ficha-financeira'>";
        html += "<hr>";
        html += "<p><strong>000811/004 COMERCIAL SEMAAN LTDA (R MADEIRA -PARI) - COMERCIAL SEMAAN LTD</strong></p>";
        html += "<p>RUA MADEIRA 72/82 , PARI - 03033040 - SAO PAULO , SP</p>";
        html += "<p>CNPJ: 66646795001190 INSCR. EST.: 145.716.901.116 TEL.: 33134522</p>";
        html += "<hr><br><br>";
        html += "<p><strong>FICHA DA LOJA 004</strong></p>";
        html += "<hr>";
        html += "<p><span>A VENCER:</span>R$ 158.870,04</p>";
        html += "<p><span>VENCIDO:</span>R$ 0,00</p>";
        html += "<p><span>TOTAL DUPLICATAS:</span>R$ 966.432,73</p>";
        html += "<p><span>MEDIA ATRASO:</span>3,34</p>";
        html += "<p><span>MAIOR ATRASO:</span>74,00</p>";
        html += "<p><span>PRIMEIRA COMPRA:</span>13/07/2012</p>";
        html += "<p><span>ULTIMA COMPRA:</span>23/06/2021</p>";
        html += "<p><span>PROX. VENC:</span>28/06/2021</p>";
        html += "<p><span>FATURAMENTO DE 2020:</span>R$ 168.265,64</p>";
        html += "<p><span>FATURAMENTO DE 2021:</span>R$ 187.760,79</p>";
        html += "<br><br>";
        html += "<p><strong>FICHA GERAL</strong></p>";
        html += "<p><span>A VENCER:</span>R$ 167.225,64</p>";
        html += "<p><span>VENCIDO:</span>R$ 3.580,83</p>";
        html += "<p><span>TOTAL DE DUPLICATAS:</span>R$ 1.246.397,39</p>";
        html += "<p><span>MEDIA ATRASO:</span>1,38</p>";
        html += "<p><span>MAIOR ATRASO:</span>111,00</p>";
        html += "<p><span>PRIMEIRA COMPRA:</span>/ /</p>";
        html += "<p><span>ULTIMA COMPRA:</span>23/06/2021</p>";
        html += "<p><span>PROX. VENCIMENTO:</span>28/06/2021</p>";
        html += "<br><br>";
        html += "<p><strong>DUPLICATAS VENCIDAS</strong></p>";
        html += "<p>";
            html += "<span class='quatro'>000009701 ICMRET</span>";
            html += "<span class='quatro'>02/04/2012</span>";
            html += "<span class='quatro'>R$3.580,83</span>";
            html += "<span class='quatro'>000811003</span>";
        html += "</p>";
        html += "<hr>";
    html += "</div>";

    element.html(html);
}

function templateProdutoDetalhe(itemData, itemIndex, element) {
    var html = "";
    var div = $(`<div id='item-${itemIndex}'>`);
    var data = produtoSelecionadoDetalhe;
    var price = data.DA1_PRCVEN.toLocaleString('pt-br', {minimumFractionDigits: 2});

    html += "<div class='content-detalhe'>";
        html += "<div class='galeria-imagem'></div>";
        html += "<div class='content-text'>";
            html += `<p class='title'>${data.B1_DESC}</p>`;
            html += `<p class='text'>`;
                html += `Pack ${data.PACK} pc - Alt. Master ${data.B5_EMBALT} cm - Larg. Master ${data.B5_EMBLAR} cm - Comp. Master ${data.B5_EMBCOM} cm <br> ${data.B5_CEME}`;
            html += `</p>`;
            html += `<p class="price">`;
                html += `R$ ${price}`;
            html += `</p>`;
            html += `<div class='content-compra'>`;
                html += `<div class='content-quantidade'>`;
                    html += `<span class="minus"><i class="fas fa-minus"></i></span>`;
                    html += `<input type="number" value="1" />`;
                    html += `<span class="plus"><i class="fas fa-plus"></i></span>`;
                html += `</div>`;
                html += `<button data-item='${JSON.stringify(data)}' class="adicionar-carrino"><i class="fas fa-shopping-cart"></i></button>`;
            html += `</div>`;
            html += `<button class="voltar"><i class="fas fa-angle-double-left"></i> Voltar</button>`;
        html += "</div>";
    html += "</div>";

    div.appendTo(element)
    div.html(html);

    $(".galeria-imagem").dxGallery({
        dataSource: data.GALERIA,
        slideshowDelay: 2000,
        width: "40%",
        height: "40%",
        showNavButtons: false,
        showIndicator: true,
        loop: true,
        onItemClick: function (e) {
            var component = e.component;
            component.option("slideshowDelay", component.option("slideshowDelay") ? 0 : 2000);
        }
    }).dxGallery("instance");

    $(".content-detalhe .voltar").on("click tap", function(){
        MultiView.option("selectedIndex", 0);
    });
};

function adicionarNoCarrinho(data, qtd){
    // Verificar se já foi selecionado o cliente
    var client = readCookie("client");
    
    if(typeof client == "undefined" || client == null || client == ""){
        // Se não foi selecionado nenhum cliente, dar mensagem de erro e deixar o campo vermelho
        $("#select-client").addClass("dx-invalid");
        
        iziToast.error({
            title: 'Erro',
            message: 'Por favor selecionar um cliente antes',
        });
        
        return true;
    } else {
        // Se foi selecionado 
        $("#select-client").removeClass("dx-invalid");
    }
    
    // Pegar os itens que já estão no carrinho e adicionar o novo
    var cart = readCookie("cart");
    if(typeof cart == "undefined" || cart == null || cart == ""){
        cart = [];
    } else{
        cart = JSON.parse(cart);
    }
    
    // Atualizar item se já existir no carrinho
    let itemExisted = false;
    cart.forEach(item => {
        if(item.B1_COD == data.B1_COD){
            itemExisted = true;
            item.qtd = data.qtd
        }
    });
    
    // Se o item não existia no carrinho ele insere
    if(!itemExisted){
        cart.push(data);
    }
    
    // Guardar todos os itens no cookie do navegador
    writeCookie("cart", JSON.stringify(cart), 1);
    
    // Atualizar o número do header para aparecer o carrinho
    checkCarrinhoHeader();
}

function PrintElem(elem)
{
    var mywindow = window.open('', 'PRINT', 'height=800,width=1000');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
}


$(document).ready(function () {

    // Impressão da Ficha Tecnica
    $(document).on("click tap", ".imprimir", function(){
        PrintElem("grid-ficha-financeira");
    });
    
    // MultiView - Produtos Grid e Detalhe do Produto
    MultiView = $("#MultiViewContainer").dxMultiView({
		items: [{
			title: "Produtos",
			icon: "rowfield",
			template: templateProdutos
		}, {
			title: "Detalhes",
			icon: "smalliconslayout",
			template: templateProdutoDetalhe
		}],
		animationEnabled: true,
		swipeEnabled: true,
		onSelectionChanged: function (e) {
			// let galleryInstance = dataGalleryDiv.dxGallery("instance");
			// if (gallery2[0]) galleryInstance.option("dataSource", gallery2);

			if (e.component.option("selectedIndex") === 0) {
				$("#texto").text('Lista de produtos');
				$("#dot1").removeClass('dotOff').addClass('dotOn');
				$("#dot2").removeClass('dotOn').addClass('dotOff');
			} else {
				$("#texto").text('Detalhes');
				$('#dot2').removeClass('dotOff').addClass('dotOn');
				$('#dot1').removeClass('dotOn').addClass('dotOff');
			}
		}
	}).dxMultiView("instance");

    // Padrão de tamanho para o desktop
    var larguraAltura = "80%";

    // Padrão de tamanho para o mobile
    if($(window).width() <= 768){
        larguraAltura = "100%";
    }

    // Popup dos produtos recomendados
    popup = $("#popup").dxPopup({
        contentTemplate: templateProdutosCancelados,
        width: larguraAltura,
        height: larguraAltura,
        container: ".dx-viewport",
        showTitle: true,
        title: "Produtos recomendados",
        visible: false,
        dragEnabled: false,
        closeOnOutsideClick: true,
        showCloseButton: true,
        position: {
            at: "center",
            my: "center",
        }
    }).dxPopup("instance");

    // Abrir o popup de produtos ao clicar
    $(".cliente-modal").on("click tap", function(){
        $("#popup").dxPopup("instance").show();
    });

    // Popup da ficha tecnica
    popupFicha = $("#popupFicha").dxPopup({
        contentTemplate: templateFichaTecnica,
        width: larguraAltura,
        height: larguraAltura,
        container: ".dx-viewport",
        showTitle: true,
        title: "Ficha Tecnica",
        visible: false,
        dragEnabled: false,
        closeOnOutsideClick: true,
        showCloseButton: true,
        position: {
            at: "center",
            my: "center",
        }
    }).dxPopup("instance");

    // Abrir o popup de ficha tecnica ao clicar
    $(".ficha-financeira").on("click tap", function(){
        $("#popupFicha").dxPopup("instance").show();
    });

    // ComboBox de Clientes
    var clientes = [
        {
            "id": -1,
            "nome": "Selecione"
        },{
            "id": 1,
            "nome": "Cliente 1"
        }, {
            "id": 2,
            "nome": "Cliente 2"
        }, {
            "id": 3,
            "nome": "Cliente 3"
        }, {
            "id": 4,
            "nome": "Cliente 4"
        }, {
            "id": 5,
            "nome": "Cliente 5"
        }, {
            "id": 6,
            "nome": "Cliente 6"
        }
    ];

    
    // Verificar se já foi selecionado anteriorment o cliente, se for selecionar ele no combobox
    var client = readCookie("client");
    var valueCliente;
    
    if(client != null && client != ""){
        valueCliente = JSON.parse(client);
        valueCliente = clientes.filter(x => x.id == valueCliente.id)[0];
    } else {
        // Colocar o valor padrão "selecione" se não for selecionado anteriormente um cliente
        valueCliente = clientes[0];
    }

    $("#select-client").dxSelectBox({
        displayExpr: "nome",
        dataSource: clientes,
        value: valueCliente,
        onValueChanged: function(data) {
            if(data.value.id == -1){
                writeCookie("client", "", 1);
            } else {
                writeCookie("client", JSON.stringify(data.value), 1);
            }

            $("#popupFicha").dxPopup("instance").show();
        }
    });
    

});

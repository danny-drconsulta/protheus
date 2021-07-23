
var popup;
var MultiView;
var dataGalleryDiv;
var clienteSelecionadoDetalhe;

$(document).on("click tap", ".menu-tabs li", function(){
    var idTab = $(this).attr("data-id");
    var parent = $(this).parents(".content-tabs");

    // Remover ativo da Tab e Menu
    parent.find(".active").removeClass("active");

    // Deixar ativo o menu clicado
    $(this).addClass("active");

    // Abrir a tab selecionada
    $(idTab).addClass('active');
});

$(document).on("click tap", ".imprimir", function(){
    PrintElem("grid-ficha-financeira");
});

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

function renderDataGrid(){
    $("#gridContainer").dxDataGrid({
        dataSource: DevExpress.data.AspNet.createStore({
            key: "CODIGO",
            loadUrl: "https://run.mocky.io/v3/96148561-0a26-46de-a1ec-fbba31648e60"
        }),
        remoteOperations: {
            paging: true,
            filtering: true,
        },   
        columnsAutoWidth: true,
        filterRow: {
            visible: true
        },
        headerFilter: {
            visible: true
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
                caption: "Código do cliente",
                dataField: "CODIGO",
            },{
                caption: "Nome",
                dataField: "NOME",
            },{
                caption: "Nome comun",
                dataField: "NOME_COMUN",
            },{
                caption: "CNPJ",
                dataField: "CNPJ",
            },{
                caption: "Tipo",
                dataField: "TIPO",
            },{
                caption: "Endereço",
                dataField: "ENDERECO",
            },{
                caption: "Botões",
                dataField: "ENDERECO",
                allowSorting: false,
                allowReordering: false,
                cellTemplate: function (template, row) {
                    var html = "";

                    html += `<p class="detalhe-btn" data-item='${JSON.stringify(row.data)}'>Ver mais detalhes <i class="fas fa-angle-double-right"></i></p>`;

                    $('<div>')
                        .html(html)
                        .appendTo(template);
                }
            }
        ],
        onRowClick: function (e) {
            var data = e.data;

            clienteSelecionadoDetalhe = data;
            MultiView.repaint();
            MultiView.option("selectedIndex", 1);
        }
    });
}

function templateProdutos(itemData, itemIndex, element) {
    let dataGridDiv = $("<div id='gridContainer'>");
	
    dataGridDiv.appendTo(element);

    renderDataGrid();
}

function renderGridCancelados(){
    var html = "";

    html += "<div id='grid-cancelados'></div>";

    return html;
}

function renderFichaFinanceiro(){
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

    return html;
}

function templateProdutoDetalhe(itemData, itemIndex, element) {
    var html = "";
    var div = $(`<div id='item-${itemIndex}'>`);
    var data = clienteSelecionadoDetalhe;
    console.log(data);

    html += "<p class='title-detail'>Dados do cliente</p>";
    html += "<ul class='content-info-client'>";
        html += `<li><p><strong>Código:</strong><br>${data.CODIGO}</li>`;
        html += `<li><p><strong>CNPJ:</strong><br>${data.CNPJ}</li>`;
        html += `<li><p><strong>Nome:</strong><br>${data.NOME}</li>`;
        html += `<li><p><strong>Endereço:</strong><br>${data.ENDERECO}</li>`;
    html += "</ul>";
    html += "<div class='content-tabs'>";
        html += "<ul class='menu-tabs'>";
            html += "<li class='active' data-id='#cancelados'>Produtos Cancelados</li>";
            html += "<li data-id='#ficha-financeira'>Ficha Financeira</li>";
        html += "</ul>";
        html += "<ul class='tabs'>";
            html += "<li class='active' id='cancelados'>";
                html += renderGridCancelados(itemData);
            html += "</li>";
            html += "<li id='ficha-financeira'>";
                html += renderFichaFinanceiro(itemData);
            html += "</li>";
        html += "</ul>";
    html += "</div>";

    div.appendTo(element)
    div.html(html);

    pluginDataGridCancelados();
};

function pluginDataGridCancelados(){
    $("#grid-cancelados").dxDataGrid({
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
                            html += `<p class='quantidade-solicitada'> <strong>Quantidade:</strong><br> ${data.QTD_SOLICIDADA} </p>`;
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

$(document).ready(function () {

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

});

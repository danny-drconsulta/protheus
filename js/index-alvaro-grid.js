let dataSource = new DevExpress.data.DataSource({
	store: [],
	reshapeOnPush: true,
});



$(function () {
	var IDSel = "0";
	var sDescricao = "";
	var gallery2;
	var dataGalleryDiv;


	var gallery = [
		            "content://images/2350_01.jpg"
		        ];



	function myTrim(x) {
		return x.replace(/^\s+|\s+$/gm, '');
	};


	var MultiView = $("#MultiViewContainer").dxMultiView({
		items: [{
			title: "Produtos",
			icon: "rowfield",
			template: itemTemplateProd
			}, {
			title: "Detalhes",
			icon: "smalliconslayout",
			//badge: IDSel,
			template: itemTemplateDet
			}],
		animationEnabled: true,
		swipeEnabled: true,
		onSelectionChanged: function (e) {
			let galleryInstance = dataGalleryDiv.dxGallery("instance");
			if (gallery2[0]) galleryInstance.option("dataSource", gallery2);

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








	function itemTemplateProd(itemData, itemIndex, element) {
		let dataGridDiv = $("<div id= 'gridContainer'>");
		dataGridDiv.appendTo(element);
		dataGridDiv.dxDataGrid({
			dataSource: "/data/produtos.json",
			//dataSource: store,
			//remoteOperations: true,

			//			dataSource: DevExpress.data.AspNet.createStore({
			//				key: "B1_COD",
			//				loadUrl: "http://127.0.0.1:8888/produtos"
			//			}),
			//
			//			dataSource: DevExpress.data.AspNet.createStore({
			//				key: "B1_COD",
			//				loadUrl: url + "http://127.0.0.1:8888/produtos",
			//				insertUrl: url + "/InsertOrder",
			//				updateUrl: url + "/UpdateOrder",
			//				deleteUrl: url + "/DeleteOrder",
			//				onBeforeSend: function (method, ajaxOptions) {
			//					ajaxOptions.xhrFields = {
			//						withCredentials: true
			//					};
			//				}
			//			}),

			//			dataSource: DevExpress.data.AspNet.createStore({
			//				key: "Id",
			//				loadUrl: "https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/Sales"
			//			}),			
			//	


			rowTemplate: function (container, item) {
				var data = item.data,
					markup = "<tbody class='employee dx-row " + ((item.rowIndex % 2) ? 'dx-row-alt' : '') + "'>" +
					"<tr class='main-row'>" +
					"<td rowspan='2'><img src='/images/produtos/" + (myTrim(data.B1_COD) + "_01.jpg").slice(2) + "' /></td>" +
					"<td> <strong>" + data.B1_COD + " - " + data.B1_DESC + "</strong> </td>" +
					"</tr>" +
					"<tr class='notes-row'>" +
					"<td colspan='6'><div> <strong> Valor R$" + data.DA1_PRCVEN + "</strong> - PACK " + data.PACK + " pc - " +
					"Alt. Master " + data.B5_EMBALT + " cm - Larg. Master " + data.B5_EMBLAR + "  cm - Comp. Master " + data.B5_EMBCOM + " cm" +
					"<p>" + data.B5_CEME + "</p></div></td>" +
					"</tr>" +
					"</tbody>";
				container.append(markup);
			},
			showColumnHeaders: false,
			columnAutoWidth: true,
			showBorders: true,
			selection: {
				mode: "single"
			},
			editing: {
				mode: "form "
			},
			paging: {
				pageSize: 5
			},

			scrolling: {
				mode: "virtual"
			},
			sorting: {
				mode: "none"
			},
			searchPanel: {
				width: 300,
				visible: true,
				highlightCaseSensitive: true
			},

			//			pager: {
			//				showPageSizeSelector: true,
			//				allowedPageSizes: [10, 25, 50, 100]
			//			},

			pager: {
				visible: true,
				allowedPageSizes: [5, 10, 'all'],
				showPageSizeSelector: true,
				showInfo: true,
				showNavigationButtons: true
			},

			hoverStateEnabled: true,
			columns: [{
					caption: "Photo",
					dataField: "IMAGE",
					width: 100,
					allowFiltering: false,
					allowSorting: false
			}, {
					dataField: "B1_COD",
			},
				{
					dataField: "B1_DESC",
			}, {
					dataField: "DA1_PRCVEN",
			}, {
					dataField: "PACK",
			}, {
					dataField: "B5_EMBALT",
			}, {
					dataField: "B5_EMBLAR",
			}, {
					dataField: "B5_EMBCOM",
			}, {
					dataField: "B5_CEME",
			}],

			onToolbarPreparing: function (e) {
				let toolbarItems = e.toolbarOptions.items;

				// Modifies an existing item
				toolbarItems.forEach(function (item) {
					if (item.name === "searchPanel") {
						item.location = "before";
					}
				});
			},
			//Tive que usar o onClick porque o onSelectionChanged não funciona qdo clico 2x no mesmo registro
			onRowClick: function (e) {
				var data = e.data;
				if (data) {

					IDSel = myTrim(data.B1_COD);
					sDescricao = data.B1_COD + " - " + data.B1_DESC + " Valor R$" + data.DA1_PRCVEN
					ExisteImagem(IDSel);
					MultiView.option("selectedIndex", 1);
				}
			}
		});
	};


	function ExisteImagem(IDSel) {
		let i, j;
		let file;
		let Caminho = "/images/";

		gallery2 = [];

		for (i = 0; i < 10; i++) {
			j = (IDSel + "_0" + i).slice(2); //vem 002350 está 2350_01.jpg
			file = Caminho + j + ".jpg";

			//Essa é a forma correta p/ que espere o GET terminar
			$.ajax({
				async: false,
				type: "GET",
				url: file,
				success: function () {
					gallery2.push(file);
					//callback
				}
			});
		};

	};



	function itemTemplateDet(itemData, itemIndex, element) {
		console.log(itemData)
		dataGalleryDiv = $("<div>").addClass("center");
		dataGalleryDiv.appendTo(element);
		dataGalleryDiv.dxGallery({
			dataSource: gallery,
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

		$("<div>").addClass("center").text(sDescricao).appendTo(element);

		$("<div>").dxButton({
			text: "<- Voltar",
			elementAttr: {
				class: "center"
			},
			width: 100,
			onClick: function () {
				MultiView.option("selectedIndex", 0);
			}
		}).appendTo(element);
	};



	function itemTemplateDetxxx(itemData, itemIndex, element) {
		dataGalleryDiv = $('<div>');
		dataGalleryDiv.appendTo(element);
		dataGalleryDiv.dxGallery({
			dataSource: gallery,
			loop: true,
			slideshowDelay: 2000,
			width: "100%",
			height: "100%",
			showNavButtons: true,
			showIndicator: true,
			//			onClick: function () {
			//			       TabPanel.option("selectedIndex", 0);
			//			       }
		}).dxGallery("instance");


		//		$("<div>").addClass("center").text(itemData.title).appendTo(element);
		//		$("<div>").dxButton({
		//			text: "SHOW",
		//			elementAttr: {
		//				class: "center"
		//			},
		//			width: 100,
		//			onClick: function () {
		//				MultiView.option("selectedIndex", 0);
		//			}
		//		}).appendTo(element);
		//		
		//let ButtonReturn = $("<div>");
		//let ButtonReturn = $("<div class='container'>");
		//let ButtonReturn = $('<div class="container"> <button type="button" class="btn btn-success">Voltar</button> ');
		let ButtonReturn = $('<div class="container-fluid"> <button type="button" class="btn btn-success">Voltar</button> ');

		ButtonReturn.appendTo(element);
		ButtonReturn.dxButton({
			stylingMode: "text",
			text: "Voltary",
			type: "success",
			onClick: function () {
				MultiView.option("selectedIndex", 0);
			}
		});
	};
});

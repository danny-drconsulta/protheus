
var collapsed = false;

$(document).ready(function () {

    var discountCellTemplate = function(container, options) {
        $("<div/>").dxBullet({
            onIncidentOccurred: null,
            size: {
                width: 150,
                height: 30
            },
            margin: {
                top: 0,
                bottom: 0,
                left: 5
            },
            showTarget: false,
            showZeroLevel: true,
            value: options.value * 100,
            startScaleValue: 0,
            endScaleValue: 100,
            tooltip: {
                enabled: true,
                font: {
                    size: 18
                },
                paddingTopBottom: 2,
                customizeTooltip: function() {
                    return { text: options.text };
                },
                zIndex: 5
            }
        }).appendTo(container);
    };

    $("#gridContainer").dxDataGrid({
        dataSource: DevExpress.data.AspNet.createStore({
            key: "Id",
            loadUrl: "https://run.mocky.io/v3/1c3344f4-0baa-4826-8bbf-852842ea2773"
        }),
        remoteOperations: false,
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
        groupPanel: { visible: true },
        grouping: {
            autoExpandAll: false
        },
        rowAlternationEnabled: true,
        showBorders: true,
        columns: [
            {
                dataField: "Product",
                groupIndex: 0
            },
            {
                dataField: "Amount",
                caption: "Sale Amount",
                dataType: "number",
                format: { style: "currency", currency: "BRL", useGrouping: true },
                alignment: "right",
            },
            {
                dataField: "Discount",
                caption: "Discount %",
                dataType: "number",
                format: "percent",
                alignment: "right",
                allowGrouping: false,
                cellTemplate: discountCellTemplate,
                cssClass: "bullet"
            },
            {
                dataField: "SaleDate",
                dataType: "date"
            },
            {
                dataField: "Region",
                dataType: "string"
            },
            {
                dataField: "Sector",
                dataType: "string",
            },
            {
                dataField: "Channel",
                dataType: "string",
            },
            {
                dataField: "Customer",
                dataType: "string",
                width: 150
            }
        ],
        onContentReady: function(e) {
            if(!collapsed) {
                collapsed = true;
                e.component.expandRow(["EnviroCare"]);
            }
        }
    });

});

var charts = {
    data: {
        salesPerf: {
            DailyPerformance: {
                TodaySales: 402280.0,
                YesterdaySales: 1305070.0,
                LastWeekSales: 8304320.0,
            },
            MonthlyPerformance: {
                ThisMonthSales: 31360990.0,
                LastMonthSales: 38689170.0,
                YTDSales: 211286900.0,
            },
            AnnualPerformance: {
                YTDSales: 211286900.0,
                ForecastSales: 432413855.69982716572749261082,
                LastYearSales: 434585330.0,
            },
            SalesBySector: [
                {
                    Criteria: "Health",
                    Sales: 205660920.0,
                    Units: 105017,
                },
                {
                    Criteria: "Energy",
                    Sales: 214279580.0,
                    Units: 110142,
                },
                {
                    Criteria: "Manufacturing",
                    Sales: 178511640.0,
                    Units: 90637,
                },
                {
                    Criteria: "Banking",
                    Sales: 170180660.0,
                    Units: 86165,
                },
                {
                    Criteria: "Telecom",
                    Sales: 156847310.0,
                    Units: 78947,
                },
                {
                    Criteria: "Insurance",
                    Sales: 154537020.0,
                    Units: 77549,
                },
            ],
        },
        dailySales: [
            {
                SaleDate: "2021/06/27 08:00:00",
                Sales: 63640.0,
            },
            {
                SaleDate: "2021/06/27 09:00:00",
                Sales: 85060.0,
            },
            {
                SaleDate: "2021/06/27 10:00:00",
                Sales: 83590.0,
            },
            {
                SaleDate: "2021/06/27 11:00:00",
                Sales: 129500.0,
            },
            {
                SaleDate: "2021/06/27 12:00:00",
                Sales: 179670.0,
            },
            {
                SaleDate: "2021/06/27 13:00:00",
                Sales: 190080.0,
            },
            {
                SaleDate: "2021/06/27 14:00:00",
                Sales: 239620.0,
            },
            {
                SaleDate: "2021/06/27 15:00:00",
                Sales: 180040.0,
            },
            {
                SaleDate: "2021/06/27 16:00:00",
                Sales: 122960.0,
            },
            {
                SaleDate: "2021/06/27 17:00:00",
                Sales: 30910.0,
            },
        ],
        monthlySales: [
            {
                SaleDate: "2021/06/01 00:00:00",
                Sales: 906010.0,
            },
            {
                SaleDate: "2021/06/02 00:00:00",
                Sales: 1066940.0,
            },
            {
                SaleDate: "2021/06/03 00:00:00",
                Sales: 1078810.0,
            },
            {
                SaleDate: "2021/06/04 00:00:00",
                Sales: 1085960.0,
            },
            {
                SaleDate: "2021/06/05 00:00:00",
                Sales: 977110.0,
            },
            {
                SaleDate: "2021/06/06 00:00:00",
                Sales: 1069940.0,
            },
            {
                SaleDate: "2021/06/07 00:00:00",
                Sales: 942990.0,
            },
            {
                SaleDate: "2021/06/08 00:00:00",
                Sales: 1042200.0,
            },
            {
                SaleDate: "2021/06/09 00:00:00",
                Sales: 1057230.0,
            },
            {
                SaleDate: "2021/06/10 00:00:00",
                Sales: 1255280.0,
            },
            {
                SaleDate: "2021/06/11 00:00:00",
                Sales: 1165510.0,
            },
            {
                SaleDate: "2021/06/12 00:00:00",
                Sales: 1144810.0,
            },
            {
                SaleDate: "2021/06/13 00:00:00",
                Sales: 1288630.0,
            },
            {
                SaleDate: "2021/06/14 00:00:00",
                Sales: 1189850.0,
            },
            {
                SaleDate: "2021/06/15 00:00:00",
                Sales: 1105760.0,
            },
            {
                SaleDate: "2021/06/16 00:00:00",
                Sales: 1196840.0,
            },
            {
                SaleDate: "2021/06/17 00:00:00",
                Sales: 1273100.0,
            },
            {
                SaleDate: "2021/06/18 00:00:00",
                Sales: 1293590.0,
            },
            {
                SaleDate: "2021/06/19 00:00:00",
                Sales: 1208760.0,
            },
            {
                SaleDate: "2021/06/20 00:00:00",
                Sales: 1134340.0,
            },
            {
                SaleDate: "2021/06/21 00:00:00",
                Sales: 1202060.0,
            },
            {
                SaleDate: "2021/06/22 00:00:00",
                Sales: 1205430.0,
            },
            {
                SaleDate: "2021/06/23 00:00:00",
                Sales: 1106080.0,
            },
            {
                SaleDate: "2021/06/24 00:00:00",
                Sales: 1248540.0,
            },
            {
                SaleDate: "2021/06/25 00:00:00",
                Sales: 1170180.0,
            },
            {
                SaleDate: "2021/06/26 00:00:00",
                Sales: 1237690.0,
            },
            {
                SaleDate: "2021/06/27 00:00:00",
                Sales: 1305070.0,
            },
            {
                SaleDate: "2021/06/28 00:00:00",
                Sales: 27480.0,
            },
        ],
    },

    config: {
        isPhone: false,
    },

    registerTheme() {
        DevExpress.viz.registerPalette("SunnyPalette", {
            simpleSet: [
                "#05a4e6",
                "#0b8abf",
                "#7fba5f",
                "#7aad5e",
                "#ebd530",
                "#cebb2d",
            ],
            indicatingSet: ["#90ba58", "#eeba69", "#a37182"],
            gradientSet: ["#fb9f8c", "#b0324f"],
        });

        DevExpress.viz.registerTheme({
            name: "SunnyTheme",
            chart: {
                commonAxisSettings: {
                    visible: false,
                    tick: {
                        visible: false,
                    },
                    placeholderSize: 30,
                    grid: {
                        visible: true,
                        color: "#d3d3d3",
                    },
                    label: {
                        indentFromAxis: 5,
                        font: {
                            color: "#373737",
                            opacity: 0.75,
                            size: 10,
                        },
                    },
                },
                commonPaneSettings: {
                    border: {
                        visible: true,
                        color: "#d3d3d3",
                    },
                },
                tooltip: {
                    border: { color: "#0597d4" },
                    color: "#0597d4",
                    font: {
                        color: "#fff",
                        opacity: 1,
                        size: 18,
                    },
                    shadow: {
                        opacity: 0.15,
                        blur: 0,
                        color: "#000000",
                        offsetX: 3,
                        offsetY: 3,
                    },
                },
                valueAxis: {
                    label: {
                        indentFromAxis: 3,
                    },
                },
            },
        });
    },

    drawPerfGaugeYTDSales: function () {
        var instance = $("#perfGaugeYTDSales").data("dxCircularGauge");
        if (instance) {
            instance.render();
            instance.option(
                "value",
                charts.data.salesPerf.AnnualPerformance.YTDSales
            );
            instance.option(
                "subvalues",
                charts.data.salesPerf.AnnualPerformance.ForecastSales
            );
        } else {
            $("#perfGaugeYTDSales").dxCircularGauge({
                onIncidentOccurred: null,
                scale: {
                    label: { visible: false },
                    startValue: 0,
                    endValue: 450000000,
                    customTicks: [150000000, 300000000],
                    tick: {
                        width: 6,
                    },
                },
                valueIndicator: {
                    type: "rectangle",
                    color: "#aaaaaa",
                    width: 3,
                    spindleSize: 21,
                    spindleGapSize: 15,
                    offset: 5,
                },
                value: charts.data.salesPerf.AnnualPerformance.YTDSales,
                subvalues:
                    charts.data.salesPerf.AnnualPerformance.ForecastSales,
                subvalueIndicator: {
                    type: "trianglemarker",
                    color: "#089e60",
                },
                rangeContainer: {
                    width: 3,
                    ranges: [
                        {
                            startValue: 0,
                            endValue: 150000000,
                            color: "#db2e3e",
                        },
                        {
                            startValue: 150000000,
                            endValue: 300000000,
                            color: "#f55f40",
                        },
                        {
                            startValue: 300000000,
                            endValue: 450000000,
                            color: "#089e60",
                        },
                    ],
                },
            });
        }
    },

    drawDailyChart: function () {
        var instance = $("#dailySalesChart").data("dxChart");
        if (instance) {
            console.log("teste");
            console.log(instance);
            instance.render();
            instance.option("series.name", "6/27/21");
            instance.option("dataSource", charts.data.dailySales);
        } else {
            $("#dailySalesChart").dxChart({
                onIncidentOccurred: null,
                theme: "SunnyTheme",
                palette: "SunnyPalette",
                dataSource: charts.data.dailySales,
                series: {
                    type: "area",
                    color: "#0ca3e2",
                    argumentField: "SaleDate",
                    valueField: "Sales",
                    name: "6/27/21",
                    point: {
                        color: "#fff",
                        border: {
                            // color: charts.config.getColorPalette()
                        },
                        hoverStyle: {
                            border: {
                                // color: charts.config.getColorPalette()
                            },
                        },
                    },
                },

                valueAxis: {
                    wholeRange: { startValue: 0 },
                    label: {
                        customizeText: function () {
                            return this.value / 1000;
                        },
                    },
                },
                argumentAxis: {
                    valueMarginsEnabled: false,
                    placeholderSize: 25,
                    argumentType: "datetime",
                    tickInterval: { hours: 1 },
                    axisDivisionFactor: 10,
                    label: {
                        overlappingBehavior: "none",
                        wordWrap: "none",
                        format: "shorttime",
                        customizeText: function () {
                            if (
                                this.value.getHours() % 2 &&
                                this.value.getHours() !==
                                    new Date(
                                        charts.data.dailySales[
                                            charts.data.dailySales.length - 1
                                        ].SaleDate
                                    ).getHours()
                            ) {
                                return this.valueText;
                            }
                            return "";
                        },
                    },
                },
                tooltip: {
                    paddingLeftRight: 5,
                    paddingTopBottom: 4,
                    enabled: true,
                    format: {
                        type: "millions",
                        precision: 2,
                    },
                    customizeTooltip: function () {
                        return { text: "$" + this.valueText };
                    },
                    shadow: {
                        opacity: 0.15,
                        blur: 0,
                        color: "#000000",
                        offsetX: 3,
                        offsetY: 3,
                    },
                },
                legend: {
                    markerSize: 10,
                    margin: 5,
                    paddingLeftRight: 5,
                    paddingTopBottom: 5,
                    verticalAlignment: "top",
                    horizontalAlignment: "left",
                    position: "inside",
                    border: {
                        visible: true,
                        color: "#d2d2d2",
                        opacity: 1,
                    },
                    font: {
                        color: "#373737",
                        opacity: 1,
                        size: 12,
                    },
                },
            });
        }
    },

    drawPerfGaugeLastYearSales: function () {
        var instance = $("#perfGaugeLastYearSales").data("dxCircularGauge");
        if (instance) {
            instance.render();
            instance.option(
                "value",
                charts.data.salesPerf.AnnualPerformance.LastYearSales
            );
        } else {
            $("#perfGaugeLastYearSales").dxCircularGauge({
                onIncidentOccurred: null,
                scale: {
                    label: { visible: false },
                    startValue: 0,
                    endValue: 450000000,
                    customTicks: [150000000, 300000000],
                    tick: {
                        width: 6,
                    },
                },
                valueIndicator: {
                    type: "rectangle",
                    color: "#aaaaaa",
                    width: 3,
                    spindleSize: 21,
                    spindleGapSize: 15,
                    offset: 5,
                },
                value: charts.data.salesPerf.AnnualPerformance.LastYearSales,
                subvalues: [],
                rangeContainer: {
                    width: 3,
                    ranges: [
                        {
                            startValue: 0,
                            endValue: 150000000,
                            color: "#db2e3e",
                        },
                        {
                            startValue: 150000000,
                            endValue: 300000000,
                            color: "#f55f40",
                        },
                        {
                            startValue: 300000000,
                            endValue: 450000000,
                            color: "#089e60",
                        },
                    ],
                },
            });
        }
    },

    drawForecastGraph: function () {
        var instance = $("#forecastGraph").data("dxLinearGauge");
        if (instance) {
            instance.render();
            instance.option(
                "value",
                (charts.data.salesPerf.AnnualPerformance.YTDSales /
                    charts.data.salesPerf.AnnualPerformance.ForecastSales) *
                    100
            );
        } else {
            $("#forecastGraph").dxLinearGauge({
                onIncidentOccurred: null,
                scale: {
                    startValue: 0,
                    endValue: 100,
                    customTicks: [0, 20, 70, 100],
                    label: {
                        indentFromTick: 10,
                        font: {
                            color: "#373737",
                            opacity: 0.75,
                            size: 12,
                        },
                    },
                },
                valueIndicator: {
                    color: "#b0324f",
                    backgroundColor: "#e8e8e9",
                    offset: -13,
                },
                value:
                    (charts.data.salesPerf.AnnualPerformance.YTDSales /
                        charts.data.salesPerf.AnnualPerformance.ForecastSales) *
                    100,
                rangeContainer: {
                    backgroundColor: "none",
                    ranges: [
                        {
                            startValue: 0,
                            endValue: 20,
                            color: "#db2e3e",
                        },
                        {
                            startValue: 20,
                            endValue: 70,
                            color: "#f55f40",
                        },
                        {
                            startValue: 70,
                            endValue: 100,
                            color: "#089e60",
                        },
                    ],
                },
            });
        }
    },

    drawMonthlyChart: function () {
        var instance = $("#monthlySalesChart").data("dxChart");
        if (instance) {
            instance.render();
            instance.option("series.name", "Jun 2021");
            instance.option("dataSource", charts.data.monthlySales);
        } else {
            $("#monthlySalesChart").dxChart({
                onIncidentOccurred: null,
                theme: "SunnyTheme",
                palette: "SunnyPalette",
                dataSource: charts.data.monthlySales,
                series: {
                    type: "area",
                    argumentField: "SaleDate",
                    valueField: "Sales",
                    color: "#0ca3e2",
                    name: "Jun 2021",
                    point: {
                        color: "#fff",
                        border: {
                            // color: charts.config.getColorPalette()
                        },
                        hoverStyle: {
                            border: {
                                // color: charts.config.getColorPalette()
                            },
                        },
                    },
                },
                valueAxis: {
                    wholeRange: { startValue: 500000 },
                    tickInterval: 500000,
                    label: {
                        format: {
                            type: "millions",
                            precision: 1,
                        },
                    },
                },
                argumentAxis: {
                    valueMarginsEnabled: false,
                    argumentType: "datetime",
                    placeholderSize: 25,
                    tickInterval: {
                        days: 3,
                    },
                    axisDivisionFactor: 10,
                    label: {
                        overlappingBehavior: "none",
                        format: "M/dd",
                        customizeText: function () {
                            if (
                                this.value.getDate() === 1 ||
                                this.value.getDate() ===
                                    new Date(
                                        charts.data.monthlySales[
                                            charts.data.monthlySales.length - 1
                                        ].SaleDate
                                    ).getDate()
                            ) {
                                return "";
                            }
                            return this.valueText;
                        },
                    },
                },
                tooltip: {
                    paddingLeftRight: 10,
                    paddingTopBottom: 4,
                    enabled: true,
                    format: {
                        type: "millions",
                        precision: 2,
                    },
                    customizeTooltip: function () {
                        return { text: "$" + this.valueText };
                    },
                    shadow: {
                        opacity: 0.15,
                        blur: 0,
                        color: "#000000",
                        offsetX: 3,
                        offsetY: 3,
                    },
                },
                legend: {
                    markerSize: 10,
                    margin: 5,
                    paddingLeftRight: 5,
                    paddingTopBottom: 5,
                    verticalAlignment: "top",
                    horizontalAlignment: "left",
                    position: "inside",
                    border: {
                        visible: true,
                        color: "#d2d2d2",
                        opacity: 1,
                    },
                    font: {
                        color: "#373737",
                        size: 12,
                        opacity: 1,
                    },
                },
            });
        }
    },

    drawPieChart: function () {
        var instance = $("#pieChart").data("dxPieChart");
        if (instance) {
            instance.render();
            instance.option("dataSource", charts.data.salesPerf.SalesBySector);
        } else {
            $("#pieChart").dxPieChart({
                onIncidentOccured: null,
                palette: "SunnyPalette",
                dataSource: charts.data.salesPerf.SalesBySector,
                type: "doughnut",
                innerRadius: 0.55,
                series: { argumentField: "Criteria", valueField: "Sales" },
                legend: {
                    columnItemSpacing: 7,
                    verticalAlignment: "bottom",
                    horizontalAlignment: "center",
                    rowCount: 2,
                    itemTextPosition: "right",
                    orientation: "horizontal",
                    customizeText: function () {
                        return this.pointName.toUpperCase();
                    },
                    font: {
                        color: "#373737",
                        size: 12,
                        opacity: 1,
                    },
                },
            });
        }
    },

    start: function () {
        charts.drawPerfGaugeYTDSales();
        charts.drawDailyChart();
        charts.drawPerfGaugeLastYearSales();
        charts.drawForecastGraph();
        charts.drawMonthlyChart();
        charts.drawPieChart();
    },

    atualizarDailyChart: function (acao) {
        if (acao == "prev" || acao == "yesterday") {
            charts.data.dailySales = [
                {
                    SaleDate: "2021/06/27 08:00:00",
                    Sales: 190080.0,
                },
                {
                    SaleDate: "2021/06/27 09:00:00",
                    Sales: 239620.0,
                },
                {
                    SaleDate: "2021/06/27 10:00:00",
                    Sales: 129500.0,
                },
                {
                    SaleDate: "2021/06/27 11:00:00",
                    Sales: 179670.0,
                },
                {
                    SaleDate: "2021/06/27 12:00:00",
                    Sales: 83590.0,
                },
                {
                    SaleDate: "2021/06/27 13:00:00",
                    Sales: 63640.0,
                },
                {
                    SaleDate: "2021/06/27 14:00:00",
                    Sales: 85060.0,
                },
                {
                    SaleDate: "2021/06/27 15:00:00",
                    Sales: 180040.0,
                },
                {
                    SaleDate: "2021/06/27 16:00:00",
                    Sales: 122960.0,
                },
                {
                    SaleDate: "2021/06/27 17:00:00",
                    Sales: 30910.0,
                },
            ];
        } else {
            charts.data.dailySales = [
                {
                    SaleDate: "2021/06/27 08:00:00",
                    Sales: 63640.0,
                },
                {
                    SaleDate: "2021/06/27 09:00:00",
                    Sales: 85060.0,
                },
                {
                    SaleDate: "2021/06/27 10:00:00",
                    Sales: 83590.0,
                },
                {
                    SaleDate: "2021/06/27 11:00:00",
                    Sales: 129500.0,
                },
                {
                    SaleDate: "2021/06/27 12:00:00",
                    Sales: 179670.0,
                },
                {
                    SaleDate: "2021/06/27 13:00:00",
                    Sales: 190080.0,
                },
                {
                    SaleDate: "2021/06/27 14:00:00",
                    Sales: 239620.0,
                },
                {
                    SaleDate: "2021/06/27 15:00:00",
                    Sales: 180040.0,
                },
                {
                    SaleDate: "2021/06/27 16:00:00",
                    Sales: 122960.0,
                },
                {
                    SaleDate: "2021/06/27 17:00:00",
                    Sales: 30910.0,
                },
            ];
        }

        charts.drawDailyChart();
    },

    atualizarMonthlyChart: function (acao) {
        if (acao == "next" || acao == "today") {
            charts.data.monthlySales = [
                {
                    SaleDate: "2021/06/01 00:00:00",
                    Sales: 1144810.0,
                },
                {
                    SaleDate: "2021/06/02 00:00:00",
                    Sales: 1189850.0,
                },
                {
                    SaleDate: "2021/06/03 00:00:00",
                    Sales: 1078810.0,
                },
                {
                    SaleDate: "2021/06/04 00:00:00",
                    Sales: 1085960.0,
                },
                {
                    SaleDate: "2021/06/05 00:00:00",
                    Sales: 977110.0,
                },
                {
                    SaleDate: "2021/06/06 00:00:00",
                    Sales: 1066940.0,
                },
                {
                    SaleDate: "2021/06/07 00:00:00",
                    Sales: 942990.0,
                },
                {
                    SaleDate: "2021/06/08 00:00:00",
                    Sales: 1042200.0,
                },
                {
                    SaleDate: "2021/06/09 00:00:00",
                    Sales: 1057230.0,
                },
                {
                    SaleDate: "2021/06/10 00:00:00",
                    Sales: 1255280.0,
                },
                {
                    SaleDate: "2021/06/11 00:00:00",
                    Sales: 1165510.0,
                },
                {
                    SaleDate: "2021/06/12 00:00:00",
                    Sales: 1134340.0,
                },
                {
                    SaleDate: "2021/06/13 00:00:00",
                    Sales: 1288630.0,
                },
                {
                    SaleDate: "2021/06/14 00:00:00",
                    Sales: 1069940.0,
                },
                {
                    SaleDate: "2021/06/15 00:00:00",
                    Sales: 27480.0,
                },
                {
                    SaleDate: "2021/06/16 00:00:00",
                    Sales: 1196840.0,
                },
                {
                    SaleDate: "2021/06/17 00:00:00",
                    Sales: 1273100.0,
                },
                {
                    SaleDate: "2021/06/18 00:00:00",
                    Sales: 1293590.0,
                },
                {
                    SaleDate: "2021/06/19 00:00:00",
                    Sales: 1208760.0,
                },
                {
                    SaleDate: "2021/06/20 00:00:00",
                    Sales: 906010.0,
                },
                {
                    SaleDate: "2021/06/21 00:00:00",
                    Sales: 1202060.0,
                },
                {
                    SaleDate: "2021/06/22 00:00:00",
                    Sales: 1205430.0,
                },
                {
                    SaleDate: "2021/06/23 00:00:00",
                    Sales: 1248540.0,
                },
                {
                    SaleDate: "2021/06/24 00:00:00",
                    Sales: 1305070.0,
                },
                {
                    SaleDate: "2021/06/25 00:00:00",
                    Sales: 1170180.0,
                },
                {
                    SaleDate: "2021/06/26 00:00:00",
                    Sales: 1237690.0,
                },
                {
                    SaleDate: "2021/06/27 00:00:00",
                    Sales: 1066940.0,
                },
                {
                    SaleDate: "2021/06/28 00:00:00",
                    Sales: 1106080.0,
                },
            ];
        } else {
            charts.data.monthlySales = [
                {
                    SaleDate: "2021/06/01 00:00:00",
                    Sales: 906010.0,
                },
                {
                    SaleDate: "2021/06/02 00:00:00",
                    Sales: 1066940.0,
                },
                {
                    SaleDate: "2021/06/03 00:00:00",
                    Sales: 1078810.0,
                },
                {
                    SaleDate: "2021/06/04 00:00:00",
                    Sales: 1085960.0,
                },
                {
                    SaleDate: "2021/06/05 00:00:00",
                    Sales: 977110.0,
                },
                {
                    SaleDate: "2021/06/06 00:00:00",
                    Sales: 1069940.0,
                },
                {
                    SaleDate: "2021/06/07 00:00:00",
                    Sales: 942990.0,
                },
                {
                    SaleDate: "2021/06/08 00:00:00",
                    Sales: 1042200.0,
                },
                {
                    SaleDate: "2021/06/09 00:00:00",
                    Sales: 1057230.0,
                },
                {
                    SaleDate: "2021/06/10 00:00:00",
                    Sales: 1255280.0,
                },
                {
                    SaleDate: "2021/06/11 00:00:00",
                    Sales: 1165510.0,
                },
                {
                    SaleDate: "2021/06/12 00:00:00",
                    Sales: 1144810.0,
                },
                {
                    SaleDate: "2021/06/13 00:00:00",
                    Sales: 1288630.0,
                },
                {
                    SaleDate: "2021/06/14 00:00:00",
                    Sales: 1189850.0,
                },
                {
                    SaleDate: "2021/06/15 00:00:00",
                    Sales: 1105760.0,
                },
                {
                    SaleDate: "2021/06/16 00:00:00",
                    Sales: 1196840.0,
                },
                {
                    SaleDate: "2021/06/17 00:00:00",
                    Sales: 1273100.0,
                },
                {
                    SaleDate: "2021/06/18 00:00:00",
                    Sales: 1293590.0,
                },
                {
                    SaleDate: "2021/06/19 00:00:00",
                    Sales: 1208760.0,
                },
                {
                    SaleDate: "2021/06/20 00:00:00",
                    Sales: 1134340.0,
                },
                {
                    SaleDate: "2021/06/21 00:00:00",
                    Sales: 1202060.0,
                },
                {
                    SaleDate: "2021/06/22 00:00:00",
                    Sales: 1205430.0,
                },
                {
                    SaleDate: "2021/06/23 00:00:00",
                    Sales: 1106080.0,
                },
                {
                    SaleDate: "2021/06/24 00:00:00",
                    Sales: 1248540.0,
                },
                {
                    SaleDate: "2021/06/25 00:00:00",
                    Sales: 1170180.0,
                },
                {
                    SaleDate: "2021/06/26 00:00:00",
                    Sales: 1237690.0,
                },
                {
                    SaleDate: "2021/06/27 00:00:00",
                    Sales: 1305070.0,
                },
                {
                    SaleDate: "2021/06/28 00:00:00",
                    Sales: 27480.0,
                },
            ];
        }

        charts.drawMonthlyChart();
    },
};

window.charts = charts;

$(document).ready(function () {
    charts.registerTheme();
    charts.start();

    // NAVEGAÇÃO DOS GRÁFICOS
    $(".graph-navigation div").on("click tap", function () {
        var acao = $(this).parent().attr("class");
        var parent = $(this).parents(".graph-navigation");
        var graphIdentify = parent.attr("data");

        // Remover active de todos antes de colocar no correto
        parent.find("div").removeClass("disabled active");

        // Adicionar a class active para mudar de cor em uma das opções
        if (acao == "prev" || acao == "yesterday") {
            parent.find(".prev div").addClass("disabled");
            parent.find(".yesterday div").addClass("active");
        } else {
            parent.find(".next div").addClass("disabled");
            parent.find(".today div").addClass("active");
        }

        // Atualizar o gráfico com a opção selecionada
        if (graphIdentify == "vendas-mes") {
            charts.atualizarMonthlyChart(acao);
        } else {
            charts.atualizarDailyChart(acao);
        }
    });

    // TABS - MOBILE - DASHBOARD
    $(".tab-graph li").on("click tap", function () {
		var idDiv = $(this).attr('data-show');

        // Fechar todas as abas abertas
		$('.layout-box, .box-card, .tab-graph li.active').removeClass("active");

        // Deixar ativo a opção que selecionou
		$(this).addClass("active");

        // Abrir a aba correta de acordou com o ID dentro do atributo data-show
		$(idDiv).addClass("active");
		$(idDiv).parents(".layout-box").addClass("active");
	});
});

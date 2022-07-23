/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([am5themes_Animated.new(root)]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(
  am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "panX",
    wheelY: "zoomX",
    layout: root.verticalLayout
  })
);

// Add scrollbar
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
chart.set(
  "scrollbarX",
  am5.Scrollbar.new(root, {
    orientation: "horizontal"
  })
);

var data = [
  {
    year: "2016",
    income: 23.5,
    expenses: 21.1,
    k:10.1,
  },
  {
    year: "2017",
    income: 26.2,
    expenses: 30.5,
     k:11.4,
  },
  {
    year: "2018",
    income: 30.1,
    expenses: 34.9,
    k:12.5,
  },
  {
    year: "2019",
    income: 29.5,
    expenses: 31.1,
     k:13.7,
    strokeSettings: {
      stroke: chart.get("colors").getIndex(1),
      strokeWidth: 3,
      strokeDasharray: [5, 5]
    },
    
  },
  {
    year: "2020",
    income: 30.6,
    expenses: 28.2,
    k:14.6,
    strokeSettings: {
      stroke: chart.get("colors").getIndex(1),
      strokeWidth: 3,
      strokeDasharray: [5, 5]
    },  
    columnSettings:false,
    info: "(projection)"
  },
  {
    year: "2021",
    income: 34.1,
    expenses: 32.9,
    k:16.7,
    columnSettings: false,
    info: "(projection)"
  }
];

// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = chart.xAxes.push(
  am5xy.CategoryAxis.new(root, {
    categoryField: "year",
    renderer: am5xy.AxisRendererX.new(root, {}),
    tooltip: am5.Tooltip.new(root, {})
  })
);

xAxis.data.setAll(data);

var yAxis = chart.yAxes.push(
  am5xy.ValueAxis.new(root, {
    min: 0,
    extraMax: 0.1,
    renderer: am5xy.AxisRendererY.new(root, {})
  })
);


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/

/*var series1 = chart.series.push(
  am5xy.ColumnSeries.new(root, {
    name: "Income",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "income",
    categoryXField: "year",
    tooltip:am5.Tooltip.new(root, {
      pointerOrientation:"horizontal",
      labelText:"{name} in {categoryX}: {valueY} {info}"
    })
  })
);

series1.columns.template.setAll({
  tooltipY: am5.percent(10),
  templateField: "columnSettings"
});

series1.data.setAll(data);*/

var series2 = chart.series.push(
  am5xy.LineSeries.new(root, {
    name: "Expenses",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "expenses",
    categoryXField: "year",
    tooltip:am5.Tooltip.new(root, {
      pointerOrientation:"horizontal",
      labelText:"{name} in {categoryX}: {valueY} {info}"
    })    
  })
);

series2.strokes.template.setAll({
  strokeWidth: 3,
  templateField: "strokeSettings"
});


series2.data.setAll(data);

series2.bullets.push(function () {
  return am5.Bullet.new(root, {
    sprite: am5.Circle.new(root, {
      strokeWidth: 3,
      stroke: series2.get("stroke"),
      radius: 5,
      fill: root.interfaceColors.get("background")
    })
  });
});
var series3 = chart.series.push(
  am5xy.LineSeries.new(root, {
    name: "k",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "k",
    categoryXField: "year",
    tooltip:am5.Tooltip.new(root, {
      pointerOrientation:"horizontal",
      labelText:"{name} in {categoryX}: {valueY} {info}"
    })    
  })
);

series3.strokes.template.setAll({
  strokeWidth: 3,
  templateField: "strokeSettings"
});


series3.data.setAll(data);

series3.bullets.push(function () {
  return am5.Bullet.new(root, {
    sprite: am5.Circle.new(root, {
      strokeWidth: 3,
      stroke: series3.get("stroke"),
      radius: 5,
      fill: root.interfaceColors.get("background")
    })
  });
});
chart.set("cursor", am5xy.XYCursor.new(root, {}));

// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
var legend = chart.children.push(
  am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50
  })
);
legend.data.setAll(chart.series.values);

// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);
series1.appear();
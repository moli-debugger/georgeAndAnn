// Create chart instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Exclude Antarctica
polygonSeries.exclude = ["AQ"];

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#C4DFDF");

// Add zoom control

chart.seriesContainer.draggable = false;
// chart.seriesContainer.resizable = false;
chart.maxZoomLevel = 1;
// chart.chartContainer.wheelable = true;

// Set up data for the countries
polygonSeries.data = [
    { "id": "CN", "name": "China", "color": am4core.color("#2E5A5B") },
    { "id": "HK", "name": "Hong Kong", "color": am4core.color("#2E5A5B") },
    { "id": "SG", "name": "Singapore", "color": am4core.color("#2E5A5B") },
    { "id": "MY", "name": "Malaysia", "color": am4core.color("#2E5A5B") },
    { "id": "TH", "name": "Thailand", "color": am4core.color("#2E5A5B") },
    { "id": "MM", "name": "Myanmar", "color": am4core.color("#2E5A5B") },
    { "id": "OM", "name": "Oman", "color": am4core.color("#2E5A5B") },
    { "id": "QA", "name": "Qatar", "color": am4core.color("#2E5A5B") },
    { "id": "AE", "name": "UAE", "color": am4core.color("#2E5A5B") },
    { "id": "PH", "name": "Philippines", "color": am4core.color("#2E5A5B") },
    { "id": "US", "name": "USA", "color": am4core.color("#2E5A5B") },
    { "id": "GB", "name": "UK", "color": am4core.color("#2E5A5B") },
    { "id": "CA", "name": "Canada", "color": am4core.color("#2E5A5B") },
    { "id": "CH", "name": "Switzerland", "color": am4core.color("#2E5A5B") },
    { "id": "SE", "name": "Sweden", "color": am4core.color("#2E5A5B") },
    { "id": "NL", "name": "Netherlands", "color": am4core.color("#2E5A5B") },
    { "id": "FR", "name": "France", "color": am4core.color("#2E5A5B") },
    { "id": "LU", "name": "Luxembourg", "color": am4core.color("#2E5A5B") },
    { "id": "DE", "name": "Germany", "color": am4core.color("#2E5A5B") },
    { "id": "ZA", "name": "South Africa", "color": am4core.color("#2E5A5B") },
    { "id": "NG", "name": "Nigeria", "color": am4core.color("#2E5A5B") },
    { "id": "AU", "name": "Australia", "color": am4core.color("#2E5A5B") },
    { "id": "NZ", "name": "New Zealand", "color": am4core.color("#2E5A5B") },
    { "id": "IN", "name": "India", "color": am4core.color("#2E5A5B") }
];


// Configure series tooltip
polygonSeries.tooltip.getFillFromObject = false;
polygonSeries.tooltip.background.fill = am4core.color("#FFF");
polygonSeries.tooltip.fontSize = 12;
polygonSeries.tooltip.getStrokeFromObject = true;
polygonSeries.tooltip.background.strokeWidth = 2;
polygonSeries.tooltip.label.padding(10, 15, 10, 15);
polygonSeries.tooltip.label.fill = am4core.color("#000");
polygonSeries.tooltip.label.textAlign = "middle";

// Configure series tooltip text
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.propertyFields.fill = "color"; // Use the "color" property to set the fill color of each country
polygonTemplate.fillOpacity = 0.8; // Adjust opacity if needed




// scrolling
// document.getElementById("chartdiv").addEventListener("wheel", function (event) {
//     if (chart.isFocused()) {
//         event.preventDefault();

//         var delta = Math.max(-1, Math.min(1, (event.deltaY || -event.detail)));
//         var scrollDistance = 50; // Adjust as needed

//         // Scroll the chart container
//         document.getElementById("chartdiv").scrollTop -= delta * scrollDistance;
//     }
// });
// Defining the function that will run on page load
function init() {

    // Read the json file for the data
    d3.json("samples.json").then((data) => {

        // Parsing & filtering the data to get sample 'id's

        // Moving sample 'id's to dropdown menu
        let dropdown = d3.select("#selDataset")
        data.names.forEach(function(idNumber) {
            dropdown.append("option").text(idNumber).property("value");
        });

        // Calling functions using the first sample to build metadata & initial plots
        buildMetadata(data.names[0]);
        buildCharts(data.names[0]);

    });
}

// Defining a function that will create metadata for given sample
function buildMetadata(id) {

    // Reading the json file data
    d3.json("samples.json").then((data) => {

        // Parsing & filtering the data to get the sample's metadata
        let result = data.metadata.filter(info => info.id.toString() === id)[0];

        // Specifying the location of the metadata and updating it
        let infoPanel = d3.select("#sample-metadata");
        infoPanel.html("");

        Object.entries(result).forEach((key) => {
            infoPanel.append("h6").text(key[0] + ": " + key[1] + "\n");
        });
    });
}

// Defining a function that will create charts for given sample
function buildCharts(id) {

    // Reading the json file data
    d3.json("samples.json").then((data) => {
        let chartData = data.samples.find(list => list.id === id);

        // Parsing & filtering the data to get the top 10 OTUs 
        let otuIds = chartData.otu_ids.slice(0, 10).reverse();
        let values = chartData.sample_values.slice(0, 10).reverse();
        let labels = otuIds.map(i => "OTU " + i);
        let otuLabels = chartData.otu_labels.slice(0, 10).reverse();

        // Creating bar chart
        let trace1 = {
            x: values,
            y: labels,
            text: otuLabels,
            type: "bar",
            orientation: "h"
        };

        let layout = {
            title: { text: "<b>Top 10 OTUs in Test Subject</b>", font: { size: 16 } },
            font: { color: "#181818", family: "Verdana" }
        }

        let traceData1 = [trace1];

        Plotly.newPlot("bar", traceData1, layout);

        // Creating bubble chart 
        let bubbleIds = chartData.otu_ids;
        let bubbleValues = chartData.sample_values;
        let bubbleLabels = chartData.otu_labels;

        let trace2 = {
            x: bubbleIds,
            y: bubbleValues,
            text: bubbleLabels,
            type: "bubble",
            mode: "markers",
            marker: {
                size: bubbleValues,
                color: bubbleIds,
            }
        };

        let traceData2 = [trace2];

        let layout2 = {
            title: { text: "<b>Bubble Chart for Each Sample</b>", font: { size: 16 } },
            xaxis: {
                title: { text: "OTU ID" }
            },

            font: { color: "#181818", family: "Verdana" }
        };

        Plotly.newPlot("bubble", traceData2, layout2);

    });

    // Bonus---Creating gauge chart
    // create the function that you will call in your main app.js
    d3.json("samples.json").then((data) => {
        let washData = data.metadata.filter(i => i.id.toString() === id);
        wash = washData[0].wfreq;
        console.log(wash);

        let gaugeData = [{
            type: "indicator",
            mode: "gauge+number",
            value: wash,
            gauge: {
                bar: { color: "steelblue" },
                bgcolor: "white",
                borderwidth: 2,
                bordercolor: "gray",
                steps: [
                    { range: [0, 9], color: "white" }
                ],
            }
        }];

        let layout = {
            width: 450,
            height: 400,
            paper_bgcolor: "whitesmoke",
            title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week", font: { size: 16 } },
            font: { color: "#181818", family: "Verdana" }
        };
        Plotly.newPlot("gauge", gaugeData, layout);

    });
}

// The parameter being passed in this function is new sample id from dropdown menu
function optionChanged(newId) {

    // Updating metadata with newly selected sample
    buildMetadata(newId);

    // Updating charts with newly selected sample
    buildCharts(newId);

}

// Initialize dashboard on page load/set the main page
init();
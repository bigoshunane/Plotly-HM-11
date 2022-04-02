// //Bonus---Creating gauge chart 
// //create the function that you will call in your main app.js
// d3.json("samples.json").then((data) => {
//     let washData = data.metadata.filter(i => i.id.toString() === id);
//     wash = washData[0].wfreq;
//     // console.log(wash);

//     let gaugeData = [
//         {
//             type: "indicator",
//             mode: "gauge+number",
//             value: wash,
//             gauge: {
//                 bar: { color: "steelblue" },
//                 bgcolor: "white",
//                 borderwidth: 2,
//                 bordercolor: "gray",
//                 steps: [
//                     { range: [0, 9], color: "white" }
//                 ],
//             }
//         }
//     ];

//     let layout = {
//         width: 450,
//         height: 400,
//         paper_bgcolor: "whitesmoke",
//         title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week", font: { size: 16 } },
//         font: { color: "#181818", family: "Verdana" }
//     };
//     Plotly.newPlot("gauge", gaugeData, layout);

// });
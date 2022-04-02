# Plotly-Belly Button Biodiversity

# Objective:
The aim of this project is to develop an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity) which catalogs the microbes that colonize human navels, using Plotly, the JavaScript open source graphing library. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

# Technologies used
     . HTML5
     . Bootstrap 3.3.7
     . CSS
     . D3.js
     . JavaScript
     . Plot.ly
# Steps:
1. Drop down and demographics panel:
The first step is adding all the IDs to the “Test Subject ID No” dropdown so that the user can select which ID they would like to look at and so we can use that ID to parse out the information required from our data json file. Then ID is used to filter out the metadata pertaining to the selected ID and stored as an object. D3 is used to select the panel-body class in index.html forEach statement to iterate through the object and append the data to the demographics panel.

![d](https://user-images.githubusercontent.com/84547558/161367802-73e09362-d7bc-462e-97f7-b9daf4828a33.png)

2. Horizontal bar chart and Bubble Chart: 
To create the horizontal chart, the JSON data is first filtered by the current ID then a trace is created for the chart with the top 10 sample values as x and the OTU IDs as the y. Finaly Plotly is used to create the bar chart. The same prodedures used to create the bubble chart.

![f](https://user-images.githubusercontent.com/84547558/161367958-7fdf4465-edd2-4e7f-908f-829795afe5fa.png)


![fff](https://user-images.githubusercontent.com/84547558/161367990-5d44d1f6-f979-4b35-8990-9dd7e20ab34f.png)

3.Gauge chart(Bonus): 

![GG](https://user-images.githubusercontent.com/84547558/161368230-2d25e772-bef2-44ee-a125-c3c1fa76ab2a.png)


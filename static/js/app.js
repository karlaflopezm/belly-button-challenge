
// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    const metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    const filteredMetadata = metadata.filter(sampleData => sampleData.id == sample)[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    const sampleMeta = d3.select('#sample-metadata');

    // Use `.html("") to clear any existing metadata
    sampleMeta.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(filteredMetadata).forEach(([key, value]) => {
      sampleMeta.append('h6').html(`<b>${key.toUpperCase()}</b>: ${value}`);
    });

  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    const sampleData = data.samples;

    // Filter the samples for the object with the desired sample number
    const filteredSampleData = sampleData.filter(sampleData => sampleData.id === sample)[0];

    // Get the otu_ids, otu_labels, and sample_values
    const otuIds = filteredSampleData.otu_ids;
    const otuLabels = filteredSampleData.otu_labels;
    const sampleValues = filteredSampleData.sample_values;

    // Build a Bubble Chart
    const bubbleChart = {
      x: otuIds,
      y: sampleValues,
      text: otuLabels,
      mode: 'markers',
      marker: {
        size: sampleValues,
        color: otuIds,
        colorscale: 'Rainbow',
        opacity: 0.7
      }
    };

    const bubbleChartLayout = {
      title: 'Bacteria Cultures Per Sample',
      xaxis: {
        title: 'OTU ID'
      },
      yaxis: {
        title: 'Number of Bacteria Cultures'
      },
      height: 650,
      width: 1300
    };

    // Render the Bubble Chart
    Plotly.newPlot('bubble', [bubbleChart], bubbleChartLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks and get the top 10 OTUs
    const yticks = otuIds.slice(0, 10).map(id => `OTU ${id}`).reverse();

    // Build a Bar Chart with top 10 bacteria cultures
    let barChart = {
      x: sampleValues.slice(0, 10).reverse(),
      y: yticks,
      text: otuLabels.slice(0, 10).reverse(),
      type: 'bar',
      orientation: 'h'
    };

    const barChartLayout = {
      title: 'Top 10 Bacteria Cultures Found',
      xaxis: {
        title: 'Number of Bacteria Cultures'
      },
      height: 450,
      width: 1000
    };

    // Render the Bar Chart
    Plotly.newPlot('bar', [barChart], barChartLayout);

  });
};

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    const names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    const dropdown = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    names.forEach(name => {
      dropdown.append('option').text(name).property('value', name);
    });

    // Get the first sample from the list
    let firstSample = names[0];

    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
};

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
};

// Initialize the dashboard
init();
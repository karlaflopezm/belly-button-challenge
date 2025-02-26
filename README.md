# Belly Button Biodiversity Dashboard

## Background
This interactive dashboard explores the **Belly Button Biodiversity** dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small number of microbial species (operational taxonomic units, or OTUs) were present in over 70% of individuals, while the rest were relatively rare.

## Features
- A **horizontal bar chart** displaying the top 10 OTUs found in an individual.
- A **bubble chart** visualizing microbial distribution per sample.
- A **metadata panel** displaying demographic information for each sample.
- A **dropdown menu** to select and update the displayed sample.

## Data Source
The data is loaded from a JSON file hosted at:
[https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json](https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json)

## Instructions
### 1. Load Data Using D3
- Use the **D3.js library** to fetch data from the given JSON file.

### 2. Create a Horizontal Bar Chart
- Displays the **top 10 OTUs** for a selected individual.
- **X-axis:** `sample_values` (microbial count)
- **Y-axis:** `otu_ids`
- **Hovertext:** `otu_labels`
- Dropdown menu updates the chart when a new sample is selected.

### 3. Create a Bubble Chart
- Displays all OTUs for a selected individual.
- **X-axis:** `otu_ids`
- **Y-axis:** `sample_values`
- **Marker Size:** `sample_values`
- **Marker Color:** `otu_ids`
- **Hovertext:** `otu_labels`

### 4. Display Metadata (Demographic Info)
- Extracts metadata from JSON.
- Loops through key-value pairs to display information dynamically.
- Appends the data to the `#sample-metadata` panel.

### 5. Interactive Dashboard
- Updates **all plots** when a new sample is selected from the dropdown menu.

## Deployment
The app is deployed using **GitHub Pages**. Follow these steps to deploy:
1. Ensure your final code is pushed to GitHub.
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under "Source," select the branch containing your HTML file (e.g., `main`).
4. Click **Save**, and GitHub will provide a link to your deployed site.


## Technologies Used
- **JavaScript (D3.js, Plotly.js)** for interactive visualizations
- **HTML & CSS** for structuring and styling
- **Git & GitHub** for version control and deployment

# Screenshot examples

![image](https://github.com/user-attachments/assets/699a138b-d1d6-4625-ab1c-c58eb51a566a)

![image](https://github.com/user-attachments/assets/e25d12f9-47dc-416a-9c81-e6dd06ec28bb)





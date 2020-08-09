
  // Options for Neural Network
  const options = {
	  dataUrl: 'https://raw.githubusercontent.com/wiwichips/MOMU/staging/OurData2.csv',
	  inputs: ['startYear','runtimeMinutes','genres','averageRating','numVotes','directors','writers','nconst'],
	  outputs: ['averageRating'],
	  task: 'classification'

	}
  
// Step 2: initialize your neural network
const nn = ml5.neuralNetwork(options, dataLoaded);

// Step 3: normalize data and train the model
function dataLoaded(){ //Callback for loading
  nn.normalizeData();
  trainModel();
}

// Step 4: train the model
function trainModel(){
  const trainingOptions = {
    epochs: 12,
    batchSize: 12
  }
  nn.train(trainingOptions, finishedTraining);
}

// Step 5: use the trained model
function finishedTraining(){
  //classify();
}

// Step 6: make a classification
function classify(){
  const input = {
    r: 255, 
    g: 0, 
    b: 0
  }
  nn.classify(input, handleResults);
}

// Step 7: define a function to handle the results of your classification
function handleResults(error, result) {
    if(error){
      console.error(error);
      return;
    }
    console.log(results); // {label: 'red', confidence: 0.8};
}

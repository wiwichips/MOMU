let neuralNetwork;

// setup
let nnOptions = {
  dataUrl: 'https://raw.githubusercontent.com/wiwichips/MOMU/staging/OurData3small.csv',
  inputs: ['directors', 'runtimeMinutes', 'genres', 'numVotes'],
  outputs: ['averageRating'],
  task: 'classification',
  debug: true,
  activationHidden: 'sigmoid', // 'relu', 'tanh'
  modelLoss:  'categoricalCrossentropy', // 'meanSquaredError'
};

neuralNetwork = ml5.neuralNetwork(nnOptions, modelReady)

// model ready
function modelReady() {
  neuralNetwork.data.normalize();
  neuralNetwork.train({ epochs: 20 }, whileTraining, finishedTraining);
}

// epoch
function whileTraining(epoch, logs) {
  console.log(`Epoch: ${epoch} - loss: ${logs.loss.toFixed(2)}`);
}

function finishedTraining() {
  console.log('done!');
  classify();
}

// TODO: normalize and encode values going into predict?
function classify() {
  let directors = 'nm7920254';
  let runtimeMinutes = 131;
  let genres = "Action,Crime,Drama";
  let numVotes = 5492;

  let inputs = [directors, runtimeMinutes, genres, numVotes];
  neuralNetwork.classify(inputs, gotResults);
}

function gotResults(err, results) {
  if (err) {
    console.error(err);
  } else {
    console.log(results);
    console.log(`prediction: ${results[0].label}`);
  }
}

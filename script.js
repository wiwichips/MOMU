console.log('hello');

// Step 1: set your neural network options
const options = {
  dataUrl: './OutData2.csv',
  inputs: ['startYear','runtimeMinutes','genres','averageRating','numVotes','directors','writers','nconst'],
  outputs: ['averageRating'],
  task: 'classification'
}


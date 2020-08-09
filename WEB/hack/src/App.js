import React from 'react';
import plus from './plus.png';
import './App.css';

let num = 1;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          M
		  O
		  M
		  U
        </p>
		
		
		<form >
			<div className="row">
				<label>
				Director:&nbsp;
				<input type="text" id="director"/>
				&nbsp;
				</label>
				
				<label>
				Date:&nbsp;
				<input type="text" id="date" />
				&nbsp;
				</label>
			
				<label>
				Runtime:&nbsp;
				<input type="text" id="runtime" />
				&nbsp;
				</label>
			</div>
			
			<div className="row" id="multi">
				<label>
				Actor:&nbsp;
				<input type="text" name="actor" />
				&nbsp;
				</label>
				
				<label>
				Genre:&nbsp;
				<input type="text" name="genre" />
				&nbsp;
				</label>
			</div>
		</form>
		<div id="bottom">
				<img src={plus} onClick={clone}/>
				<div>
					<input type="submit" value="GO" onClick={takeData}/>
				</div>
			</div>
      </header>
	  
	  <footer>
	  <a>Willnred 2020</a>
	  </footer>
    </div>
  );
}

function clone() {
	if(num < 5){
		let cln = document.getElementById("multi").cloneNode(true);
		let cont = document.getElementById("multi").parentElement;
		let btm = document.getElementById("bottom");
		let reset = btm.parentElement;
		cont.appendChild(cln);
		
		let genres = document.getElementsByName("genre");
		let actors = document.getElementsByName("actor");

		genres[num].value = "";
		actors[num].value = "";
		
		btm.remove();
		reset.appendChild(btm);
		num++;
	}
}

function takeData() {
	let dir = document.getElementById("director").value;
	let date = document.getElementById("date").value;
	let runtime = document.getElementById("runtime").value;
	let genres = document.getElementsByName("genre");
	let actors = document.getElementsByName("actor");
	
	
	if(dir !== "" && num > 2 && checkForValues(genres) > 2 && checkForValues(actors) > 2){
		console.log(genres[0].value);
	}
	
}

function checkForValues(array){
	let n = 0;
	for(let i = 0; i < array.length; i++){
		if(array[i].value !== ""){
			n++;
		}
	}
	
	return n;
}

export default App;

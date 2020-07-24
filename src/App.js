import React, { useState } from 'react';

import './App.css';

function App() {
	const [data, setData] = useState({});
	const myChangeHandler = (event) => {
		console.log(event.target.value);
		// this.setState({ username: event.target.value });
		let value = event.target.value;
		if (value.length === 6) {
			fetch(`https://api.postalpincode.in/pincode/${value}`).then(response => response.json()).then(idata => {
				console.log(idata);
				setData(idata[0].PostOffice[0]);
			}).catch(err => console.log(err))
		}
	}
	return (
		<div className="App">
			<header className="App-header">
				<form>
					<div className="test" id="name">
					<input placeholder="First name (optional)" className="full" type="text" name="ipincode" />
					<input placeholder="Last name" className="full" type="text" name="ipincode" />
					</div>

					<div className="test" id="pincode">
					 <input placeholder="PIN code" className="full" type="text" name="ipincode" onChange={myChangeHandler} />
					  <img id="imgicon" src="https://icon-library.com/images/zip-code-icon/zip-code-icon-18.jpg" alt='map_icon'/></div>

					<div className="test" id="address">
					<input value={data.Name} placeholder="Address" className="full" type="text" name="ipincode" /></div>

					<div className="test" id="apartment">
					<input placeholder="Apartment,suite,etc.(optional)" className="full" type="text" name="ipincode" /></div>

					<div className="test" id="city">
					<input value={data.Block} placeholder="City" className="full" type="text" name="ipincode" /></div>

					<div className="test" id="countrystate">
					<input value={data.Country} placeholder="Country/Region" className="full" type="text" name="ipincode" />
					<input value={data.State} placeholder="State" className="full" type="text" name="ipincode" /></div>
					
					<div className="test" id="phone"><input placeholder="Phone" className="full" type="text" name="ipincode" /></div>
				</form>
			</header>
		</div>
	);
}

export default App;

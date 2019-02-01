import React from "react";
import axios from "axios";

export class Fib extends React.Component {
	state = {
		seenIndexes: [],
		values: {},
		index: ""
	};
	componentDidMount() {
		this.fetchValues();
		this.fetchIndexes();
	}
	fetchValues = async () => {
		const values = await axios.get("/api/values/current");
		this.setState({
			values: values.data
		});
	};
	fetchIndexes = async () => {
		const seenIndexes = await axios.get("/api/values/all");
		this.setState({
			seenIndexes: seenIndexes.data
		});
	};
	renderIndexes = () => {
		return this.state.seenIndexes.map(({ number }, i) => number).join(", ");
	};
	renderValues = () => {
		return Object.keys(this.state.values).map(key => (
			<div key={key}>
				For Index {key} I calculated {this.state.values[key]}
			</div>
		));
	};
	handleSubmit = async e => {
		e.preventDefault();
		await axios.post("/api/values", {
			index: this.state.index
		});
		this.setState({
			index: ""
		});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Enter your index :{" "}
						<input
							type="text"
							value={this.state.index}
							onChange={e =>
								this.setState({ index: e.target.value })
							}
						/>
					</label>
					<button type="submit">Submit</button>
				</form>
				<h3>Indexes Seen: </h3>
				{this.renderIndexes()}
				<h3>Calculated Values: </h3>
				{this.renderValues()}
			</div>
		);
	}
}

import React, { useEffect, useState, useContext } from "react";
import Card from "../component/Card.jsx";
import { Context } from "../store/appContext";
import "../../styles/index.scss";

const Header = () => {
	const { store, actions } = useContext(Context);

	return (
		<header className="container">
			<div className="characters">
				<h1>
					<strong>Characters</strong>
				</h1>
				<div className="row-card">
					{store.people.map(item => {
						return <Card key={item.uid} item={item} type="people" />;
					})}
				</div>
			</div>
			<br />
			<br />
			<br />
			<div className="planets">
				<h1>
					<strong>Planest</strong>
				</h1>
				<div className="row-card">
					{store.planets.map(item => {
						return <Card key={item.uid} item={item} type="planets" />;
					})}
				</div>
			</div>
			<br />
			<br />
			<br />
			<div className="vehicles">
				<h1>
					<strong>Vehicles</strong>
				</h1>
				<div className="row-card">
					{store.vehicles.map(item => {
						return <Card key={item.uid} item={item} type="vehicles" />;
					})}
				</div>
			</div>
		</header>
	);
};

export default Header;

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
					{store.listPeople.map(item => {
						return <Card key={item.uid} item={item} />;
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
					{store.listPlenets.map(item => {
						return <Card key={item.uid} item={item} />;
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
					{store.listVehicles.map(item => {
						return <Card key={item.uid} item={item} />;
					})}
				</div>
			</div>
		</header>
	);
};

export default Header;

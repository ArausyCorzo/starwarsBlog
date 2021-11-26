import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "../component/Card.jsx";

const Detail = () => {
	const { store, actions } = useContext(Context);
	const { id, type } = useParams();
	const [detail, setDetail] = useState({});

	useEffect(() => {
		console.log(id, type);
		if (id) {
			for (let arr in store) {
				if (arr === type) {
					let newItem = store[type].find(item => {
						return item.uid == id;
					});
					setDetail(newItem);
				}
			}
		}
	}, []);

	return (
		<div className="contaner">
			<div className="detail">
				<h1>{`some text about ${detail.name}`}</h1>
				<Link to="/" type="button" className="btn btn-outline-info">
					Back home
				</Link>
			</div>
		</div>
	);
};

export default Detail;

import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
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
		<>
			<Link to="/" type="button" className="btn btn-outline-dark">
				Back home
			</Link>
			<div className="container">
				<div className="row mt-5 card-des">
					<div className="col">
						<img src="https://via.placeholder.com/800x600" className="img-fluid rounded-start" alt="..." />
					</div>

					<div className="col-md-8 card-description">
						<div className="description">
							<h3 className="title">
								<strong>{detail.name}</strong>
							</h3>
							<h5 className="description-card">
								{`This is a wider card with supporting text below as a natural lead-in to additional content.
								This content is a little bit longer.`}
							</h5>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="border-top border-danger  flor">
						<p>
							<strong>{`here is the description about ${detail.name}`}</strong>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Detail;

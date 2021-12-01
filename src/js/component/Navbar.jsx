import React, { useContext } from "react";
import "../../styles/index.scss";
import { Context } from "../store/appContext";

const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 px-4">
			<div className="icon">
				<img src="https://cdn.goodvinilos.com/61003/logo-star-wars.jpg" />
			</div>

			<div className="button">
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenu2"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						{`Favorites ${store.favorites.length}`}
					</button>
					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenu2">
						{store.favorites.map(favorites => {
							return (
								<li
									className="list list-group-item"
									key={favorites.name}
									onClick={() => {
										actions.deleteTasks(favorites.name);
									}}>
									{favorites.name}
									<i className="fas fa-trash trash__icon" />
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

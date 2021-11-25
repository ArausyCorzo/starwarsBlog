import React from "react";
import "../../styles/index.scss";

const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
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
						Favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
						<li>
							<button className="dropdown-item" type="button">
								Action
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

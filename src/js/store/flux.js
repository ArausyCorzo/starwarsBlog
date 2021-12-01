const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URL_BASE: "https://www.swapi.tech/api",
			people: [],
			planets: [],
			vehicles: [],
			detail: {},
			favorites: []
		},
		actions: {
			getThings: async endpoint => {
				try {
					const store = getStore();
					const response = await fetch(`${store.URL_BASE}/${endpoint}`);
					if (response.ok) {
						let body = await response.json();
						setStore({
							...store,
							[endpoint]: body.results
						});
					}
					// console.log(body);
				} catch (error) {
					console.log(error, "EXPLOTE D:");
				}
			},

			addFavorites: (name, type) => {
				const store = getStore();
				let thing;
				if (type === "people") {
					thing = store.people.find(item => {
						return item.name == name;
					});
				} else if (type === "planets") {
					thing = store.planets.find(item => {
						return item.name == name;
					});
				} else {
					thing = store.vehicles.find(item => {
						return item.name == name;
					});
				}

				setStore({ ...store, favorites: [...store.favorites, thing] });
			},

			deleteTasks: name => {
				const store = getStore();
				const newList = store.favorites.filter(item => {
					return name != item.name;
				});
				setStore({ ...store, favorites: newList });
			}
		}
	};
};

export default getState;

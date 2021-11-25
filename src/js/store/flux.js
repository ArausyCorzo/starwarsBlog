const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URL_BASE: "https://www.swapi.tech/api",
			listPeople: [],
			listPlenets: [],
			listVehicles: []
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

				// try {
				// 	const response = await fetch(`${store.URL_BASE}/planets`);
				// 	let data = await response.json();
				// 	if (response.ok) {
				// 		setStore({
				// 			...store,
				// 			listPlenets: data.results
				// 		});
				// 	}
				// } catch (error) {
				// 	console.log(error, "EXPLOTE D:");
				// }

				// try {
				// 	const response = await fetch(`${store.URL_BASE}/vehicles`);
				// 	let result = await response.json();
				// 	if (response.ok) {
				// 		setStore({
				// 			...store,
				// 			listVehicles: result.results
				// 		});
				// 	}
				// } catch (error) {
				// 	console.log(error, "EXPLOTE D:");
				// }
			}
		}
	};
};

export default getState;

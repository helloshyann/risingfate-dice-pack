Hooks.once("diceSoNiceReady", (dice3d) => {
	dice3d.addTexture("GMShyann-texture", {
		name: "★ GM Shyann",
		composite: "multiply",
		source: "modules/gmshyann-dice-pack/assets/textures/Unicorn.png",
	});

	dice3d.addTexture("ludo-texture", {
		name: "★ Ludo",
		composite: "multiply",
		source: "modules/gmshyann-dice-pack/assets/textures/ludo.jpg",
	});

	dice3d.addTexture("moss-texture", {
		name: "★ Moss Grimple Redberry",
		composite: "multiply",
		source:
			"modules/gmshyann-dice-pack/assets/textures/moss-grimple-redberry.png",
	});

	dice3d.addSystem({ id: "Kallius", name: "★ Kallius" }, false);

	dice3d.addDicePreset({
		type: "d20",
		labels: [
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-1.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-2.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-3.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-4.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-5.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-6.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-7.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-8.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-9.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-10.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-11.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-12.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-13.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-14.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-15.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-16.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-17.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-18.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-19.png",
			"modules/gmshyann-dice-pack/assets/faces/Kallius/d20/d20-20.png",
		],
		system: "Kallius",
	});

	dice3d.addSystem({ id: "GMShyann", name: "★ GM Shyann" }, false);

	dice3d.addDicePreset({
		type: "d20",
		labels: [
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-1.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-2.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-3.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-4.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-5.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-6.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-7.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-8.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-9.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-10.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-11.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-12.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-13.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-14.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-15.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-16.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-17.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-18.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-19.png",
			"modules/gmshyann-dice-pack/assets/faces/GMShyann/d20/d20-20.png",
		],
		system: "GMShyann",
	});

	dice3d.addSystem({ id: "Leonis", name: "★ Leonis" }, false);

	dice3d.addDicePreset({
		type: "d20",
		labels: [
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-1.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-2.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-3.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-4.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-5.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-6.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-7.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-8.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-9.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-10.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-11.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-12.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-13.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-14.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-15.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-16.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-17.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-18.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-19.png",
			"modules/gmshyann-dice-pack/assets/faces/Leonis/d20/d20-20.png",
		],
		system: "Leonis",
	});

	dice3d.addSystem({ id: "Ludo", name: "★ Ludo" }, false);

	dice3d.addDicePreset({
		type: "d20",
		labels: [
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-1.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-2.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-3.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-4.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-5.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-6.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-7.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-8.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-9.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-10.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-11.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-12.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-13.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-14.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-15.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-16.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-17.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-18.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-19.png",
			"modules/gmshyann-dice-pack/assets/faces/Ludo/d20/d20-20.png",
		],
		system: "Ludo",
	});

	dice3d.addSystem({ id: "Moss", name: "★ Moss Grimple Redberry" }, false);

	dice3d.addDicePreset({
		type: "d20",
		labels: ["modules/gmshyann-dice-pack/assets/faces/Moss/d20/d20-20.png"],
		system: "Moss",
	});

	dice3d.addSystem({ id: "Zan", name: "★ Zan" }, false);

	dice3d.addDicePreset({
		type: "d20",
		labels: [
			"modules/gmshyann-dice-pack/assets/faces/Zand20/d20-1.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-2.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-3.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-4.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-5.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-6.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-7.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-8.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-9.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-10.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-11.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-12.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-13.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-14.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-15.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-16.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-17.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-18.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-19.png",
			"modules/gmshyann-dice-pack/assets/faces/Zan/d20/d20-20.png",
		],
		system: "Zan",
	});
});

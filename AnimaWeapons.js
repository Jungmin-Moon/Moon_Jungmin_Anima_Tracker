//objects

var unidentifiableBone = {
	poetics: 150,
	amaljaaToken: 3,
	vanuVanu: 6,
	vathToken: 6,
	moogleToken: 18,
	alliedSeals: 300,
	precisionGordianBolts: 3
};

var unidentifiableShell = {
	poetics: 150,
	sahaginToken: 3,
	vanuVanu: 6,
	vathToken: 6,
	moogleToken: 18,
	alliedSeals: 0,
	precisionGordianBolts: 3
};

var unidentifiableOre = {
	poetics: 150,
	koboldToken: 3,
	vanuVanu: 6,
	vathToken: 6,
	moogleToken: 18,
	alliedSeals: 0,
	precisionGordianBolts: 3
};

var unidentifiableSeed = {
	poetics: 150,
	amaljaaToken: 3,
	vanuVanu: 6,
	vathToken: 6,
	moogleToken: 18,
	alliedSeals: 300,
	precisionGordianBolts: 3
};

var aetherOil = {
	poetics: 350
};

var umbrites = {
	poetics: 75
};

var singingCluster = {
	poetics: 40
};

var pneumites = {
	poetics: 100,
	gcSeals: 4000
};

var archaicEnchantedInk = {
	poetics: 500
};

//end of objects
let currentWeaponsCreated = 0;


//functions 
function updateWeapons() {
	currentWeaponsCreated = document.getElementById("numWeaponsWorkedOn").value;
	document.getElementById("currentNumMaking").innerHTML = currentWeaponsCreated + " Weapons being made.";	
	
	updateBones();
	updateShell();
	updateOre();
	updateSeed();
	
	updateOil();
	updateUmbrites();
	updateCrystalSand();
	updateSinging();
	updatePneumites();
	updateInk();
}

function updateOil() {
	let oilNeeded = currentWeaponsCreated * 5;
	let oilCost = oilNeeded * aetherOil['poetics'];
	document.getElementById("aetherOil").innerHTML = 
			"Oil Needed: x" + oilNeeded + "<br/>Oil Cost: x" + oilCost + " poetics<br/>";
}

function updateUmbrites() {
	let minUmbrite = currentWeaponsCreated * 60;
	let maxUmbrite = currentWeaponsCreated * 80;
	
	let maxPoetics = maxUmbrite * umbrites['poetics'];
	let minPoetics = minUmbrite * umbrites['poetics'];
	
	document.getElementById("umbrite").innerHTML = 
			"Min Umbrite: x" + minUmbrite + "<br/>Cost: x" + minPoetics + " poetics"
			+ "<br/>Max Umbrite: x" + maxUmbrite + "<br/> Cost: x" + maxPoetics + " poetics<br/>";
}

function updateCrystalSand() {
	let minSand = currentWeaponsCreated * 60;
	let maxSand = currentWeaponsCreated * 80;
	document.getElementById("crystalSand").innerHTML = "Min Sand Needed: x" + minSand + 
			"<br/>Max Sand Needed: x" + maxSand;
}

function updateSinging() {
	let clusterNeeded = currentWeaponsCreated * 50;
	let clusterCost = clusterNeeded * singingCluster['poetics'];
	let clusterWeekly = Math.ceil(clusterNeeded / 18);
	
	document.getElementById("singingClusters").innerHTML = "Clusters Needed: x" + clusterNeeded + 
			"<br/>Cluster Cost: x" + clusterCost + 
			"<br/>Or can do the Weekly quest at most: " + clusterWeekly + " times";
}

function updatePneumites() {
	let pneumiteNeeded = currentWeaponsCreated * 15;
	let pneumitePoetic = pneumiteNeeded * pneumites['poetics'];
	let pneumiteGCSeal = pneumiteNeeded * pneumites['gcSeals'];
	
	document.getElementById("pneumites").innerHTML = "Pneumite Needed: x" + pneumiteNeeded + 
			"<br/>Pneumite Cost: x" + pneumitePoetic + " poetics" + 
			"<br/>Pneumite GC Cost: x" + pneumiteGCSeal + " grand company seals";
}

function updateInk() {
	let inkNeeded = currentWeaponsCreated * 1;
	let inkCost = inkNeeded * archaicEnchantedInk['poetics'];
	
	document.getElementById("ink").innerHTML = "Archaic Enchanted Ink Needed: x" + inkNeeded + 
			"<br/>Archaic Enchanted Ink Cost: x" + inkCost + " poetics";
}

function updateBones() {
	
	let arrAmalToken = currentWeaponsCreated * unidentifiableBone['amaljaaToken'];
	let boneVanu = currentWeaponsCreated * unidentifiableBone['vanuVanu'];
	let boneVath = currentWeaponsCreated * unidentifiableBone['vathToken'];
	let boneMoogle = currentWeaponsCreated * unidentifiableBone['moogleToken'];
	let boneAllied = currentWeaponsCreated * unidentifiableBone['alliedSeals'];
	let boneBolts = currentWeaponsCreated * unidentifiableBone['precisionGordianBolts'];
	let bonePoetics = currentWeaponsCreated * unidentifiableBone['poetics'];
	document.getElementById("boneARR").innerHTML = "Amal'jaa Tokens: x" + arrAmalToken;
	document.getElementById("boneVanu").innerHTML = "Vanu Vanu Tokens: x" + boneVanu;
	document.getElementById("boneVath").innerHTML = "Vath Tokens: x" + boneVath;
	document.getElementById("boneMoogle").innerHTML = "Moogle Tokens: x" + boneMoogle;
	document.getElementById("boneBolts").innerHTML = "Precision Bolts Needed: x" + boneBolts;
	document.getElementById("boneAllied").innerHTML = "Allied Seals Needed: x" + boneAllied;
	document.getElementById("bonePoetics").innerHTML = "Poetics Needed: x" + bonePoetics;
}

function updateShell() {
	
	let arrSahaginToken = currentWeaponsCreated * unidentifiableShell['sahaginToken'];
	let shellVanu = currentWeaponsCreated * unidentifiableShell['vanuVanu'];
	let shellVath = currentWeaponsCreated * unidentifiableShell['vathToken'];
	let shellMoogle = currentWeaponsCreated * unidentifiableShell['moogleToken'];
	let shellAllied = currentWeaponsCreated * unidentifiableShell['alliedSeals'];
	let shellBolts = currentWeaponsCreated * unidentifiableShell['precisionGordianBolts'];
	let shellPoetics = currentWeaponsCreated * unidentifiableShell['poetics'];
	document.getElementById("shellARR").innerHTML = "Amal'jaa Tokens: x" + arrSahaginToken;
	document.getElementById("shellVanu").innerHTML = "Vanu Vanu Tokens: x" + shellVanu;
	document.getElementById("shellVath").innerHTML = "Vath Tokens: x" + shellVath;
	document.getElementById("shellMoogle").innerHTML = "Moogle Tokens: x" + shellMoogle;
	document.getElementById("shellBolts").innerHTML = "Precision Bolts Needed: x" + shellBolts;
	document.getElementById("shellAllied").innerHTML = "Allied Seals Needed: x" + shellAllied;
	document.getElementById("shellPoetics").innerHTML = "Poetics Needed: x" + shellPoetics;
}

function updateOre() {
	
	let arrKoboldToken = currentWeaponsCreated * unidentifiableOre['koboldToken'];
	let oreVanu = currentWeaponsCreated * unidentifiableOre['vanuVanu'];
	let oreVath = currentWeaponsCreated * unidentifiableOre['vathToken'];
	let oreMoogle = currentWeaponsCreated * unidentifiableOre['moogleToken'];
	let oreAllied = currentWeaponsCreated * unidentifiableOre['alliedSeals'];
	let oreBolts = currentWeaponsCreated * unidentifiableOre['precisionGordianBolts'];
	let orePoetics = currentWeaponsCreated * unidentifiableOre['poetics'];
	document.getElementById("oreARR").innerHTML = "Amal'jaa Tokens: x" + arrKoboldToken;
	document.getElementById("oreVanu").innerHTML = "Vanu Vanu Tokens: x" + oreVanu;
	document.getElementById("oreVath").innerHTML = "Vath Tokens: x" + oreVath;
	document.getElementById("oreMoogle").innerHTML = "Moogle Tokens: x" + oreMoogle;
	document.getElementById("oreBolts").innerHTML = "Precision Bolts Needed: x" + oreBolts;
	document.getElementById("oreAllied").innerHTML = "Allied Seals Needed: x" + oreAllied;
	document.getElementById("orePoetics").innerHTML = "Poetics Needed: x" + orePoetics;
}

function updateSeed() {
	
	let arrAmalToken = currentWeaponsCreated * unidentifiableSeed['amaljaaToken'];
	let seedVanu = currentWeaponsCreated * unidentifiableSeed['vanuVanu'];
	let seedVath = currentWeaponsCreated * unidentifiableSeed['vathToken'];
	let seedMoogle = currentWeaponsCreated * unidentifiableSeed['moogleToken'];
	let seedAllied = currentWeaponsCreated * unidentifiableSeed['alliedSeals'];
	let seedBolts = currentWeaponsCreated * unidentifiableSeed['precisionGordianBolts'];
	let seedPoetics = currentWeaponsCreated * unidentifiableSeed['poetics'];
	document.getElementById("seedARR").innerHTML = "Amal'jaa Tokens: x" + arrAmalToken;
	document.getElementById("seedVanu").innerHTML = "Vanu Vanu Tokens: x" + seedVanu;
	document.getElementById("seedVath").innerHTML = "Vath Tokens: x" + seedVath;
	document.getElementById("seedMoogle").innerHTML = "Moogle Tokens: x" + seedMoogle;
	document.getElementById("seedBolts").innerHTML = "Precision Bolts Needed: x" + seedBolts;
	document.getElementById("seedAllied").innerHTML = "Allied Seals Needed: x" + seedAllied;
	document.getElementById("seedPoetics").innerHTML = "Poetics Needed: x" + seedPoetics;
}


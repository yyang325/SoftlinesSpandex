const FEATURE_BULLETS_DIV = 'featurebullets_feature_div';
const FEATURE_LI_TAG = 'li';
const MATERIAL_LIB = ['abaca','aba','acetate','acrylic fabric','acrylic','admiralty cloth','aerophane','aertex','aida canvas','albert cloth','alepine','alpaca','angora fibres','angola','anti-pill','antique satin','ardass','argyle','armure','art linen','astrakhan','atlas','awnings','baft','ballistic','bamboo fibers','bandana','baize','bark cloth','basket weave','batik','batiste','batt','batting','beaded','beaver cloth','bemberg','bengaline','faille','binding cloth','bobbinet','bunting','burlap','bedford','berber fleece','blends','boynge','brocade','buck fleece','burlap','calico','cambric','camel’s hair','camlet','canton crepe','canvas','casement','cashmere','cashgora','cashmerlon','cerecloth','altar cloth','challis','chambray','chambric','charmeuse','chamoise','checks','cheese cloth','chenille','chevios','chiffon','china silk','chinchilla cloth','chint','chino','chintz','cloque','coir','colorfast','corduroy','cottagora','crazy horse','crochet','crepe','crepe back satin','cretonne','crinoline','crinoline net','cupro','dacron','duplex prints','damask','dazzle','deerskin','diaper cloth','dimity','doeskin','donegal','down','drill','duchess satin','duck cloth','duffel','dupioni','eyelet','elastane','elastic','english net','faconne','faille','felt','flannel','flanellette','flax','foulard','french terry','frieze','faux fur','fustian','fur','gabardine','gauze','georgette','gingham','glen checks','grogram','grosgrain','handkerchief linen','habutai','haircloth','hessian','hemp','homespun','hopsacking','ikat','illusion','interlock','irish poplin','jaconet','jacquard','jersey','jute','khakhi','kidskin','knit','types of knit','lace','lambskin','layette','linen','different linen fabric','linsey woolsey','lint','lisle','llama','loden fabric','lycra','lurex','leathertte','lycra','macrame','macinaw','mackinosh','madras','marled','matelasse','melange','mesh','microfiber','milk yarn','modal','moire','mohair','moleskin','mother of pearl','mull','muslin','nankeen','neoprene','nep','netting','ninon','nonwoven fabric','nubuck','nylon','nytril','oilcloth','olefin','organdie','organza','ottoman rib','outing flannel','oxford cloth','paisley','panama cloth','panne','pashmina','peached fabric','percale','permanent press fabric','peau de soie','petersham','pile knit','pile weave','pill','pilot cloth','pincord','pinpoint','pina fabric (pineapple)','pinstripe','pique','point d’esprit','pongee silk','poodle cloth','polo shirt','polyester','polyethylene','polypropylene','polyresin','polystyrene','poplin','poult de soi','rabbit hair','raffia','ramie','raschel knit','rayon','repp','resin','rib knit','ribbon','ric rac','ringspun fabric','ripstop','russet','santoprene','sarcenet','sarong skirt','sateen','satin','satin weave','satin','seersucker','scrim','serge','sharkskin','shantung','sheeting','sherpa','fleece','silesie','silk satin','silk','silk fabric','silk weaves','simplex','sinamay','sisal','slipper satin','spandex','stitch bonded fabric','stone washed','suede','sueded fleece','supima','supriva','swiss dot','synthetic','tactel','taffeta','tape yarn','tapestry','tartan','tattersall','teflon','terrycloth','terry velvet','thai silk','tissue','toweling','transparent velvet','tricot','tricotine','tri acetate','tsumugi silk','tulle','tusseh silk','tussah silk','tweed','twill','ultrasuede','velboa','veloutine','velour','velvet','velveteen','velveteen plush','vicuna','vinyl','viscose','voile','wadmal','whipcord','wincey','wirecloth','woolsy','worcester','yak','yoryu','zanella','zephyr','zibeline',
					'baby combing wool','belly wool','black wool','boiled wool','botany wools','brushed wool','breech','britch wool','carpet wool','lamb’s wool','merino wool','tropical wool','wool crepe','worsted wool','wool',
					'amercian pima cotton','biopolished cotton','combed cotton','cotton backed satin','cotton voile','cotton lawn','egyptian cotton','liquid cotton','organic cotton','pima cotton','polished cotton','supima cotton','cotton',
					'bicast leather','bonded leather','full-grain leather','nappa leather','patent leather','leather',
					'denim',
					];
const MATERIAL_NA = 0;				

var processor = {

	cottonFamily: ['cotton', 'corduroy', 'denim', 'flannel', 'seersucker', 'terrycloth', 'velvet', 'active comfort denim','amercian pima cotton', 'biopolished cotton', 'combed cotton', 'egyptian cotton', 'liquid cotton', 'organic cotton', 'pima cotton', 'polished cotton', 'cotton voile', 'cotton lawn'],
	silkFamily: ['silk', 'satin', 'china silk', 'pongee silk', 'silk satin', 'thai silk', 'tsumugi silk', 'tusseh silk', 'tussah silk'],
	leatherFamily: ['leather', 'bicast leather', 'pu leather', 'bonded leather', 'full-grain leather', 'leathertte', 'nappa leather', 'patent leather'],
	woolFamily: ['wool', 'baby combing wool', 'belly wool', 'black wool', 'boiled wool', 'botany wools', 'breech wool', 'britch wool', 'brushed wool', 'carpet wool', 'lamb’s wool', 'linsey woolsey', 'merino wool', 'tropical wool', 'wool crepe', 'woolsy', 'worsted wool'],
	nylonFamily: ['nylon'],
	acrylicFamily:['acrylic', 'acrylic fabric'],
	modalFamily: ['modal'],
	polyesterFamily: ['polyester', 'polystyrene'],
	rayonFamily: ['rayon'],
	spandexFamily: ['spandex', 'elastane', 'lycra'],

	washCares: ['Machine Wash', 'Machine Wash / Cold Only', "No Machine Wash"],
	dryCares: ['Tumble Dry', 'Tumble Dry / Low Temperature', 'Dry Clean'],
	ironCares: ['Can Be Ironed', 'Ironing / Low Temperature', 'No Ironing'],
	bleachCares: ['Do Not Bleach'],

	careLinks: {
		'Machine Wash': 'https://github.com/yyang325/SoftlinesSpandex/blob/master/icon/wh-washing.png',
		'Machine Wash / Cold Only': 'https://github.com/yyang325/SoftlinesSpandex/blob/master/icon/wh-washing-30deg.png',
		'No Machine Wash': 'https://github.com/yyang325/SoftlinesSpandex/blob/master/icon/wh-washing-not-allowed.png',

		'Tumble Dry': 'https://github.com/yyang325/SoftlinesSpandex/blob/master/icon/wh-drying-tumble.png',
		'Tumble Dry / Low Temperature': 'https://github.com/yyang325/SoftlinesSpandex/blob/master/icon/wh-drying-tumble-low-heat.png',
		'Dry Clean': 'https://github.com/yyang325/SoftlinesSpandex/blob/master/icon/wh-drycleaning.png',
		'Dry Clean Only': 'https://github.com/yyang325/SoftlinesSpandex/blob/master/icon/wh-drycleaning-p.png',

		'Can Be Ironed': 'https://github.com/yyang325/SoftlinesSpandex/blob/master/icon/wh-ironing.png',
		'Ironing / Low Temperature': 'https://github.com/yyang325/SoftlinesSpandex/blob/master/icon/wh-ironing-low.png',
		'No Ironing': 'https://github.com/yyang325/SoftlinesSpandex/blob/master/icon/wh-drying-tumble-not-allowed.png',

		'Can Bleach': 'https://github.com/yyang325/SoftlinesSpandex/blob/master/icon/wh-bleaching.png',
		'Do Not Bleach': 'https://github.com/yyang325/SoftlinesSpandex/blob/master/icon/wh-bleaching-not-allowed.png'
	},

	fabricDescriptions: {
		'silk': 'silk',
		'leather': 'leather',
		'wool': 'wool',
		'nylon': 'nylon',
		'acrylic': 'acrylic',
		'modal': 'modal',
		'polyester': 'polyester',
		'rayon': 'rayon',
		'spandex': 'spandex'
	},

	getScore: function(family, materials) {
		var score = 0;
		for(var i = 0; i < family.length; i++) {
			if (family[i] in materials) {
				score += parseInt(materials[family[i]]);
			}
		}
		return score;
	},
	rateMaterials: function(category, materials) {
		var ratings = [];
		var elasticity = {"property": "Elasticity", "rating": "Regular", "index":1};
		var breathability = {"property": "Breathability", "rating": "Regular", "index":1};
		var durability = {"property": "Durability", "rating": "Regular", "index":1};
		var smoothness = {"property": "Smoothness", "rating": "Regular", "index":1};
		var warmth = {"property": "Warmth", "rating": "Regular", "index":1};
		var waterproof = {"property": "Waterproof", "rating": "Regular", "index":1};

		var	cottonFamilyScore = this.getScore(this.cottonFamily, materials);
		var silkFamilyScore = this.getScore(this.silkFamily, materials);
		var leatherFamilyScore = this.getScore(this.leatherFamily, materials);
		var woolFamilyScore = this.getScore(this.woolFamily, materials);
		var nylonFamilyScore = this.getScore(this.nylonFamily, materials);
		var acrylicFamilyScore = this.getScore(this.acrylicFamily, materials);
		var	modalFamilyScore = this.getScore(this.modalFamily, materials);
		var polyesterFamilyScore = this.getScore(this.polyesterFamily, materials);
		var rayonFamilyScore = this.getScore(this.rayonFamily, materials);
		var spandexFamilyScore = this.getScore(this.spandexFamily, materials);

		if (category == "jeans") {
			if (spandexFamilyScore >= 2) {
				elasticity["rating"] = "More";
				elasticity["index"] = 2;
			} else if (spandexFamilyScore == 0) {
				elasticity["rating"] = "Less";
				elasticity["index"] = 0;
			}
			ratings.push(elasticity);

			var breathableScore = woolFamilyScore + cottonFamilyScore + modalFamilyScore + silkFamilyScore;
			var unbreathableScore = nylonFamilyScore + polyesterFamilyScore + spandexFamilyScore + leatherFamilyScore + rayonFamilyScore;

			if (breathableScore >= 90) {
				breathability["rating"] = "More";
				breathability["index"] = 2;
			} else if (unbreathableScore >= 50) {
				breathability["rating"] = "Less";
				breathability["index"] = 0;
			}
			ratings.push(breathability);

			var durableScore = leatherFamilyScore + nylonFamilyScore + polyesterFamilyScore + rayonFamilyScore;
			var undurableScore = spandexFamilyScore;

			if (durableScore >= 50) {
				durability["rating"] = "More";
				durability["index"] = 2;
			} else if (undurableScore >= 5) {
				durability["rating"] = "Less";
				durability["index"] = 0;
			}
			ratings.push(durability);
		}

		if (category == "underwear") {
			var smoothScore = silkFamilyScore + nylonFamilyScore + woolFamilyScore + spandexFamilyScore;
			var unsmoothScore = leatherFamilyScore + rayonFamilyScore + polyesterFamilyScore;

			if (smoothScore >= 50) {
				smoothness["rating"] = "More";
				smoothness["index"] = 2;
			} else if (unsmoothScore >= 50) {
				smoothness["rating"] = "Less";
				smoothness["index"] = 0;
			}
			ratings.push(smoothness);

			var breathableScore = woolFamilyScore + cottonFamilyScore + modalFamilyScore + silkFamilyScore;
			var unbreathableScore = nylonFamilyScore + polyesterFamilyScore + spandexFamilyScore + leatherFamilyScore + rayonFamilyScore;
			
			if (breathableScore >= 90) {
				breathability["rating"] = "More";
				breathability["index"] = 2;
			} else if (unbreathableScore >= 50) {
				breathability["rating"] = "Less";
				breathability["index"] = 0;
			}
			ratings.push(breathability);

			if (spandexFamilyScore >= 2) {
				elasticity["rating"] = "More";
				elasticity["index"] = 2;
			} else if (spandexFamilyScore == 0) {
				elasticity["rating"] = "Less";
				elasticity["index"] = 0;
			}
			ratings.push(elasticity);
		}

		if (category == "jacket") {
			var warmScore = woolFamilyScore + leatherFamilyScore + cottonFamilyScore + acrylicFamilyScore;
			var unwarmScore = nylonFamilyScore + polyesterFamilyScore + spandexFamilyScore + rayonFamilyScore;

			if (warmScore >= 50) {
				warmth["rating"] = "More";
				warmth["index"] = 2;
			} else if (unwarmScore >= 50) {
				warmth["rating"] = "Less";
				warmth["index"] = 0;
			}
			ratings.push(warmth);

			var waterproofScore = polyesterFamilyScore + leatherFamilyScore;
			var nonWaterproofScore = woolFamilyScore + cottonFamilyScore + acrylicFamilyScore + spandexFamilyScore + rayonFamilyScore;

			if (waterproofScore >= 50) {
				waterproof["rating"] = "More";
				waterproof["index"] = 2;
			} else if (nonWaterproofScore >= 50) {
				nonWaterproofScore = "Less";
				waterproof["index"] = 0;
			}
			ratings.push(waterproof);

			var breathableScore = woolFamilyScore + cottonFamilyScore + modalFamilyScore + silkFamilyScore;
			var unbreathableScore = nylonFamilyScore + polyesterFamilyScore + spandexFamilyScore + leatherFamilyScore + rayonFamilyScore;
			
			if (breathableScore >= 90) {
				breathability["rating"] = "More";
				breathability["index"] = 2;
			} else if (unbreathableScore >= 50) {
				breathability["rating"] = "Less";
				breathability["index"] = 0;
			}
			ratings.push(breathability);
		}
		return ratings;
	},
	getCares: function(materials, cares) {
		var leatherFamilyScore = this.getScore(this.leatherFamily, materials);
		var woolFamilyScore = this.getScore(this.woolFamily, materials);
		var nylonFamilyScore = this.getScore(this.nylonFamily, materials);
		var	modalFamilyScore = this.getScore(this.modalFamily, materials);
		var polyesterFamilyScore = this.getScore(this.polyesterFamily, materials);

		if (leatherFamilyScore >= 30) {
			cares['iron'] = ironCares[2];
		}
		if (woolFamilyScore >= 80) {
			cares['dry'] = dryCares[2];
		}
		if (nylonFamilyScore >= 30) {
			cares['wash'] = washCares[1];
			cares['dry'] = dryCares[1];
			cares['iron'] = ironCares[1];
		}
		if (modalFamilyScore >= 50) {
			cares['dry'] = dryCares[1];
			cares['bleach'] = bleachCares[0];
		}
		if (polyesterFamilyScore >= 50) {
			cares['dry'] = dryCares[1];
			cares['iron'] = ironCares[1];
		}

		var res = [];
		var singleCare = {};
		if ('wash' in cares) {
			singleCare['iconLink'] = this.careLinks[cares['wash']];
			singleCare['description'] = cares['wash'];
			res.push(singleCare);

		}

		singleCare = {};
		if ('dry' in cares) {
			singleCare['iconLink'] = this.careLinks[cares['dry']];
			singleCare['description'] = cares['dry'];
			res.push(singleCare);

		}

		singleCare = {};
		if ('iron' in cares) {
			singleCare['iconLink'] = this.careLinks[cares['iron']];
			singleCare['description'] = cares['iron'];
			res.push(singleCare);
		}

		singleCare = {};
		if ('bleach' in cares) {
			singleCare['iconLink'] = this.careLinks[cares['bleach']];
			singleCare['description'] = cares['bleach']
			res.push(singleCare);
		}
		return res;
	},

	getFabricList: function(materials) {
		var	cottonFamilyScore = this.getScore(this.cottonFamily, materials);
		var silkFamilyScore = this.getScore(this.silkFamily, materials);
		var leatherFamilyScore = this.getScore(this.leatherFamily, materials);
		var woolFamilyScore = this.getScore(this.woolFamily, materials);
		var nylonFamilyScore = this.getScore(this.nylonFamily, materials);
		var acrylicFamilyScore = this.getScore(this.acrylicFamily, materials);
		var	modalFamilyScore = this.getScore(this.modalFamily, materials);
		var polyesterFamilyScore = this.getScore(this.polyesterFamily, materials);
		var rayonFamilyScore = this.getScore(this.rayonFamily, materials);
		var spandexFamilyScore = this.getScore(this.spandexFamily, materials);

		function createFabric(family, familyScore, threshold, materials, fabricDescriptions) {
			var fabric = {};
			if (familyScore >= threshold) {
				for(var i = 0; i < family.length; i++) {
					if (family[i] in materials) {
						fabric['type'] = family[i];
						fabric['percentage'] = materials[family[i]];
						fabric['description'] = fabricDescriptions[family[0]];
					}
				}
			}
			return fabric;
		}

		var res = [];
		var createdFabric = createFabric(this.silkFamily, silkFamilyScore, 33, materials, this.fabricDescriptions);
		console.log(createdFabric.length);
		if (Object.keys(createdFabric).length != 0) {
			res.push(createdFabric);
		}
		createdFabric = createFabric(this.leatherFamily, leatherFamilyScore, 33, materials, this.fabricDescriptions);
		if (Object.keys(createdFabric).length != 0) {
			res.push(createdFabric);
		}
		createdFabric = createFabric(this.woolFamily, woolFamilyScore, 33, materials, this.fabricDescriptions);
		if (Object.keys(createdFabric).length != 0) {
			res.push(createdFabric);
		}
		createdFabric = createFabric(this.nylonFamily, nylonFamilyScore, 33, materials, this.fabricDescriptions);
		if (Object.keys(createdFabric).length != 0) {
			res.push(createdFabric);
		}
		createdFabric = createFabric(this.acrylicFamily, acrylicFamilyScore, 33, materials, this.fabricDescriptions);
		if (Object.keys(createdFabric).length != 0) {
			res.push(createdFabric);
		}
		createdFabric = createFabric(this.modalFamily, modalFamilyScore, 33, materials, this.fabricDescriptions);
		if (Object.keys(createdFabric).length != 0) {
			res.push(createdFabric);
		}
		createdFabric = createFabric(this.polyesterFamily, polyesterFamilyScore, 33, materials, this.fabricDescriptions);
		if (Object.keys(createdFabric).length != 0) {
			res.push(createdFabric);
		}
		createdFabric = createFabric(this.rayonFamily, rayonFamilyScore, 33, materials, this.fabricDescriptions);
		if (Object.keys(createdFabric).length != 0) {
			res.push(createdFabric);
		}
		createdFabric = createFabric(this.spandexFamily, spandexFamilyScore, 1, materials, this.fabricDescriptions);
		if (Object.keys(createdFabric).length != 0) {
			res.push(createdFabric);
		}

		function compare(a,b) {
			if (parseInt(a['percentage']) > parseInt(b['percentage']))
				return -1;
			if (parseInt(a['percentage']) < parseInt(b['percentage']))
			  	return 1;
			return 0;
		}
		res.sort(compare);
		return res;
	}
}

var hackathon = {
	materials: {},
	index: [],
	cares: {},

	washCares: ['Machine Wash', 'Machine Wash / Cold Only', "No Machine Wash"],
	dryCares: ['Tumble Dry', 'Tumble Dry / Low Temperature', 'Dry Clean'],
	ironCares: ['Can Be Ironed', 'Ironing / Low Temperature', 'No Ironing'],
	bleachCares: ['Do Not Bleach'],

	getCategory: function() {
		var text = document.getElementById('breadcrumb-back-link').innerText.toLowerCase();
		if (text.includes('jeans')) {
			return 'jeans';
		}
		if (text.includes('underwear')) {
			return 'underwear';
		}
		if (text.includes('jacket')) {
			return 'jacket';
		}
		return '';
	},
	
	retrieveAsinMaterialRelatedInfo: function(){
		try {
			var doms = document.getElementById(FEATURE_BULLETS_DIV).getElementsByTagName(FEATURE_LI_TAG);
			var features = [].slice.call(doms).map((dom, i) => {
				var feature_text = dom.innerText;
				var materialList = hackathon.checkMaterial(feature_text);
				var careRes = hackathon.checkCares(feature_text);

				if(Object.keys(materialList).length > 0){
					// this.materials = materialList;
					Object.keys(materialList).map((key) => {
						//if this.materials contains key already, check if it has number
						if(!this.materials[key] || this.materials[key] === 0){
							this.materials[key] = materialList[key];
						}
					});
					this.index.push(i);
				}

				if(Object.keys(this.cares).length === 0 && Object.keys(careRes).length > 0){
					this.cares = this.checkCares(feature_text);
				}
			});
		} catch (e) {
			console.log(e);
		}		

		return this.getProperties();
	},

	getProperties: function(){
		return {
			'materials': this.materials,
			'cares': this.cares
		}
	},

	checkMaterial: function(str) {
		var res = {};

		var processedStr = str.toLowerCase().replace(/[^a-zA-Z0-9-]/g, " ");

		for (var i = 0; i < MATERIAL_LIB.length; i++) {
			var reStr = '([1-9][0-9]*)' + '(?:[ -]*)' + '(' + MATERIAL_LIB[i] + ')';
			var re = new RegExp(reStr, 'g');
			var matchArr = re.exec(processedStr);
			if (matchArr != null) {
				res[matchArr[2]] = matchArr[1];
			} else {
				reStr = '(' + MATERIAL_LIB[i] + ')';
				re = new RegExp(reStr, 'g');
				matchArr = re.exec(processedStr);
				if (matchArr != null) {
					res[matchArr[1]] = MATERIAL_NA;
				}
			}
		}
		return res;
	},

	checkCares: function(str) {
		var res = {};
		console.log('hello');
		var processedStr = str.toLowerCase().replace(/[^a-zA-Z0-9-]/g, " ");

		var defaultCares = [this.washCares[0], this.dryCares[0], this.ironCares[0]];

		res['wash'] = defaultCares[0];
		res['dry'] = defaultCares[1];
		res['iron'] = defaultCares[2];

		var noMachineWash = 'no machine wash';
		var cold = 'cold';
		var low = 'low'
		var dryCleanOnly = 'dry clean only';
		var dryWashOnly = 'dry wash only';
		var noIroning = 'no ironing';

		if (processedStr.includes(cold)) {
			res['wash'] = this.washCares[1];
		}
		if (processedStr.includes(low)) {
			res['dry'] = this.dryCares[1];
		}
		if (processedStr.includes(dryCleanOnly) || processedStr.includes(dryWashOnly)) {
			res['wash'] = this.washCares[2];
			res['dry'] = this.dryCares[2];
		}
		if (processedStr.includes(noIroning)) {
			res['iron'] = this.ironCares[2];
		}
		return res;
	},
}
var h = hackathon.retrieveAsinMaterialRelatedInfo();
var p = processor.rateMaterials("jeans", h.materials);

const FEATURE_BULLETS_DIV = 'featurebullets_feature_div';
const FEATURE_LI_TAG = 'li';
const MATERIAL_LIB = ['abaca','aba','acetate','acrylic fabric','acrylic','admiralty cloth','aerophane','aertex','aida canvas','albert cloth','alepine','alpaca','angora fibres','angola','anti-pill','antique satin','ardass','argyle','armure','art linen','astrakhan','atlas','awnings','baft','ballistic','bamboo fibers','bandana','baize','bark cloth','basket weave','batik','batiste','batt','batting','beaded','beaver cloth','bemberg','bengaline','faille','binding cloth','bobbinet','bunting','burlap','bedford','berber fleece','blends','boynge','brocade','buck fleece','burlap','calico','cambric','camel’s hair','camlet','canton crepe','canvas','casement','cashmere','cashgora','cashmerlon','cerecloth','altar cloth','challis','chambray','chambric','charmeuse','chamoise','checks','cheese cloth','chenille','chevios','chiffon','china silk','chinchilla cloth','chint','chino','chintz','cloque','coir','colorfast','corduroy','cottagora','crazy horse','crochet','crepe','crepe back satin','cretonne','crinoline','crinoline net','cupro','dacron','duplex prints','damask','dazzle','deerskin','diaper cloth','dimity','doeskin','donegal','down','drill','duchess satin','duck cloth','duffel','dupioni','eyelet','elastane','elastic','english net','faconne','faille','felt','flannel','flanellette','flax','foulard','french terry','frieze','faux fur','fustian','fur','gabardine','gauze','georgette','gingham','glen checks','grogram','grosgrain','handkerchief linen','habutai','haircloth','hessian','hemp','homespun','hopsacking','ikat','illusion','interlock','irish poplin','jaconet','jacquard','jersey','jute','khakhi','kidskin','knit','types of knit','lace','lambskin','layette','linen','different linen fabric','linsey woolsey','lint','lisle','llama','loden fabric','lycra','lurex','leathertte','lycra','macrame','macinaw','mackinosh','madras','marled','matelasse','melange','mesh','microfiber','milk yarn','modal','moire','mohair','moleskin','mother of pearl','mull','muslin','nankeen','neoprene','nep','netting','ninon','nonwoven fabric','nubuck','nylon','nytril','oilcloth','olefin','organdie','organza','ottoman rib','outing flannel','oxford cloth','paisley','panama cloth','panne','pashmina','peached fabric','percale','permanent press fabric','peau de soie','petersham','pile knit','pile weave','pill','pilot cloth','pincord','pinpoint','pina fabric (pineapple)','pinstripe','pique','point d’esprit','pongee silk','poodle cloth','polo shirt','polyester','polyethylene','polypropylene','polyresin','polystyrene','poplin','poult de soi','rabbit hair','raffia','ramie','raschel knit','rayon','repp','resin','rib knit','ribbon','ric rac','ringspun fabric','ripstop','russet','santoprene','sarcenet','sarong skirt','sateen','satin','satin weave','satin','seersucker','scrim','serge','sharkskin','shantung','sheeting','sherpa','fleece','silesie','silk satin','silk','silk fabric','silk weaves','simplex','sinamay','sisal','slipper satin','spandex','stitch bonded fabric','stone washed','suede','sueded fleece','supima','supriva','swiss dot','synthetic','tactel','taffeta','tape yarn','tapestry','tartan','tattersall','teflon','terrycloth','terry velvet','thai silk','tissue','toweling','transparent velvet','tricot','tricotine','tri acetate','tsumugi silk','tulle','tusseh silk','tussah silk','tweed','twill','ultrasuede','velboa','veloutine','velour','velvet','velveteen','velveteen plush','vicuna','vinyl','viscose','voile','wadmal','whipcord','wincey','wirecloth','woolsy','worcester','yak','yoryu','zanella','zephyr','zibeline',
					'baby combing wool','belly wool','black wool','boiled wool','botany wools','brushed wool','breech','britch wool','carpet wool','lamb’s wool','merino wool','tropical wool','wool crepe','worsted wool','wool',
					'amercian pima cotton','biopolished cotton','combed cotton','cotton backed satin','cotton voile','cotton lawn','egyptian cotton','liquid cotton','organic cotton','pima cotton','polished cotton','supima cotton','cotton',
					'bicast leather','bonded leather','full-grain leather','nappa leather','patent leather','leather',
					'denim',
					];
const WASH_LIB = [	
					'machine wash',
					'hand wash',
					'dry clean',
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

	rateMaterials: function(category, materials) {
		var ratings = [];
		var elasticity = {"property": "Elasticity", "rating": "Regular"};
		var breathability = {"property": "Breathability", "rating": "Regular"};
		var durability = {"property": "Durability", "rating": "Regular"};
		var smoothness = {"property": "Smoothness", "rating": "Regular"};
		var warmth = {"property": "Warmth", "rating": "Regular"};
		var waterproof = {"property": "Waterproof", "rating": "Regular"};
		
		function getScore(family, materials) {
			var score = 0;
			for(var i = 0; i < family.length; i++) {
				if (family[i] in materials) {
					score += parseInt(materials[family[i]]);
				}
			}
			return score;
		}

		var	cottonFamilyScore = getScore(this.cottonFamily, materials);
		var silkFamilyScore = getScore(this.silkFamily, materials);
		var leatherFamilyScore = getScore(this.leatherFamily, materials);
		var woolFamilyScore = getScore(this.woolFamily, materials);
		var nylonFamilyScore = getScore(this.nylonFamily, materials);
		var acrylicFamilyScore = getScore(this.acrylicFamily, materials);
		var	modalFamilyScore = getScore(this.modalFamily, materials);
		var polyesterFamilyScore = getScore(this.polyesterFamily, materials);
		var rayonFamilyScore = getScore(this.rayonFamily, materials);
		var spandexFamilyScore = getScore(this.spandexFamily, materials);

		if (category == "jeans") {
			if (spandexFamilyScore >= 2) {
				elasticity["rating"] = "More";
			} else if (spandexFamilyScore == 0) {
				elasticity["rating"] = "Less";
			}
			ratings.push(elasticity);

			var breathableScore = woolFamilyScore + cottonFamilyScore + modalFamilyScore + silkFamilyScore;
			var unbreathableScore = nylonFamilyScore + polyesterFamilyScore + spandexFamilyScore + leatherFamilyScore + rayonFamilyScore;

			console.log(woolFamilyScore);
			console.log(cottonFamilyScore);
			console.log(modalFamilyScore);
			console.log(silkFamilyScore);

			if (breathableScore >= 90) {
				breathability["rating"] = "More";
			} else if (unbreathableScore >= 50) {
				breathability["rating"] = "Less";
			}
			ratings.push(breathability);

			var durableScore = leatherFamilyScore + nylonFamilyScore + polyesterFamilyScore + rayonFamilyScore;
			var undurableScore = spandexFamilyScore;

			if (durableScore >= 50) {
				durability["rating"] = "More";
			} else if (undurableScore >= 5) {
				durability["rating"] = "Less";
			}
			ratings.push(durability);
		}

		if (category == "underwear") {
			var smoothScore = silkFamilyScore + nylonFamilyScore + woolFamilyScore + spandexFamilyScore;
			var unsmoothScore = leatherFamilyScore + rayonFamilyScore + polyesterFamilyScore;

			if (smoothScore >= 50) {
				smoothness["rating"] = "More";
			} else if (unsmoothScore >= 50) {
				smoothness["rating"] = "Less";
			}
			ratings.push(smoothness);

			var breathableScore = woolFamilyScore + cottonFamilyScore + modalFamilyScore + silkFamilyScore;
			var unbreathableScore = nylonFamilyScore + polyesterFamilyScore + spandexFamilyScore + leatherFamilyScore + rayonFamilyScore;
			
			if (breathableScore >= 90) {
				breathability["rating"] = "More";
			} else if (unbreathableScore >= 50) {
				breathability["rating"] = "Less";
			}
			ratings.push(breathability);

			if (spandexFamilyScore >= 2) {
				elasticity["rating"] = "More";
			} else if (spandexFamilyScore == 0) {
				elasticity["rating"] = "Less";
			}
			ratings.push(elasticity);
		}

		if (category == "jacket") {
			var warmScore = woolFamilyScore + leatherFamilyScore + cottonFamilyScore + acrylicFamilyScore;
			var unwarmScore = nylonFamilyScore + polyesterFamilyScore + spandexFamilyScore + rayonFamilyScore;

			if (warmScore >= 50) {
				warmth["rating"] = "More";
			} else if (unwarmScore >= 50) {
				unwarm["rating"] = "Less";
			}
			ratings.push(warmth);

			var waterproofScore = polyesterFamilyScore + leatherFamilyScore;
			var nonWaterproofScore = woolFamilyScore + cottonFamilyScore + acrylicFamilyScore + spandexFamilyScore + rayonFamilyScore;

			if (waterproofScore >= 50) {
				waterproof["rating"] = "More";
			} else if (nonWaterproofScore >= 50) {
				nonWaterproofScore = "Less";
			}
			ratings.push(waterproof);
		}
		return ratings;
	},
	processCare: function() {
	}
}

var hackathon = {
	materials: {},
	wash: {},
	material_info_index: -1,
	retrieveAsinMaterialRelatedInfo: function(){
		try {
			var doms = document.getElementById(FEATURE_BULLETS_DIV).getElementsByTagName(FEATURE_LI_TAG);
			var features = [].slice.call(doms).map((dom, i) => {
				
				var feature_text = dom.innerText;
				var materialList = hackathon.checkMaterial(feature_text);
				var washRes = hackathon.checkWash(feature_text);

				this.materials = (Object.keys(this.materials).length === 0 && Object.keys(materialList).length > 0) ? materialList : this.materials;
				this.wash = (Object.keys(this.wash).length === 0 && Object.keys(washRes).length > 0) ? this.checkWash(feature_text) : this.wash;
				this.material_info_index = (Object.keys(this.materials).length === 0 && Object.keys(materialList).length > 0) ? this.material_info_index : i;
			});
		} catch (e) {
			console.log(e);
		}		

		return this.getProperties();
	}, 
	getProperties: function(){
		return {
			'materials': this.materials,
			'washing': this.wash
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
	checkWash: function(str) {
		var res = {};
		str = str.toLowerCase().trim();
		WASH_LIB.map((wash_key_word, i) => {
			if(str.includes(wash_key_word)){
				res['washing_instruction'] = str;
				res['wash_type'] = wash_key_word;
				if(str.includes('hot')){
					res['water_temperature'] = 'hot';
				}else if(str.includes('cold')) {
					res['water_temperature'] = 'cold';
				}
			}
		});
		return res;
	},
}

var h = hackathon.retrieveAsinMaterialRelatedInfo();
var p = processor.rateMaterials("jeans", h.materials);

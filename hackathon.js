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
					'dry wash',
				];
const MATERIAL_NA = 0;				

var hackathon = {
	materials: {},
	wash: {},
	retrieveAsinMaterialRelatedInfo: function(){
		try {
			var doms = document.getElementById(FEATURE_BULLETS_DIV).getElementsByTagName(FEATURE_LI_TAG);
			var features = [].slice.call(doms).map((dom) => {
				
				var feature_text = dom.innerText;
				var materialList = hackathon.checkMaterial(feature_text);
				var washRes = hackathon.checkWash(feature_text);

				this.materials = (Object.keys(this.materials).length === 0 && Object.keys(materialList).length > 0) ? materialList : this.materials;
				this.wash = (Object.keys(this.wash).length === 0 && Object.keys(washRes).length > 0) ? this.checkWash(feature_text) : this.wash;
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

		var word_list = str.split(" ").map((item) => {
			return item.replace(',', '').replace(/[\n\r]+/g, '').toLowerCase();
		});
		word_list.map((word, index) => {
			if(MATERIAL_LIB.includes(word.toLowerCase().trim())){
				if(index < 1) {
					res[word] = MATERIAL_NA;
				} else {
					res[word] = this.checkNumber(word_list[index-1]);
				}
			}
		})

		return res;
	},
	checkNumber: function(str){
		str = str.replace('%', '').trim();
		return isNaN(str) ? MATERIAL_NA : parseInt(str, 10);
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

hackathon.retrieveAsinMaterialRelatedInfo();

const FEATURE_BULLETS_DIV = 'featurebullets_feature_div';
const FEATURE_LI_TAG = 'li';
const MATERIAL_LIB = ['abaca','aba','acetate','acrylic fabric','active comfort denim','admiralty cloth','aerophane','aertex','aida canvas','albert cloth','alepine','alpaca','amercian pima cotton','angora fibres','angola','anti-pill','antique satin','ardass','argyle','armure','art linen','astrakhan','atlas','awnings','baby combing wool','baft','ballistic','bamboo fibers','bandana','baize','bark cloth','basket weave','batik','batiste','batt or batting','beaded','beaver cloth','belly wool','bemberg','bengaline /faille','binding cloth','bobbinet','bunting','burlap','bedford','berber fleece','bicast leather (pu leather)','biopolished cotton','black wool','blends','bonded leather','boiled wool','botany wools','boynge','breech or britch wool','brocade','brushed wool','buck fleece','burlap','calico','cambric','camel’s hair','camlet','canton crepe','canvas','casement','cashmere','carpet wool','cashgora','cashmerlon','cerecloth / altar cloth','challis','chambray / chambric','charmeuse','chamoise','checks','cheese cloth','chenille','chevios','chiffon','china silk','chinchilla cloth','chint','chino','chintz','cloque','coir','colorfast','combed cotton','corduroy','cottagora','cotton','types of cotton fabric and cotton weave','cotton backed satin','cotton voile','cotton lawn','crazy horse','crochet','crepe','crepe back satin','cretonne','crinoline','crinoline net','cupro','dacron','duplex prints','damask','dazzle','deerskin','denim / dungaree / jean','diaper cloth','dimity','doeskin','donegal','down','drill','duchess satin','duck cloth','duffel','dupioni','egyptian cotton','eyelet','elastane','elastic','english net','faconne','faille','felt','flannel','flanellette','flax','foulard','french terry','frieze','full-grain leather','faux fur','fustian','fur','gabardine','gauze','georgette','gingham','glen checks','grogram','grosgrain','handkerchief linen','habutai','haircloth','hessian','hemp','homespun','hopsacking','ikat','illusion','interlock','irish poplin','jaconet','jacquard','jersey','jute','khakhi','kidskin','knit','types of knit','lace','lamb’s wool','lambskin','layette','linen','different linen fabric','linsey woolsey','lint','lisle','llama','loden fabric','lycra','lurex','leather','leathertte','liquid cotton','lycra','macrame','macinaw','mackinosh','madras','marled','matelasse','melange','merino  wool','mesh','microfiber','milk yarn','modal','moire','mohair','moleskin','mother of pearl','mull','muslin','nankeen','nappa leather','neoprene','nep','netting','ninon','nonwoven fabric','nubuck','nylon','nytril','oilcloth','olefin','organdie','organic cotton','organza','ottoman rib','outing flannel','oxford cloth','paisley','panama cloth','panne','pashmina','patent leather','peached fabric','percale','permanent press fabric','peau de soie','petersham','pile knit','pile weave','pill','pilot cloth','pima cotton','pincord','pinpoint','pina fabric (pineapple)','pinstripe','pique','point d’esprit','pongee silk','poodle cloth','polo shirt','polished cotton','polyester','polyethylene','polypropylene','polyresin','polystyrene','poplin','poult de soi','rabbit hair','raffia','ramie','raschel knit','rayon','repp','resin','rib knit','ribbon','ric rac','ringspun fabric','ripstop','russet','santoprene','sarcenet','sarong skirt','sateen','satin','types of satin and satin weave','seersucker','scrim','serge','sharkskin','shantung','sheeting','sherpa (fleece)','silesie','silk satin','silk','types of silk fabric and silk weaves','simplex','sinamay','sisal','slipper satin','spandex','stitch bonded fabric','stone washed','suede','sueded fleece','supima','supriva','swiss dot','synthetic','tactel','taffeta','tape yarn','tapestry','tartan','tattersall','teflon','terrycloth','terry velvet','thai silk','tissue','toweling','transparent velvet','tropical wool','tricot','tricotine','tri acetate','tsumugi silk','tulle','tusseh silk / tussah silk','tweed','twill','ultrasuede','velboa','veloutine','velour','velvet','velveteen','velveteen plush','vicuna','vinyl','viscose','voile','wadmal','whipcord','wincey','wirecloth','wool','fabrics of wool fabric and weave','wool crepe','woolsy','worsted wool','worcester','yak','yoryu','zanella','zephyr','zibeline'];
const WASH_LIB = [	
					'machine wash',
					'hand wash',
					'dry wash',
				];

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
					res[word] = '';
				} else {
					res[word] = word_list[index-1];
				}
			}
		})

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

hackathon.retrieveAsinMaterialRelatedInfo();

const treeCounter = {
	"gaz": {
		"virtuals": [],
		"counters": []
	},
	"energies": {
		"virtuals": [],
		"counters": []
	},
	"eau": {
		"virtuals": [],
		"counters": [
			{
				"Localisation": "SS1 - Parking",
				"Fabricant": "DIEHL",
				"id": "afnSQJGTlT5Twi61O7HnQ3dpSs3NmLud",
				"thing": "SEXTANT_Compteur_Eau_ENERGY2_General_id1",
				"Nom": "Compteur Général Eau",
				"child": []
			}
		]
	},
	"elec": {
		"virtuals": [],
		"counters": [
			{
				"Localisation": "SS1 - local TGBT",
				"Fabricant": "ENERDIS",
				"id": "aVQhLgfmDgn4xdPKCuolcunZLbypT5fa",
				"thing": "SEXTANT_Compteurs_ENERGY2_General_Id_1",
				"Nom": "Compteur Général Electricité",
				"child": [
					{
						"Localisation": "RDC A",
						"Fabricant": "ENERDIS",
						"id": "gOGFwgMLDmPOn6D4T4MsxozIbK6GAQkx",
						"thing": "SEXTANT_Compteurs_ENERGY2_R+0_Zone_A_id_1",
						"Nom": "Compteur TD RDC A",
						"child": []
					},
					{
						"Localisation": "RDC B",
						"Fabricant": "ENERDIS",
						"id": "SA0RXDmQgGJB0uGhBdMR5ONc40eaHJ60",
						"thing": "SEXTANT_Compteurs_ENERGY2_R+0_Zone_B_id_1",
						"Nom": "Compteur TD RDC B",
						"child": []
					},
					{
						"Localisation": "R+1 A",
						"Fabricant": "ENERDIS",
						"id": "4vzOKk2IhMBNpV2zDA77CkAclFCXtgTd",
						"thing": "SEXTANT_Compteurs_ENERGY2_R+1_Zone_A_id_1",
						"Nom": "Compteur TD R+1 A",
						"child": []
					},
					{
						"Localisation": "R+1 B",
						"Fabricant": "ENERDIS",
						"id": "NdC3ECA3DnTKVuKdObm51KnbhB30BaUC",
						"thing": "SEXTANT_Compteurs_ENERGY2_R+1_Zone_B_id_1",
						"Nom": "Compteur TD R+1 B",
						"child": []
					},
					{
						"Localisation": "R+2 A",
						"Fabricant": "ENERDIS",
						"id": "MIJf8uUQvuBIBcOOWRcV8Aa37fGVNA3X",
						"thing": "SEXTANT_Compteurs_ENERGY2_R+2_Zone_A_id_1",
						"Nom": "Compteur TD R+2 A",
						"child": []
					},
					{
						"Localisation": "R+3 A",
						"Fabricant": "ENERDIS",
						"id": "fy8KBrJ0Tsg6g764M2dMU6a1Vdd7pIQN",
						"thing": "SEXTANT_Compteurs_ENERGY2_R+3_Zone_A_id_1",
						"Nom": "Compteur TD R+3 A",
						"child": []
					},
					{
						"Localisation": "R+3 B",
						"Fabricant": "ENERDIS",
						"id": "bPBsTEqd1L21uJNATBBNDTSWRr6PHAWs",
						"thing": "SEXTANT_Compteurs_ENERGY2_R+3_Zone_B_id_1",
						"Nom": "Compteur TD R+3 B",
						"child": []
					},
					{
						"Localisation": "R+4 A",
						"Fabricant": "ENEDIS",
						"id": "7hgyK8L1h9M3AP3Ta03GXLwRFiBsZGoT",
						"thing": "SEXTANT_Compteurs_ENERGY2_R+4_Zone_A_id_1",
						"Nom": "Compteur TD R+4 A",
						"child": []
					},
					{
						"Localisation": "R+4 B",
						"Fabricant": "ENERDIS",
						"id": "GHcVTcaelLbGz1m802nHHqHQ4TwLPaN1",
						"thing": "SEXTANT_Compteurs_ENERGY2_R+4_Zone_B_id_1",
						"Nom": "Compteur TD R+4 B",
						"child": []
					},
					{
						"Localisation": "SS1 - local TGBT",
						"Fabricant": "ENERDIS",
						"id": "p9AGoyTydTTV3MClRc7r9K5HGu2vT4P2",
						"thing": "SEXTANT_Compteurs_ENERGY2_ASC_Id_1",
						"Nom": "Compteur Ascenseur",
						"child": []
					},
					{
						"Localisation": "SS1 - local TGBT",
						"Fabricant": "ENERDIS",
						"id": "CLKei9FkQScMPzcvyRmihfMOsHzxpFfL",
						"thing": "SEXTANT_Compteurs_ENERGY2_SG_SS1_Id_1",
						"Nom": "Compteur SG SS1",
						"child": []
					},
					{
						"Localisation": "SS1 - local TGBT",
						"Fabricant": "ENERDIS",
						"id": "Rgnx0bzfcc8HxSTvIRT3I9paU2qMNHRv",
						"thing": "SEXTANT_Compteurs_ENERGY2_SG_RDC_Id_1",
						"Nom": "Compteur SG RDC",
						"child": []
					},
					{
						"Localisation": "R+2 B",
						"Fabricant": "ENERDIS",
						"id": "mk8dUHlQxVB28WpeEsDzMfP5KZvDs6cw",
						"thing": "SEXTANT_Compteurs_ENERGY2_R+2_Zone_B_id_1",
						"Nom": "Compteur TD R+2 B",
						"child": []
					}
				]
			}
		]
	}
}


  
const dataHighcharts = [];
const infosData = []

function addInfos(id, Nom, Localisation, bros ){
  const infos = {
    name: Nom,
    description: Localisation,
    id: String(id),
    title: "",
  };

  if ( bros.length >= 3 || id ) infos['layout'] = "hanging"
  infosData.push(infos)
}

function addData(id_parent, data){
  data.map(({child, id, Localisation, Nom}) => {
    addInfos(id, Nom, Localisation, data)
    dataHighcharts.push([id_parent, id])
    if (child.length > 0) addData(id, child) 
  }
 	
  )
}


treeCounter.elec.counters.map(({child, id, Localisation, Nom}) => {
	addInfos(id, Nom, Localisation, treeCounter.elec.counters)
	/* if(child.length > 0) {
	addInfos(id, nom, Localisation, layout)
	} 
	else if (child.length = 0){
	  addInfosMore(id, nom, Localisation, layout)
	} */
	if (child.length > 0){
	  addData(id, child)
	}else{
	  dataHighcharts.push(String(id) )
	}
  });
  

treeCounter.eau.counters.map(({child, id, Localisation, Nom}) => {
    addInfos(id, Nom, Localisation, treeCounter.eau.counters)
    /* if(child.length > 0) {
    addInfos(id, nom, Localisation, layout)
    } 
    else if (child.length = 0){
      addInfosMore(id, nom, Localisation, layout)
    } */
    if (child.length == 0 || undefined) {
      dataHighcharts.push([String(id)]);
    }
    else if (child.length > 0){
      addData(id, child)
    }
	// else{
    //   dataHighcharts.push(String(id))
    // }
  });
  
//   console.log(infosData);
  console.log(dataHighcharts);



// function countChildren(obj) {
// 	let count = 0;
	
// 	for (let key in obj) {
// 	  count++;
// 	}
	
// 	return count;
//   }
  



// function countChildren(obj) {
// 	let count = 0;
	
// 	for (let key in obj) {
// 	  if (obj[key].child && obj[key].child.length > 0) {
// 		count++;
// 	  }
// 	}
	
// 	return count;
//   }
  
//   console.log(countChildren(treeCounter)); // 1
function countChildren(obj) {
	let count = 0;
	
	for (let key in obj) {
	  if (obj[key].counters && obj[key].counters.length > 0) {
		count++;
	  }
	}
	
	return count;
  }
    // console.log(countChildren(treeCounter));


	
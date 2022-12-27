
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



const treeCounterMapper = (treeCounter) => {
    let infosData = [];
    let dataHighcharts = [];
    
    const counterMap = (parentId, node) => {
      if (node.child) {
        node.child.forEach(childNode => {
          dataHighcharts.push([parentId, childNode.id]);
          counterMap(childNode.id, childNode);
        });
      }
    }
  
    const addInfos = (id, Nom, Localisation, bros) => {
      const infos = {
        name: Nom,
        description: Localisation,
        id: String(id),
        title: "",
      };
  
      if (bros.length >= 3 || id) infos.layout = "hanging";
      infosData.push(infos);
    };
  
    const addData = (idParent, data) => {
      data.map(({ child, id, Localisation, Nom }) => {
        addInfos(id, Nom, Localisation, data);
        dataHighcharts.push([idParent, id]);
        if (child.length > 0) addData(id, child);
      });
    };
  
    Object.entries(treeCounter).forEach(([energyType, counters]) => {
      counters.counters.forEach(counter => {
        addInfos(counter.id, counter.Nom, counter.Localisation, counters.counters);
        if (counter.child.length === 0 || undefined) {
          dataHighcharts.push([String(counter.id)]);
        } else if (counter.child.length > 0) {
          addData(counter.id, counter.child);
        }
      });
    });
  
    return [infosData, dataHighcharts];
  };
  
//   console.log(treeCounterMapper(treeCounter));

  console.log(treeCounterMapper(treeCounter)[0],treeCounterMapper(treeCounter)[1]);
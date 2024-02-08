// BEGIN IVAN PROGRAM


// function addInfos(id, Nom, Localisation, bros ){
//   const infos = {
//     name: Nom,
//     description: Localisation,
//     id: String(id),
//     title: "",
//   };

//   if ( bros.length >= 3 || id ) infos['layout'] = "hanging"
//   infosDataNodes.push(infos)
// }

// function addData(id_parent, data){
//   data.map(({child, id, Localisation, Nom}) => {
//     addInfos(id, Nom, Localisation, data)
//     relationsNodeToHighcharts.push([id_parent, id])
//     if (child.length > 0) addData(id, child) 
//   })
// }

// jsonTree.elec.counters.map(({child, id, Localisation, Nom}) => {
//   addInfos(id, Nom, Localisation, jsonTree.elec.counters)
//   /* if(child.length > 0) {
//   addInfos(id, nom, Localisation, layout)
//   } 
//   else if (child.length = 0){
//     addInfosMore(id, nom, Localisation, layout)
//   } */
//   if (child.length > 0){
//     addData(id, child)
//   }else{
//     relationsNodeToHighcharts.push(String(id))
//   }
// });


// jsonTree.eau.counters.map(({child, id, Localisation, Nom}) => {
//     addInfos(id, Nom, Localisation, jsonTree.eau.counters)
//     /* if(child.length > 0) {
//     addInfos(id, nom, Localisation, layout)
//     } 
//     else if (child.length = 0){
//       addInfosMore(id, nom, Localisation, layout)
//     } */
//     if (child.length == 0 || undefined) {
//       relationsNodeToHighcharts.push([String(id)]);
//     }
//     else if (child.length > 0){
//       addData(id, child)
//     }
// 	// else{
//     //   relationsNodeToHighcharts.push(String(id))
//     // }
//   });




// END IVAN PROGRAM




// V ----- 4 

// const treeCounterMapper = (jsonTree) => {
//   let result = [];
  
//   const counterMap = (parentId, node) => {
//     if (node.child) {
//       node.child.forEach(childNode => {
//         result.push([parentId, childNode.id]);
//         counterMap(childNode.id, childNode);
//       });
//     }
//   }

//   Object.entries(jsonTree).forEach(([energyType, counters]) => {
//     counters.counters.forEach(counter => {
//       counterMap(counter.id, counter);
//     });
//   });

//   return result = dataHighcharts;
// };


// --- END  V 5  



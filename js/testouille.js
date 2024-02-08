const jsonTree = {
  "counters": [
    {
      "thing": "General",
      "localisation": "N+1",
      "nom": "Compteur General",
      "id": 1,
      "docs": { "matterport": "http:babab", "autre": "http:erer" },
      "child": [
        {
          "thing": "SOUS COMPTEUR 1",
          "localisation": "N+1",
          "nom": "TGBT",
          "id": 2,
          "docs": { "matterport": "http:babab", "autre": "http:erer" },
          "child": [
            {
              "thing": "SOUS COMPTEUR 2",
              "localisation": "N+1",
              "nom": "TD",
              "id": 3,
              "docs": { "matterport": "http:babab", "autre": "http:erer" },
              "child": []
            }
          ]
        },
        {
          "thing": "Sous compteur 1 2",
          "localisation": "N+1",
          "nom": "Truc",
          "id": 12,
          "docs": { "matterport": "http:babab", "autre": "http:erer" },
          "child": []
        }
      ]
    }
  ]
}



// treeCounter = (jsonTree.counters[0]);

// console.log((Object.keys(treeCounter)));

// var newObject = Object.keys(treeCounter.child).map(function(key) {
//    console.log(treeCounter[key]);
// });


const dataHighcharts = [];
const infosData = []

function addInfos(id, nom, localisation ){
  infosData.push({
    name: nom,
    description: localisation,
    id: id,
    title: "<a href='https://google.com' target='_blank'>ⓘ</a> <a href='https://billy.com'  target='_blank'>📄</a>"
  })
}

function addData(parent, data){
  data.map(({child, id, localisation, nom}) => {
    addInfos(id, nom, localisation)
    dataHighcharts.push([String(parent), id])
    if (child.length > 0) addData(id, child)
  })
}

jsonTree.counters.map(({child, id, localisation, nom}) => {
  addInfos(id, nom, localisation)
  if (child.length > 0){
    addData(id, child)
  }else{
    dataHighcharts.push([id])
  }
});

console.log(dataHighcharts)
console.log(infosData)




treeCounter = (jsonTree.counters[0]);



// let finalarray = [];

// const getIterate = (props) =>{
//   if(Object.keys(treeCounter).includes('thing')){
//     counters.nom.map(({}) => {
//       finalarray.push(nom);
//             }) 


//   }

//    else {
//     console.log("ghh")
//   }
// }

// getIterate();

// console.log("final array" + finalarray);



// const getIterate = (array,finalarray,dropzone,type) =>{
//   if(Object.keys(array).includes('Sous_Categorie')){
//       array['groups'].map((grp)=>{
//           finalarray.push({'idgroupe':grp,'parent':array.ID_Categorie,'dropzone':dropzone,'type':type});
//       })
//       getIterate(array['Sous_Categorie'],finalarray,dropzone,type)
//       return array
//   }else{
//       Object.values(array).map((elem,index)=>{
//           console.log(elem)
//           if(Object.keys(elem).includes('groups')){
//               elem['groups'].map((grp)=>{
//                   finalarray.push({'idgroupe':grp,'parent':elem.ID_Categorie,'dropzone':dropzone,'type':type});
//               })
//               getIterate(elem['Sous_Categorie'],finalarray,dropzone,type);
//               return elem;
//           }else{
//               return elem;
//           }
//       });
//   }
// }
// }


// // console.log(Object.keys(treeCounter));

// if ((Object.keys(treeCounter)).includes("thing")) 
//  {
//   console.log("ggg");
//  }
// else {
//   console.log("no");
// }


// function childPush(node){
//   console.log("Node", node.thing);
//   if(node.thing){
//     node.thing.forEach(function(child) {
//       childPush(child)
//     });
//   }
// }

// childPush(jsonTree.counters)

/// BEGIN MAP IN AN OBJECT 
// for (const [key, value] of Object.entries(treeCounter[0].child[0].thing)) {
//   // if (birds.hasOwnProperty(key)) 
//   console.log(`${value}`);
// }
/// END MAP IN AN OBJECT 





// const map = (arr, callback) => {

//   //create a new array
//   const newArray = []


  
//   //loop over the array passed to the function
//   for (let index = 0; index < arr.length; index += 1){
//     //Push the result of the callback into the new array
//     newArray.push(callback(arr[index], index))
//   }

//   //after done looping, return the resulting array
//   return newArray

// }





// First column 

// let firstNode = [];

// let secondNode = [];


// console.log(jsonTree.counters)

// firstThing = treeCounter[0].thing;
// secondThing = treeCounter[0].child[0].thing;

// // console.log(firstThing);

// firstNode.push(firstThing);
// firstNode.push(secondThing);


// var myObject = { 'a': 1, 'b': 2, 'c': 3 };

// for (var key in myObject) {
//   if (myObject.hasOwnProperty(key)) {
//     myObject[key] *= 3;
//   }
// }





// console.log(myObject);
// { 'a': 2, 'b': 4, 'c': 6 }






// treeCounter =  JSON.stringify(jsonTree.counters[0].child[1].thing);






// // BEGIN  TO TRYY 5

// const iterate = (obj) => {
//     Object.keys(obj).forEach(key => {

//     console.log(`key: ${key}, value: ${obj[key]}`)

//     if (typeof obj[key] === 'object' && obj[key] !== null) {
//             iterate(obj[key])
//         }
//     })
// }

// console.log(iterate);

// END  TO TRYY 5




// BEGIN  TO TRYY 10


// var keys = Object.keys(treeCounter),
//     len = keys.length,
//     i = 0,
//     prop,
//     value;
// while (i < len) {
//     prop = keys[i];
//     value = treeCounter[prop].c;
//     i += 1;
//     console.log(value)
// }


// END  TO TRYY 20




// const iterate = (treeCounter) => {
//     Object.keys(treeCounter).forEach(key => {

//     console.log(`key: ${key}, value: ${treeCounter[key]}`)

//     if (typeof treeCounter[key] === 'object' && treeCounter[key] !== null) {
//             iterate(treeCounter[value])
//         }
//     })
// }

// console.log(iterate);

// console(treeCounter.Object.length);



// if(treeCounter) {
//     (Object.keys(treeCounter).length);
// } 










/// BEGIN COUNTER LENGTH TO KNOW LENGTH TO MAP !! 

// if(treeCounter) {
//     console.log(Object.keys(treeCounter).length);
// } 

/// END COUNTER LENGTH TO KNOW LENGTH TO MAP !! 




// console.log(Object.values(treeCounter));






// console.log(Object.values(treeCounter.counters[0].child[1].thing));


// Object.keys 
// console.log(treeCounter);

//   sonTreeCounter = treeCounter.counters;

// sonTreeCounter = Object.values(treeCounter)[0][0];


// //   console.log(sonTreeCounter);
// let [firstKey] = Object.keys(treeCounter)

// console.log(firstKey)
// console.log(treeCounter[firstKey])




// const getIterate = (array,finalarray,dropzone,type) =>{
//   if(Object.keys(array).includes('Sous_Categorie')){
//       array['groups'].map((grp)=>{
//           finalarray.push({'idgroupe':grp,'parent':array.ID_Categorie,'dropzone':dropzone,'type':type});
//       })
//       getIterate(array['Sous_Categorie'],finalarray,dropzone,type)
//       return array
//   }else{
//       Object.values(array).map((elem,index)=>{
//           console.log(elem)
//           if(Object.keys(elem).includes('groups')){
//               elem['groups'].map((grp)=>{
//                   finalarray.push({'idgroupe':grp,'parent':elem.ID_Categorie,'dropzone':dropzone,'type':type});
//               })
//               getIterate(elem['Sous_Categorie'],finalarray,dropzone,type);
//               return elem;
//           }else{
//               return elem;
//           }
//       });
//   }
// }




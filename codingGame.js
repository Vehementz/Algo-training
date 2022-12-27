// const N = parseInt(readline());

// // Write an answer using console.log()
// // To debug: console.error('Debug messages...');

// let greatestNumber = [];


// for (i = 0; i <= N.length; i++) {
//     if {
//         (i == i +1) 
//     } 
// }

// // console.log('answer');
// console.log()



// const N = parseInt(readline());

// let arr = N.toString().split("");
// let longueur = 0
// let same = false
// let greatestNumb = 0

// for(let i = 0; i < arr.length; i++){
//     if(!same){
//         longueur = 0
//     }

//     if(arr[i] === arr[i+1]){
//         same = true
//         longueur += 1
//     } else {
//         same = false
//     }
//     if(longueur > greatestNumb){
//         greatestNumb = longueur
//     }
// }

// console.log( greatestNumb + 1);




// const N = parseInt(readline()).toString()
// max=0
// c=0
// for(let i=0;i<N.length;i++) {
//     if(N[i] ==N[i+1]) c++
//     if(N[i] !=N[i+1]) {
//         if(c>max) max=c
//         c=0
//     }
// }
// print(max+1)





// // Python 

// import sys
// import math

// # Auto-generated code below aims at helping you parse
// # the standard input according to the problem statement.

// n = input()
// longest=1
// k=n[0]
// l=1
// for a in n[1:]:
//     if a == k:
//         l+=1
//     else:
//         longest=l
//         l=1
//     k=a
// print(max(l,longest))




// import sys
// import math

// # Auto-generated code below aims at helping you parse
// # the standard input according to the problem statement.

// n = input()
// old = n[0]
// m = 0
// c = 0

// for i in n[1:]:
//     if old == i:
//         c += 1
//         if m <= c:
//             m = c
//     else:
//         c = 0
//     old = i

// print(m+1)




// import sys
// import math

// # Auto-generated code below aims at helping you parse
// # the standard input according to the problem statement.
// c=0
// l=[]
// n = int(input())
// a=str(n)
// prev=a[0]
// for i,v in enumerate(a):
//     if v==prev:
//         c+=1
//     else:
//         prev=a[i]
//         c=1
//     l.append(c)

// # Write an answer using print
// # To debug: print("Debug messages...", file=sys.stderr, flush=True)

// print(max(l))

var data = [1,2,3,4,5,6,7,8,9,12,]
var even = [];
var odd = [];

for(let i=0; i<data.length;i++){
    console.log("--------------------current number------------", data[i], i)
    if(data[i] == 7){
        console.log("-----my lucky number exists-----------")
    }
    if( data[i]%2 === 0){
        even.push(data[i])
        console.log("----- evrn number-----------",data[i] )
        
    }
    else{odd.push(data[i])
    }
    console.log("-------odd number----------", odd)
    console.log("-------even number----------", even)

}
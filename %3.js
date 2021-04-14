var data = [101,102,103,104,105,106,107,209,121,191]
var even = [];
var odd = [];

for(let i=0; i<data.length;i++){
    console.log("--------------------current number------------", data[i], i)
    if(data[i] == 7){
        console.log("-----my lucky number exists-----------")
    }
    if( data[i]%2== 0){
        even.push(data[i])
        console.log("----- even number-----------",data[i] )
        
    }
    
    else{odd.push(data[i])
    }
    if(data[i]==107){
        console.log("--its flat number of ravi---")
    }
    console.log("-------odd number----------", odd)
    console.log("-------even number----------", even)

}
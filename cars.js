var cars=["bmw","volva","tyoto","tata","mahendra"]
var i=2;
var dreamCar=[];
var carsA=[];
var len=cars.length;

for(let i=0;i<cars.length;i++)
{
    console.log("--cars-",cars[i],i)
    if(cars[i]=="bmw"){
        console.log("----my dream car---")
        if(cars[i]=="mahendra"){
            dreamCar.push(cars[i])
            console.log("----my first car---")
        }else {carsA.push(cars[i])
            
        }
        console.log("-------dream car----------", dreamCar)
    console.log("-------carsA----------",carsA)
    
         
    }
    

}
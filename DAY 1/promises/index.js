const myPromise = new Promise((resolve, reject) => {
    let marks = 33;

    if (marks > 33) {
        resolve("pass");
    } else {
        reject("fail");
    }
});

//f1();

const getData = async()=>{
   try{
     const response = await fetch("https://fakestoreapi.com/products");
     const data = await response.json();
     return data;
   }
   catch(error){
    console.log("error occured");
   }
}

fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((data) => console.log(data))
.catch((error) => console.log("error occured", error));

myPromise
.then((msg)=>console.log(msg))
.catch((error)=>console.log("some error occured",error));

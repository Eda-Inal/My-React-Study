// setTimeout(()=>{
//     console.log("hello")
// },4000);
// const sayHi= (cb) => {
// cb();
// }
// sayHi(()=>{
//     console.log("hello")
    
// })

// (async()=>{
//   const hello = await
//   await console.log("hello");
//   const again = await
//   await console.log("again");
// })()
const getComments = () =>{
  return new Promise((resolve, reject) =>{
   
    resolve("hello");
  }

  )}
  getComments()
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

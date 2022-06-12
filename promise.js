const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise ((ressolve, reject) =>{
    if (emosi == null){
      reject  ("Tidak ada file yang membuat penonton Marah atau Tidak Marah");
    } else if (emosi == "marah"){
      (async () =>{
        const result = sum (await promiseTheaterIXX(), emosi);
        const result2 = sum (await promiseTheaterVGC(), emosi);
        ressolve (result + result2);        
      })();
    } else if (emosi == "tidak marah"){
      (async() =>{
        const result = sum (await promiseTheaterIXX(), emosi);
        const result2 = sum (await promiseTheaterVGC(), emosi);
        ressolve(result + result2);
      })();
    }
  })
};

const sum = (data, emosi) =>{
  let counter = 0;
  if (emosi == "marah") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasil == "marah") {
        counter++;
      }
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasil == "tidak marah") {
        counter++;
      }
    }
  }
  return counter;
}


module.exports = {
  promiseOutput,
};

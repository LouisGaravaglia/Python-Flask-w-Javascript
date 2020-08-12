/** processForm: get data from form and make AJAX call to our API. */
$("#lucky-form").on("submit", async function processForm(evt) {
  evt.preventDefault();
  

  const name = $("#name").val();
  const yearString = $("#year").val();
  const email = $("#email").val();
  const color = $("#color").val();
  const year = parseInt(yearString)
 
  // if (!query) return;

  // $("#episodes-area").hide();

  const obj = await makeRequest(name, year, email, color);
 

  if (obj.errors) {
    if (obj.errors.name) $("#name-err").text(obj.errors.name[0])
    if (obj.errors.year) $("#year-err").text(obj.errors.year[0])
    if (obj.errors.email) $("#email-err").text(obj.errors.email[0])
    if (obj.errors.color) $("#color-err").text(obj.errors.color[0])
  
  } else {
    response = `Your lucky number is ${obj.num.num} (${obj.num.fact}).
    Your birth year (${obj.year.year}) fact is ${obj.year.fact}.`

    $("#lucky-results").text(response)
  }
  


});
   
// async function processForm(evt) {

//     evt.preventDefualt()

//     // $name = $("#name-err").val()
//     // $year = $("#year-err").val()
//     // $email = $("#email-err").val()
//     // $color = $("#color-err").val()
// alert("yo")
//     $name = "hi"
//     $year = "my year"
//     $email = "my email"
//     $color = "my color"
    
//     const resp = await axios.post("/api/get-lucky-num", { name: $name, year: $year, email: $email, color: $color });
//     console.log(resp);
//     alert(resp)
// }

/** handleResponse: deal with response from our lucky-num API. */

async function makeRequest(name, year, email, color) {
  const res = await axios.post("/api/get-lucky-num", { name: name, year: year, email: email, color: color });
   
  obj = res.data;

  return obj

  

  // return [{
  //   id: show.id,
  //   name: show.name,
  //   summary: show.summary,
  //   image: show.image ? show.image.medium : missingImg
  // }]
}


async function getLuckyResponse(respYear) {

  const baseURL = "http://numbersapi.com"
  const randomNum = Math.floor(Math.random() * 100) + 1

  const yearFact = await axios.get(`${baseURL}/${respYear}/year`);
  const numberFact = await axios.get(`${baseURL}/${randomNum}`);
 

  obj = {num: { fact: numberFact, num: randomNum  }, year: { fact: yearFact, year: respYear  }}
  return JSON.stringify(obj)

// {
//   "num": {
//     "fact": "67 is the number of throws in Judo.",
//     "num": 67
//   },
//   "year": {
//     "fact": "1950 is the year that nothing remarkable happened.",
//     "year": "1950"
//   }
// }


}

// $("#lucky-form").on("submit", processForm);

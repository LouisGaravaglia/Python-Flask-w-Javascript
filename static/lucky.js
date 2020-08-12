/** processForm: get data from form and make AJAX call to our API. */
$("#lucky-form").on("submit", async function processForm(evt) {
  evt.preventDefault();
  

  const name = $("#name").val();
  const year = $("#year").val();
  const email = $("#email").val();
  const color = $("#color").val();
 
  // if (!query) return;

  // $("#episodes-area").hide();

  const obj = await makeRequest(name, year, email, color);
  console.log(obj);

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

// $("#lucky-form").on("submit", processForm);

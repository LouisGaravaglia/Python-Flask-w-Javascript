/** processForm: get data from form and make AJAX call to our API. */
alert("hi");

async function processForm(evt) {
    evt.preventDefualt()

    $name = $("#name-err").val()
    $year = $("#year-err").val()
    $email = $("#email-err").val()
    $color = $("#color-err").val()
    
    // const resp = await axios.post("/post-score", { name: $name, year: $year, email: $email, color: $color });
    console.log($name, $year, $email, $color);
    // handleResponse(resp)
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
    console.log(resp);
}


$("#lucky-form").on("submit", processForm);

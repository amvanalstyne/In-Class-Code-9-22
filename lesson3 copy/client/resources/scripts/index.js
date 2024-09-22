const url = "http://universities.hipolabs.com/search?country=United+States"
let universityList = []
async function handleOnLoad(){
    await getData();
    buildTable();
//     console.log("start")
//     setTimeout(() => {
//         console.log("this will appear after two seconds")
//     }, 2000)
//     console.log("finished")
//     //this is asynchronous, it does not wait for the timer to end before printing finished
//     //this can have major consequences
//     //this allows it to load the easier things first even if they come after the longer loading things
}

function buildTable(){
    let html = `<table>
    <tr>
    <th>University Name</th>
    <th>University Web Address</th>
    </tr>`
    universityList.forEach(university => {
        html+= `<tr>
        <td>${university.name}</td>
        <td>${university.domains[0]}</td>
        </tr>`
    })
    html += `</table>`
    document.getElementById("app").innerHTML = html
}

async function getData(){
    const response = await fetch(url)
    const data = await response.json()
    universityList = data
    console.log(data)


//     fetch(url).then(function (response) {
//         console.log(response);
//         if(response.status == 200){
//             return response.json()
//         } else{
//             return []
//         }
//         //this if statement is errorhandling
//         //return response.json()
//     }).then((data) => {
//         console.log(data);
//     })
//     //function response and data => are two ways to write the same thing, i showed both for later use
}
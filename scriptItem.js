const backendIPAddress = "44.213.44.155"

let itemData;

const getItemsFromDB = async () => {
    const options = {
        method: "GET",
        credentials: "include",
    };
    let studentId = '6430204221';
    await fetch(`http://${backendIPAddress}/${studentId}`, options)
    .then((response) => response.json()) 
    .then((data) => {
        itemData = data;
    })
    .catch((error) => console.error(error));
};

//show data from calendar
const showItemsInTable = async (itemData)=> {
    const table = document.getElementById("") //fill main table body
    table.innerHTML = "";

}

//add event by user
const addEvent = async () => {
    //const name = document.getElementById("") //event name
    //const date = document.getElementById("")
    //const description = document.getElementById("")
    const student_id = 'your_student_id';
    const task_name = 'example task';
    const description = 'example description';
    const subject_id = 'example subject id';
    const type = 'example type';
    const duedate = '2023-05-01';
    const deadline = '2023-05-02';
    const status = 'example status';

    const options = {
        headers : {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            student_id: student_id,
            task_name: task_name,
            description: description,
            subject_id: subject_id,
            type: type,
            duedate: duedate,
            deadline: deadline,
            status: status
        }),
        credentials: "include",
    };
    let studentId = '6430204221';
    await fetch(`http://${backendIPAddress}/${studentId} `, options)
    .catch((error)=> console.error(error))
};

const deleteItem = async(item) => {
    const options = {
        method: "DELETE",
        credentials: "include",
    };
    let student_id  = '6430204221';
    let task_name =  'history_reading';
    await fetch(`http://${backendIPAddress}/${student_id}/tasks/${task_name}`, options)
    .then((response) => response.json()) 
    .then((data) => {
        itemData = data;
    })
    .catch((error) => console.error(error));
};

await getItemsFromDB();
showItemsInTable(itemData);
deleteItem();

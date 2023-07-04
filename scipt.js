let students= [ { ID: 1, name: 'Alice', age: 21, grade: 'A', degree: 'Btech', email: 'alice@example.com' }, { ID: 2, name: 'Bob', age: 22, grade: 'B', degree: 'MBA', email: 'bob@example.com' }, { ID: 3, name: 'Charlie', age: 20, grade: 'C', degree:'Arts', email: 'charlie@example.com' } ];;

const form=document.getElementById("form");



form.addEventListener("submit", function(event) {
   event.preventDefault();
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let grade = document.getElementById("gpa").value;
    let degree = document.getElementById("degree").value;
    let email = document.getElementById("email").value;

    const student = {
        ID: students.length + 1,
        name: name, 
        age: age, 
        grade: grade, 
        degree: degree, 
        email: email
    }
    imgs.push(editicon);
    imgs.push(deleteicon);
    students.push(student);
    
    console.log(students);
    displaydata(students);
});
 
function displaydata(arr){
    let tbody= document.getElementById("tbody");
    tbody.innerHTML = ``;
    let str = ``;
    for(let i = 0;i<arr.length;i++){
        str = str + `<tr>
        <td>${arr[i].ID}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].email}</td>
        <td>${arr[i].age}</td>
        <td>${arr[i].grade}</td>
        <td class="icons">
        <div>${arr[i].degree}</div>
        <div>
        <button id="edit" class="btn" onclick="editData(event)">
        <img src="assets/edit1.png" id="edit-id${arr[i].ID}" alt="edit">
        </button>
        <button id="trash-button" class="btn" onclick="deleteData(event)">
        <img src="assets/trash.png" id="trash-id${arr[i].ID}" alt="trash">
        </button>
        </div>
        </td>
        </tr>
        `
    }
    tbody.innerHTML = str;
    // let row=table.insertRow(i+1);
    // editicon.style.display="visible";
    // let id=row.insertCell(0);
    // let name=row.insertCell(1);
    // let email=row.insertCell(2);
    // let age=row.insertCell(3);
    // let gpa=row.insertCell(4);
    // let degree=row.insertCell(5);
    // id.innerHTML=students.length;
    // name.innerHTML=students[i].name;
    // email.innerHTML=students[i].email;
    // age.innerHTML=students[i].age;
    // gpa.innerHTML=students[i].grade;
    // degree.innerHTML=students[i].degree;

    // degree.insertAdjacentElement("afterend", imgs[idx++]);
    // editicon.insertAdjacentElement("afterend", imgs[idx++]);
    // i++;
    
    document.getElementById("form").reset();
    
}



function search(){
    document.getElementById("tbody").innerHTML="";
    
    let input = document.getElementById('searchinput').value;
    input=input.toLowerCase();
    let match=students.filter(matches);


    function matches(n){
        return n.name.toLowerCase().includes(input)||
        n.email.toLowerCase().includes(input)||
        n.degree.toLowerCase().includes(input);
            
        
        
    }

    displaydata(match);
}

document.getElementById("searchinput").addEventListener("input",search);

function editData(event){

    let btnID = event.target.id;  
    let extractedID = Number(btnID.substring(7));

    
    let toggle = document.getElementById("edit");
    toggle.textContent = '';
    toggle.textContent = 'Edit Student';
    

    for(let i = 0;i<students.length;i++){
        if(students[i].ID == extractedID){
            document.getElementById("name").value = students[i].name;
            document.getElementById("email").value = students[i].email;
            document.getElementById("age").value = students[i].age;
            document.getElementById("gpa").value = students[i].gpa;
            document.getElementById("degree").value = students[i].degree;
            students.splice(i,1);
            displaydata(students);
            break;
        }
    }
}

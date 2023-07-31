// JavaScript code
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/ed2cdcf07b7a489bbf767198d25a7f7c/AppointmentData")
        .then((response) => {
            for (var i = 0; i < response.data.length; i++) {
                displayDataOnScreen(response.data[i]);
            }
        })
        .catch((error) => {
            console.log(error);
        });
});

var form = document.getElementById('details');
form.addEventListener('submit', addUser);

function addUser(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;

    var userData = {
        name: name,
        email: email,
        number: number
    };

    // Making network call to add a new user to server database
    axios.post("https://crudcrud.com/api/ed2cdcf07b7a489bbf767198d25a7f7c/AppointmentData", userData)
        .then((response) => {
            displayDataOnScreen(response.data);//here we are giving data to the function and it is 
            //extracting the user id to make list element of pirticular id
        })
        .catch((err) => {
            console.log(err);
        });

    // Reset the form inputs
    form.reset();
}

function deleteUser(event) {
    var li = event.target.parentElement; // Get the parent list item (li)
    var userID = li.getAttribute('data-user-id'); // Get the user's ID from the data attribute

    axios.delete(`https://crudcrud.com/api/ed2cdcf07b7a489bbf767198d25a7f7c/AppointmentData/${userID}`)
        .then(() => {
            li.remove();
        })
        .catch((error) => {
            console.log(error);
        });
}

function displayDataOnScreen(userData) {
    var li = document.createElement('li');
    li.className = 'list-group-item';

    var name = userData.name;
    var email = userData.email;
    var number = userData.number;
    var userID = userData._id; // Assuming the server returns the ID as "_id". Change this according to your API.
/** <li class="list-group-item" data-user-id="user-12345">
    John Doe<br>
    john.doe@example.com<br>
    123-456-7890<br>
    <button>remove</button>
    </li> */
    li.setAttribute('data-user-id', userID); // Add the user's ID as a data attribute to the list item (li)

    var liname = document.createTextNode(name);
    li.appendChild(liname);
    li.appendChild(document.createElement('br'));

    li.appendChild(document.createTextNode(email));
    li.appendChild(document.createElement('br'));

    li.appendChild(document.createTextNode(number));
    li.appendChild(document.createElement('br'));

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'remove';
    deleteButton.addEventListener('click', deleteUser); // Attach the deleteUser function here
    li.appendChild(deleteButton);

    var userList = document.getElementById('users');
    userList.appendChild(li);
}

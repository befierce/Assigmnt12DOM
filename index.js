var form = document.getElementById('details');
//add event listener
form.addEventListener('submit', addUser);

//giving functionality
function addUser(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('Number').value;

    var userDetails = {
        email: email,
        name: name,
        number: number
    };
    var userDetailsString = JSON.stringify(userDetails);
    var userId = generateUserId();
    localStorage.setItem(userId, userDetailsString);

    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(name));
    li.appendChild(document.createElement('br'));
    li.appendChild(document.createTextNode(email));
    li.appendChild(document.createElement('br'));
    li.appendChild(document.createTextNode(number));
    li.appendChild(document.createElement('br'));

    var userList = document.getElementById('users');
    userList.appendChild(li);
}
function generateUserId() {
        // Implement your logic to generate a unique identifier
        // This can be a random string, a timestamp, or any other unique value
        // Return the generated identifier
        return "user_" + Math.random().toString(36).slice(2, 11);
 }

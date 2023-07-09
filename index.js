var form = document.getElementById('details');
form.addEventListener('submit', addUser);
// When adding the event listener to the form, you use form.addEventListener('submit', addUser). 
// In this case, form refers to the form element itself, which is obtained using document.getElementById('details'). 
// This approach is used because you want to listen for the form's submit event and invoke 
// the addUser function when the form is submitted.

function addUser(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;

    //<!--SAVING DATA TO LOCAL STORATGE-->//
    var userData = {
        name: name,
        email: email,
        number: number
    };
    var userDataString = JSON.stringify(userData);
    var userID = generateUserId();//create random USER ID to take 
    //multiple users
    localStorage.setItem(userID, userDataString);
    //--------------------------------------//

    //<!--breakdown of ADDING USER DATA TO LIST ITEMS-->//
    //li elemtnt create kia document mai
    var li = document.createElement('li');
    //usko classname diya
    li.className = 'list-group-item';
    //variable liya usme text node create kiya
    var liname = document.createTextNode(name);
    //us variable ko li ka child bna diya means text node ko
    //li mai as a child create kr diai
    li.appendChild(liname);
    li.appendChild(document.createElement('br'));//is code ka
    //breakdown same hai
    li.appendChild(document.createTextNode(email));
    li.appendChild(document.createElement('br'));
    li.appendChild(document.createTextNode(number));
    li.appendChild(document.createElement('br'));

    //creating the delete button
    var deleteButton = document.createElement('button');//abhi doc kohmne kheecha apne pas
    deleteButton.textContent = 'remove'; 
    deleteButton.addEventListener('click', deleteUser);
    // when working with elements that already exist in the HTML markup(like the form), you can access them using 
    //document.getElementById and attach event listeners to them.However, when creating elements 
    // dynamically, you can directly add event listeners to them before appending them to the DOM.
    function deleteUser(e){
        localStorage.removeItem(userID);
        li.remove();
    }
    li.appendChild(deleteButton);
    //abhi tak li create kia usko text node dia delet button diya
    //are ab 'li' ko bhi to Dom mai 'ul' elemnt mai as a child append kroge na
    var userList = document.getElementById('users');
    userList.appendChild(li);

     // Reset the form inputs
     form.reset();

}
function generateUserId(){
    return "user_" + Math.random().toString(36).slice(2, 11);
}
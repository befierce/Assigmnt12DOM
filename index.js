var form = document.getElementById('details');
form.addEventListener('submit', addUser);

function addUser(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;

    //<!--SAVING DATA TO LOCAL STORATGE-->//
    var userData = {name: name,
                    email: email,
                    number: number};
    var userDataString = JSON.stringify(userData);
    localStorage.setItem("user",userDataString);
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

}
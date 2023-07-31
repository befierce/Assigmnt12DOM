var form = document.getElementById('details');
        form.addEventListener('submit', addUser);

        function addUser(e) {
            e.preventDefault();
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var number = document.getElementById('number').value;

            // Saving data to the local storage
            var userData = {
                name: name,
                email: email,
                number: number
            };
            var userID = generateUserId();

            // making network calls
            axios.post("https://crudcrud.com/api/ed2cdcf07b7a489bbf767198d25a7f7c/AppointmentData", userData)
                .then((response) => { displayDataOnScreen(response.data); })
                .catch((err) => { console.log(err) })

            // Call the function to display data

            // Reset the form inputs
            form.reset();
        }

        function displayDataOnScreen(userData) {
            var li = document.createElement('li');
            li.className = 'list-group-item';

            var name = userData.name;
            var email = userData.email;
            var number = userData.number;

            var liname = document.createTextNode(name);
            li.appendChild(liname);
            li.appendChild(document.createElement('br'));

            li.appendChild(document.createTextNode(email));
            li.appendChild(document.createElement('br'));

            li.appendChild(document.createTextNode(number));
            li.appendChild(document.createElement('br'));

            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'remove';
            deleteButton.addEventListener('click', deleteUser);

            function deleteUser(e) {
                // localStorage.removeItem(userID);
                li.remove();
            }
            li.appendChild(deleteButton);

            var userList = document.getElementById('users');
            userList.appendChild(li);

            var editButton = document.createElement('button');
            editButton.textContent = 'edit';
            editButton.addEventListener('click', editDetails);

            function editDetails(e) {
                // localStorage.removeItem(userID);
                var retrievedUserDataString = localStorage.getItem(userID);
                var retrievedUserData = JSON.parse(retrievedUserDataString);

                // Populate the form with the user details for editing
                document.getElementById('name').value = retrievedUserData.name;
                document.getElementById('email').value = retrievedUserData.email;
                document.getElementById('number').value = retrievedUserData.number;

                li.remove();
                localStorage.removeItem(userID);
            }
            li.appendChild(editButton);

            var userLi = document.getElementById('users');
            userLi.appendChild(li);
        }

        function generateUserId() {
            return "user_" + Math.random().toString(36).slice(2, 11);
        }
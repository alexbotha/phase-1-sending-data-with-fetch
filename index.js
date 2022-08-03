function submitData(name, email){
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      "name": name,
      "email": email,
    }),
  }
  
   return fetch('http://localhost:3000/users', configurationObject)
  .then(res => res.json())
  .then(body => addNewContact(body.id))
  .catch(error => newError(error.id))
}

function newError(message){
  document.getElementsByTagName('body').innerHTML = message
  document.body.append("Unauthorized Access")
}

function addNewContact(newId){
  document.getElementsByTagName('body')[0].innerHTML = newId
  document.body.append()

}

submitData("name", "name@name.com")
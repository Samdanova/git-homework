const table = document.querySelector("#tbody-table");

function main() {
  getContacts()
    .then((contacts) => {
      renderContacts(contacts);
    })
    .catch((error) => {
      console.error(error);
    });
}
async function getContacts() {
  const response = await fetch(
    "https://randomuser.me/api/?page=3&results=10&seed=abc"
  );
  const data = await response.json();
  console.log(data.results);
  return data.results;
}

function renderContacts(contacts) {
  for (let i = 0; i < contacts.length; i++) {
    const contactLine = document.createElement("tr");
    contactLine.innerHTML = `<td> <img src="${contacts[i].picture.large}" alt=""></td>
    <td>${contacts[i].name.first} ${contacts[i].name.last}</td> 
    <td> ${contacts[i].phone}</td> 
    <td> ${contacts[i].email}</td>`;
    contactLine.classList.add("contact-line");
    table.append(contactLine);
  }
}
main();

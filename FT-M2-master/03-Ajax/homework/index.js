const [boton] = $('#boton');
const [search] = $('#search');
const [deleteBtn] = $('#delete');
const url = 'http://localhost:5000/amigos';


 const friendsList = (response) => {
    const [lista] = $('#lista')
    lista.innerText = ''
    response.forEach(friend => {
        const newList = document.createElement('li')
        newList.innerText = friend.name
        lista.appendChild(newList)
    })
}
const showFriends = () => {
    $.get(url, friendsList)
}


const BtnSerch = () => {
     const [input] = $('#input');
    const id = input.value;
    input.value = ''
    $.get(`${url}/${id}`, (response) => {
        const [amigo] = $('#amigo')
        amigo.innerText = response.name
    })
    
}
const deleFriend = () => {
    const [inputDelete] = $('#inputDelete');
    const id = inputDelete.value;

    $.ajax({
        url:`${url}/${id}`,
        method: "DELETE",
        dataType: "json",
        success: function (response) {
            friendsList(response)
        },
        error: function (xhr, status, error) {
          console.log(error);
        },
      });
    

}


boton.addEventListener('click', showFriends)
search.addEventListener('click', BtnSerch)
deleteBtn.addEventListener('click', deleFriend )
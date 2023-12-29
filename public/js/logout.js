// document.getElementById('logoutButton').addEventListener('click',()=>{
//     alert("Hello")
// })

function logout(){
    const result =  confirm("Are you sure ?")
    if(result){
        location.href = '/logout'
    }
}
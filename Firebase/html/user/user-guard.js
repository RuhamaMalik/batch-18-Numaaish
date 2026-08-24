const user = JSON.parse(localStorage.getItem("user"))
if (user) {
  let splitPath= window.location.href.split('/');
  if (user["role"] == "admin") {
   if(splitPath.includes('user')){
    alert('hello');
    window.location.replace('/admin/dashborad.html')
   }

  }
}
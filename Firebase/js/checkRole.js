let role = JSON.parse(localStorage.getItem('user')).role;


if(role && role !== 'admin'){
window.location.replace('/html/404.html');
}
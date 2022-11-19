const getCheckProfile = document.getElementById("check-profile");

if (localStorage.getItem("Regist_Account") === null){
    getCheckProfile.innerHTML = addButtonLoginRegister();
    
    }else{
    getCheckProfile.innerHTML = replaceButtonLoginRegisterToProfile();

}

function addButtonLoginRegister(){
    return `<ul class="navbar-nav gap-1 gap-md-4 mx">
                <li class="nav-item">
                    <a class="nav-link reg fancy-link" href="./register.html">Register</a>
                </li>
                    <a href="./login.html"><button class="btn btn-main-color">Login</button></a>
            </ul>`;
}

function replaceButtonLoginRegisterToProfile(){
    return `<a href="#"><div class="my-profile"></div></a>`;
}

function register(){
    var user = Username.value
    localStorage.setItem('Username',user)
    var email = Email.value
    localStorage.setItem('Email',email)
    var pswd = password.value
    localStorage.setItem('password',pswd)

    alert(`Registration successfull`)
    window.location ="login.html"
}


function login(){
    var user = lUsername.value
    var email = lEmail.value
    var pswd = lpassword.value


if(user == localStorage.getItem('Username')){
    if(email == localStorage.getItem('Email')){
        if(pswd == localStorage.getItem('password')){
            window.location = "home.html";
            alert('login Successful');
        }
        else{
            alert('Invalid password')
            invalid1.innerHTML = `<p style='color:red'> Invalid password </p>`
        }
    }
    else{
        alert('Invalid Email')
        invalid2.innerHTML = `<p style='color:red'> Invalid Email </p>`
    }
}
else{
    alert('Invalid Username')
    invalid3.innerHTML = `<p style='color:red'> Invalid Username </p>`
}
}



user.innerHTML = `Welcome ${localStorage.getItem('Username')}`

    function logout(){
        localStorage.removeItem('Username')
        localStorage.removeItem('Email')
        localStorage.removeItem('password')

        alert(`log out successfull`)
        window.location ="/project.html";
    }



    function search(){
        //1. get laptop name is required
        let laptop = cInput.value
        let arr=[]
        
        //2.make api call
        fetch(`http://localhost:3000/laptops`)
        .then((result)=>{
          result.json()
          .then((data)=>{
            populateData(data);
          })
        })
      }
      

      function populateData(data)
      {
        let images = data[0].image
        let names = data[0].name
        let costs = data[0].cost
        let displays = data[0].display
        let processors = data[0].processor
        let memorys = data[0].memory
        let colors = data[0].color
        let storages = data[0].storage


        // arr.push({images,names,costs,displays,processors,memorys,colors,storages})

        htmlData=`
        <div class="card" style="width: 18rem;">
  <img src="${images}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Name: ${names}</p>
    <p class="card-text">Cost: ${costs}</p>
    <p class="card-text">Display: ${displays}</p>
    <p class="card-text">Processor: ${processors}</p>
    <p class="card-text">Memory: ${memorys}</p>
    <p class="card-text">Color: ${colors}</p>
    <p class="card-text">Storage: ${storages}</p>
  </div>
</div>
        `
        output.innerHTML = htmlData
      }
//function to validate user credentials
function validCrendentials(email,password){
    const validEmail = "2200706771@gmail.com"
    const validPassword ="22/U/6771@2024"
//conditional statement to check for valid and invalid credentials
    if(email=== validEmail && password === validPassword){
        console.log(`User email is ${email}, Login successfully!`)
    }else{
        console.log('Incorrect user credentials!')
    }
}

//these are the valid credentials(arguments)
validCrendentials("2200706771@gmail.com","22/U/6771@2024")
function signUpMessage(user) {
  return `<h1>Greeting from EAT FRESH</h1> 
            </br>
            <h2> Dear ${user}</h2>
            <p>Congrats on succesfully registering with us.
            We at Eat Fresh aim to provide <span style="color:green;"><b> healthy</b></span> and <span style="color:orange;"><b>hygienic</b></span> food to our users,
            You can explore our various plans, we provide and choose the one that suits your needs.</p>
         `;
}

function changePlanMessage(oldPlan, newPlan) {
  return `<h2>Greetings from<span style="color:green;"> EAT</span><span style="color:orange;"> FRESH</span> </h2>
           </br>
           <p>Your plan has succesfully been changed from ${oldPlan} to ${newPlan}</p>`;
}

export { signUpMessage, changePlanMessage };

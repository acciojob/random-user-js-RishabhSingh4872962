//your code here
const profile=document.getElementById("profile");
const btn=document.getElementById("btn");

let details=[];

 async function getAnotherUser() {
	 profile.innerHTML=""
	const data=await fetch("https://randomuser.me/api/");
	const {results}=await data.json();
	
	 details.push(results[0])
	 console.log(results[0],details);
	 
	  const img=document.createElement("img");
	  img.src=results[0].picture.large;
	 const name=document.createElement("h1");
	 name.innerText=results[0].name.first+" "+results[0].name.last;
	 const age=document.createElement("button");
	 const email=document.createElement("button");
	 const phone=document.createElement("button");
	 const p=document.createElement("p");
	 p.id="creden";
	 p.hidden=true;
	 age.textContent="Age";
	 email.textContent="Email";
	 phone.textContent="Phone";
	 age.data-attr="age"
	 phone.data-attr="phone"
	 email.data-attr="email"
	 age.addEventListener("click",detail)
	 email.addEventListener("click",detail)
	 phone.addEventListener("click",detail)
	 profile.append(img,name,p,age,email,phone)	 
}
getAnotherUser();

function detail(e) {
	const val=e.target.innerText;
	
	const p=document.getElementById("creden")
	if (val=="Age") {
		p.innerText=details[0].registered.age
		p.hidden=false;
	} else if(val=="Email"){
		p.innerText=details[0].email
		p.hidden=false;
	}else{
		p.innerText=details[0].phone;
		p.hidden=false;
		
	}
}
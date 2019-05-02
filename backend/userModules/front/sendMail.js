const nodemailer=require('nodemailer');//to send mails
module.exports=function sendMail(req,res)
{	console.log(req.url);
			let details={ name: req.body.name,
		  email: req.body.email,
		  subject: req.body.subject,
		  feedback: req.body.feedback }

  			console.log(details);
		  let transporter=nodemailer.createTransport({
		  	//service:'gmail',
		  	host:'smtp.gmail.com',
		  	port:465,
		  	secure:true, 
		  	auth:{
		  		user:"nidhibuddhiraja@gmail.com",
		  		password:"twinkle@123"//need to enter password here.
		  	}
		  });

		  let mailOptions={
		  	from:'nidhibuddhiraja@gmail.com',
		  	to:"nidhibuddhiraja@gmail.com",
		  	subject:details.subject,
		  	html:"<b>Thanks For Your Valuable feedback. We will contact You Soon !!</b>"
		  };

		  transporter.sendMail(mailOptions,(error,info)=>{
		  	if(error){
		  		console.log("Error");
		  		console.log(error);
		  	}
		  	else{
		  		console.log(info);
		  	}
		  	
		  });
}
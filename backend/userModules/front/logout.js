module.exports=function logout(req,res){
	req.session.destroy(function(err) 
{
  if(err)
   {
    console.log(err);
  } 
  else 
  {
  		res.json({userName:req.session.userName});
    //res.redirect('/');
  }
}
);
}
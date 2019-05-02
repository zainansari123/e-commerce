const CateogaryModel=require('../../database/category');
const fs=require('fs');

module.exports=function updateCateogary(req,res){
console.log(req.body);
CateogaryModel.findOne({"cname":req.body.OldItem}).then(function(result){
	console.log(result.cimagePath);
	fs.unlink(result.cimagePath);
	CateogaryModel.findOneAndUpdate({"cname":req.body.OldItem},
		{"cname":req.body.newItem,"cimagePath":req.body.imagePath},function(err,data){
				if(err){
			console.log(err);
			}
			else{
			console.log('data Updated..');
			return res.json({"msg":"Data Updated Successfully!!","err":0});
			}
		});
});
}
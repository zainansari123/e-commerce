var multer = require('multer');//for file uploading in the server.
var DIR = './uploads/';

var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null,DIR);
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            //console.log(datetimestamp);
            //console.log(file);
   //"Nidhi.Buddhiraja.png".split(".")["Nidhi.Buddhiraja.png".split(".").length-1]         
 cb(null, file.fieldname + '-' + datetimestamp +
  '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        }
    });

var uploads = multer({ storage: storage}).single('snaps');

module.exports = function doUploadCatImage(req,res)
{
	var path = '';
     uploads(req, res, function (err) 
     {
        if (err) 
        {
          console.log(err);
          return res.status(422).send("an Error occured")
        }  
       //console.log("RequestProp "+req);
        path = req.file.path;
       // console.log(req.file.path);
        return res.json({'msg':req.file.path});
     });
}
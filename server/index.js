const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');
var cookieParser = require('cookie-parser');
var multer = require('multer');
const nodemailer = require("nodemailer");
//const e = require("express");
var email;

app.use(cookieParser());
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "JOBSTREET"
})
db.connect((err) =>{
    if(err) {
        throw err;
    }
    console.log("MySQL connected");
})

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "imgirish18@gmail.com",
        pass: "xxctugjsxhiwnutj"
    },
    tls: {
        rejectUnauthorized: false,
    },
});

app.post('/signupuser', (req, res) => {
    const name = req.body.name;
    email = req.body.email;
    //const email = req.body.email;
    const mobile = req.body.mobile;
    const password = req.body.password;

    db.query('INSERT INTO USERS (Name, Email, Mobile, Password, profilephoto, Profession) VALUES (?, ?, ?, ?, ?, ?)', [name, email, mobile, password,"none", "none"], (err, result) => {
        if (err) {
            console.log(err);
            res.send("Error");
        }
        else {
            res.send(result);
        }
    });
});

app.post('/loginuser', async (req, res) => {
    email = req.body.email;
    //const email = req.body.email;
    const password = req.body.password;
    
    db.query("SELECT * FROM USERS WHERE Email=(?) AND PASSWORD=(?)", [email, password],
    
    (err, result)=>{
        if(err) {
            console.log(err);
        }
        else {
           // console.log(result);
            res.send(result);
         }
    });
    
    //console.log(result);
});

app.post('/jobsignup', (req, res) => {
    email=req.body.email;
    const profession = req.body.job;
    db.query("UPDATE USERS SET PROFESSION=(?) WHERE EMAIL=(?)", [profession, email],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.get('/', function(req, res) {
    res.cookie('email', email);
    //res.clearCookie('My first Cookie');
    res.send(' ');
    //console.log("Cookie cleared");
});

app.post('/studentsignup', (req, res) => {
    const college = req.body.college;
    const course = req.body.course;
    const degree = req.body.degree;
    const grad = req.body.grad;
    const email = req.body.email;

    db.query('INSERT INTO STUDENTS (Email, College, Course, Degree, Graduation) VALUES (?, ?, ?, ?, ?)', [email, college, course, degree, grad], (err, result) => {
        if(err) {
            console.log(err);
            res.send("Error");
        }
        else {
            res.send(result);
        }
    });
});

app.post('/professionalsignup', (req, res) => {
    const company = req.body.company;
    const position = req.body.position;
    const email = req.body.email;
    const domain = req.body.domain;

    db.query('INSERT INTO PROFESSIONALS (Email, Company, Position, Domain) VALUES (?, ?, ?, ?)', [email, company, position, domain], (err, result) => {
        if(err) {
            console.log(err);
            res.send("Error");
        }
        else {
            res.send(result);
        }
    });
});

app.post('/profileinfo', (req, res) => {
    email=req.body.email;
    db.query("SELECT * FROM USERS WHERE email=(?)", [email],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);       
        }
    });
});

app.post('/updateuserinfo', (req, res) => {
    email = req.body.email;
    const name = req.body.name;
    const mobile = req.body.mobile;
    const password = req.body.password;
    db.query("UPDATE USERS SET name=(?), mobile=(?), password=(?) WHERE email=(?)", [name, mobile, password, email],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.post('/getcollege', (req, res) => {
    email=req.body.email;
    db.query('SELECT * FROM COLLEGE WHERE Email=(?)', [email], 
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.post('/addcollegeinfo', (req, res) => {
    email = req.body.email;
    const name = req.body.name;
    const course = req.body.course;
    const grad = req.body.grad;
    const cgpa = req.body.cgpa;
    db.query('INSERT INTO COLLEGE (Email, Name, Course, Graduation, CGPA) VALUES(?, ?, ?, ?, ?)', [email, name, course, grad, cgpa],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.post('/getschool', (req, res) => {
    email = req.body.email;
    db.query('SELECT * FROM SCHOOL WHERE EMAIL=(?)', [email], 
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

app.post('/addschoolinfo', (req, res) => {
    email = req.body.email;
    const name = req.body.name;
    const grade = req.body.grade;
    const year = req.body.year;
    db.query('INSERT INTO SCHOOL (Email, Name, Grade, Year) VALUES(?, ?, ?, ?)', [email, name, grade, year],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

app.post('/getinternshipinfo', (req, res) => {
    email = req.body.email;
    db.query('SELECT * FROM INTERNSHIPS WHERE EMAIL=(?)', [email],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});


app.post('/addinterninfo', (req, res) => {
    email = req.body.email;
    const company = req.body.company;
    const domain = req.body.domain;
    const period = req.body.period;
    db.query('INSERT INTO INTERNSHIPS (Email, Company, Domain, Period) VALUES (?, ?, ?, ?)', [email, company, domain, period],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})


app.post('/addjobinfo', (req, res) => {
    email = req.body.email;
    company = req.body.company;
    domain = req.body.domain;
    position = req.body.position;
    experience = req.body.experience;
    db.query('INSERT INTO JOB (Email, Company, Domain, Position, Experience) VALUES(?, ?, ?, ?,?)', [email, company, domain, position, experience],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});


app.post('/getskills', (req, res) => {
    email = req.body.email;
    db.query('SELECT * FROM SKILLS WHERE Email=(?)', [email],
    (err, result) => {
        if(err) {
            console.log(er);
        }
        else {
            res.send(result);
        }
    })
});


app.post('/addskills', (req, res) => {
    email= req.body.email;
    const skill= req.body.skill;
    const level = req.body.level;
    db.query('INSERT INTO SKILLS (Email, Name, Level) VALUES (?, ?, ?)', [email, skill, level],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

app.post('/getworkinfo', (req, res) => {
    email = req.body.email;
    db.query('SELECT * FROM JOB WHERE EMAIL=(?)', [email],
    (err, result) => {
        if(err) {
            console.log(err);
        } 
        else {
            res.send(result);
        }
    })
});

app.post('/createjob', (req, res) => {
    const email = req.body.email;
    const position = req.body.position;
    const domain = req.body.domain;
    const company = req.body.company;
    const location = req.body.location;
    const description = req.body.description;
    const skills = req.body.skills;
    db.query('INSERT INTO JOBS (Email, Position, Domain, Company, Location, Description, Skills) VALUES (?, ?, ?, ?, ?, ?, ?)', [email, position, domain, company, location, description, skills],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

app.post('/searchjob', (req, res) => {
    const search = req.body.search;
    db.query('SELECT * FROM JOBS WHERE Company LIKE (?) OR Position LIKE (?) OR Domain LIKE (?) OR Location LIKE (?)', ['%'+search+'%', '%'+search+'%', '%'+search+'%', '%'+search+'%'],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});



app.post('/getjobapp', (req, res) => {
    const email = req.body.email;
    const position = req.body.position;
    const company = req.body.company;
    const location = req.body.location;
    db.query('SELECT * FROM APPLICATIONS WHERE Email=(?) AND Position=(?) AND Company=(?) AND Location=(?)', [email, position, company, location],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});


app.post('/applyjob', (req, res) => {
    const position = req.body.position;
    const email = req.body.email;
    const company = req.body.company;
    const location = req.body.location;
    db.query('INSERT INTO APPLICATIONS (Email, Position, Company, Location) VALUES (?, ?, ?, ?)', [email, position, company, location],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});


app.post('/aboutjob', (req, res) => {
    const position = req.body.position;
    const company = req.body.company;
    const location = req.body.location;
    db.query('SELECT * FROM JOBS WHERE Company=(?) AND Position=(?) AND Location=(?)', [company, position, location],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

app.post('/connectpeoplereccol', (req, res) => {
    email = req.body.email;
    db.query('SELECT DISTINCT(USERS.Name), USERS.Email, USERS.Profession FROM USERS, COLLEGE WHERE USERS.Email = COLLEGE.Email AND COLLEGE.Name IN (SELECT Name FROM COLLEGE WHERE Email=(?)) AND USERS.NAME NOT IN (SELECT Name FROM USERS WHERE Email=(?))',[email, email], 
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

app.post('/connectpeoplerecsch', (req, res) => {
    email = req.body.email;
    db.query('SELECT DISTINCT(USERS.Name), USERS.Email, USERS.Profession FROM USERS, SCHOOL WHERE USERS.Email = SCHOOL.Email AND SCHOOL.Name IN (SELECT Name FROM SCHOOL WHERE Email=(?)) AND USERS.NAME NOT IN (SELECT Name FROM USERS WHERE Email=(?))', [email, email],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

app.post('/searchbyname', (req, res) => {
    const name = req.body.name;
    db.query('SELECT * FROM USERS WHERE Name LIKE ?', '%'+name+'%',
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});


app.post('/sendconnectreq', (req, res) => {
    const femail = req.body.femail;
    const temail = req.body.temail;
    db.query('INSERT INTO CONNECTREQUEST (Femail, Temail) VALUES(?, ?)', [femail, temail],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

app.post('/getconnectreq', (req, res) => {
    email = req.body.email;
    db.query('SELECT * FROM USERS WHERE Email IN (SELECT FEmail FROM CONNECTREQUEST WHERE TEmail=(?))', [email],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

app.post('/checkConnReq', (req, res) => {
    const email1 = req.body.email1;
    const email2 = req.body.email2;
    db.query('SELECT * FROM CONNECTREQUEST WHERE (Femail=(?) AND TEmail=(?)) OR (FEmail=(?) AND TEmail=(?))', [email1, email2, email2, email1],
    (err, result) => {
        if(err) {
            console.log(err);
        } 
        else {
            res.send(result);
        }
    })
});

app.post('/acceptconn', (req, res) => {
    const email1 = req.body.email1;
    const email2 = req.body.email2;
    db.query('INSERT INTO CONNECTIONS (FEmail, TEmail) VALUES(?, ?)', [email1, email2],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

app.post('/delconnreq', (req, res) => {
    const email1 = req.body.email1;
    const email2 = req.body.email2;
    db.query('DELETE FROM CONNECTREQUEST WHERE (FEmail=(?) AND TEmail=(?)) OR (FEmail=(?) AND TEmail=(?))', [email1, email2, email2, email1],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

app.post('/getconnectreqsent', (req, res) => {
    const email = req.body.email;
    db.query('SELECT * FROM USERS WHERE Email IN (SELECT TEmail FROM CONNECTREQUEST WHERE FEmail=(?))', [email], 
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

app.post('/rejconnreq', (req, res) => {
    const email = req.body.email1;
    const temail = req.body.email2;
    db.query('DELETE FROM CONNECTREQUEST WHERE (FEmail=(?) AND TEmail=(?)) OR (FEmail=(?) AND TEmail=(?))', [temail, email, email, temail],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

app.post('/getmyconn', (req, res) => {
    const email = req.body.email;
    db.query('SELECT * FROM USERS WHERE Email IN (SELECT TEmail FROM CONNECTIONS WHERE FEmail=(?) UNION SELECT FEmail FROM CONNECTIONS WHERE TEmail=(?))', [email, email],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

app.post('/checkConn', (req, res) => {
    const email1 = req.body.email1;
    const email2 = req.body.email2;
    db.query('SELECT * FROM CONNECTIONS WHERE (Femail=(?) AND TEmail=(?)) OR (FEmail=(?) AND TEmail=(?))', [email1, email2, email2, email1],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});


app.post('/viewpersonalprofile', (req, res) => {
    email = req.body.email;
    db.query('SELECT * FROM USERS WHERE EMAIL=(?)', [email],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

app.post('/viewschoolprofile', (req, res) => {
    email = req.body.email;
    db.query('SELECT * FROM SCHOOL WHERE EMAIL=(?)', [email],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

app.post('/viewcollegeprofile', (req, res) => {
    email = req.body.email;
    db.query('SELECT * FROM COLLEGE WHERE EMAIL=(?)', [email],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

app.post('/viewskillprofile', (req, res) => {
    email = req.body.email;
    db.query('SELECT * FROM SKILLS WHERE Email=(?)', [email],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

app.post('/viewmyjobs', (req, res) => {
    const email = req.body.email;
    db.query('SELECT * FROM JOBS WHERE Email=(?)', [email],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});


app.post('/viewappl', (req, res) => {
    const position = req.body.position;
    const location = req.body.location;
    const company = req.body.company;
    db.query('SELECT * FROM USERS WHERE Email IN (SELECT Email FROM APPLICATIONS WHERE Position=(?) AND Location=(?) AND Company=(?))', [position, location, company],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

app.post('/rejappl', (req, res) => {
    const email = req.body.email;
    const position = req.body.position;
    const location = req.body.location;
    const company = req.body.company;
    db.query('DELETE FROM APPLICATIONS WHERE Email=(?) AND Position=(?) AND Company=(?) AND Location=(?)', [email, position, company, location],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

app.post('/suggppl', (req, res) => {
    const position = req.body.position;
    const location = req.body.location;
    const company = req.body.company;
    db.query('SELECT * FROM USERS WHERE Email IN (SELECT Email FROM SKILLS WHERE Name IN (SELECT Skills FROM JOBS WHERE Position=(?) AND Location=(?) AND Company=(?)))', [position, location, company],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})


app.post('/jobaccept', (req, res) => {
    const email = req.body.email;
    const temail = req.body.temail;
    const position = req.body.position;
    const location = req.body.location;
    const company = req.body.company;

    const success = "Congratulations! Your Job Application for "+position+" at "+company+", "+location+" have been selected";

    let mailOptions = {
        from: email,
        to: temail,
        subject: "JOB APPLICATION",
        text: success
    }
    
    transporter.sendMail(mailOptions, function(err, success) {
        if(err) {
            console.log(err)
        }
        else {
            console.log("Email sent successfully")
        }
    })
})



app.post('/gethomeuserinfo', (req, res) => {
    const email = req.body.email;
    db.query('SELECT * FROM USERS WHERE Email=(?)', [email],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

app.post('/addpost', (req, res) => {
   // console.log(req.body);
    email = req.body.email;
    const title = req.body.title;
    const content = req.body.content;
    //const isliked = req.body.isliked;
    db.query('INSERT INTO POSTS (Email, Title, Content) VALUES(?, ?, ?)', [email, title, content],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.post('/addlike', (req, res) => {
    //curemail = req.body.curemail;
    email = req.body.email;
    title = req.body.title;
    //isliked = req.body.isliked;
    
    db.query('INSERT INTO LIKES (Email, postowner, Title, isLiked) VALUES(?, ?, ?, ?)', ["none", email, title, false],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.post('/getpostinfo',(req,res)=>{
    title = req.body.title;
//    console.log(req.body)
    db.query('SELECT * FROM POSTS',
    (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            // console.log(result)
            res.send(result);
        }
    })
})


app.post('/viewconncount', (req, res) => {
    const email = req.body.email;
    db.query('SELECT COUNT(*) AS Conncount FROM CONNECTIONS WHERE FEmail=(?) OR TEmail=(?)', [email, email],
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

/* app.post('/getlikeinfo',(req,res)=>{
    email = req.body.email;
//    console.log(req.body)
    db.query('SELECT * FROM LIKES',
    (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})
 */
app.post('/updatelikeinfo',(req,res)=>{
   // isLiked = req.body.isLiked;
 //   email = req.body.email;
  console.log(req.body);
  email = req.body.email;
  
    title = req.body.title;
    isLiked = req.body.isLiked;
    console.log(!isLiked);
    db.query('UPDATE POSTS SET isLiked=(?) WHERE TITLE=(?)', [!isLiked,title],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("hiui");
            res.send(result);
        }
    })
})

app.post('/likedpostinfo',(req,res)=>{
    email = req.body.email;
    
    db.query('SELECT * FROM POSTS WHERE isLiked=(?)',[true],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})
 
app.post('/addcomment',(req,res)=>{
    email = req.body.email;
    comment = req.body.comment;
    title = req.body.title;
    db.query('INSERT INTO COMMENTS (Email, Title,Comment) VALUES(?, ?, ?)', [email, title,comment],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

app.post('/getcomments',(req,res)=>{
    email = req.body.email;
   //console.log(req.body);
    title = req.body.title;
    db.query('SELECT * FROM COMMENTS WHERE TITLE=(?)',[title],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})


app.post('/deletepost',(req,res)=>{
   
  //  console.log(req.body);
     title = req.body.title;
     email = req.body.email;
     db.query('DELETE FROM POSTS WHERE TITLE=(?)', [title,email],
     (err,result)=>{
         if(err){
             console.log(err);
         }
         else{
             res.send(result);
         }
     })
 })

 app.post('/deletelike',(req,res)=>{
   
   // console.log(req.body);
     title = req.body.title;
     postowner = req.body.postowner;
     db.query('DELETE FROM LIKES WHERE TITLE=(?) AND POSTOWNER=(?)', [title,postowner],
     (err,result)=>{
         if(err){
             console.log(err);
         }
         else{
             res.send(result);
         }
     })
 })

 app.post('/deletecomment',(req,res)=>{
   
   // console.log(req.body);
     title = req.body.title;
     delcomment = req.body.delcomment;
     db.query('DELETE FROM COMMENTS WHERE TITLE=(?) AND COMMENT=(?)', [title,delcomment],
     (err,result)=>{
         if(err){
             console.log(err);
         }
         else{
             res.send(result);
         }
     })
 })
  

/*  app.post('/checklike',(req,res)=>{
   
    // console.log(req.body);
      title = req.body.title;
      email = req.body.email;
      postowner = req.body.postowner;
      db.query('SELECT * FROM LIKES WHERE TITLE=(?) AND EMAIL=(?) AND POSTOWNER = (?)', [title,email,postowner],
      (err,result)=>{
          if(err){
              console.log(err);
          }
          else{
              res.send(result);
          }
      })
  })
    */

 //! Use of Multer
  /*
 var storage = multer.diskStorage({
     destination: (req, file, callBack) => {
         callBack(null, './public/images/')     // './public/images/' directory name where save the file
     },
     filename: (req, file, callBack) => {
         callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
     }
 })

 
 var upload = multer({
     storage: storage
 });
 var upload = multer({dest:'./upload/'});

 
 //@type   POST
 //route for post data
 app.post("/upload", upload.single('image'), (req, res) => {
     //console.log(req.body);
     if (!req.file) {
         console.log("No file upload");
     } else {
         console.log(req.file.filename)
         var imgsrc = 'http://127.0.0.1:3000/images/' + req.file.filename
         email = req.body.email;
         var insertData = "UPDATE POSTS SET profilephoto=(?) WHERE EMAIL=(?)"
         db.query(insertData, [imgsrc,email], (err, result) => {
             if (err) throw err
             console.log("file uploaded")
         })
     } 
 });
*/


app.post('/viewpost', (req, res) => {
    const email = req.body.email;
    db.query('SELECT * FROM POST WHERE Email IN (SELECT Email FROM ')
})

app.listen(3001, () => {
    console.log("Server is running");
});
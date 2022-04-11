const cors = require("cors");
const express = require("express");
const bodyParse = require("body-parser");
const app = express();
const connection = require("../connection/connection");
const nodemailer = require("nodemailer");
app.use(cors());

//this is use for sending mail for contact us window
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

app.post("/add", async (req, res) => {
  const Email = req.body.email;
  const F_Name = req.body.first_name;
  const L_Name = req.body.last_name;
  const Phone_No = req.body.phno;
  const Password = req.body.password;
  const dob = req.body.birthday;
  const Address = req.body.address;
  const role = req.body.loginas;
  console.log("email :" + Email);
  console.log("F name :" + F_Name);
  console.log("L name :" + L_Name);
  console.log("pass :" + Password);
  const addathlete = `INSERT INTO apms.athlete(Email, F_Name, L_Name,Phone_No, DOB, Password, Status, Address) VALUES ('${Email}', '${F_Name}','${L_Name}','${Phone_No}',${dob},'${Password}',true,'${Address}');`;
  //   const addathlete = `INSERT INTO mid.adminp(cnic,f_name, l_name, Email, Phone_no, Password, street, city, state, country, zip_code) VALUES ('${CNIC}', '${F_Name}','${L_Name}', '${Email}','${Phone_No}','${Password}', '${Address}', '${City}', '${State}', '${Country}', '${Zip_code}');`;
  //   const addDoctor = `INSERT INTO mid.doctor(cnic,f_name, l_name, Email, Phone_no, Password,status,hospital, street, city, state, country, zip_code) VALUES ('${CNIC}', '${F_Name}','${L_Name}', '${Email}','${Phone_No}','${Password}',false,'${Hospital}', '${Address}', '${City}', '${State}', '${Country}', '${Zip_code}');`;

  connection.query(addathlete, async (err, results) => {
    if (err) {
      console.log(err)
      res.send(err);
    } else {
      console.log("user added");
      res.send("data added");
      const x = 1;
      if(x === 0){
      const htmll = `<p>You have a New contact request </p>
    <h2>Contact Details</h2>
    <ul>
      <li>Name: ${F_Name}</li>
      <li>Email: ${Email}</li>
      <liLast Name: ${L_Name}</li>
    </ul>
    <h3>Message</h3>
    <p>Admin kindly Check the detail and Approve our account OR cancel request</p>
    <button  >Cancel</button>
    <a href='http://localhost:4000/bk/approve?Id=${Email}&&role=${role}'>Approve</a>
      `;
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth:{
          user: "apmsproject2020@gmail.com", //  user
          pass: "pakistan1947", //  password
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Node Mailer" <apmsproject2020@gmail.com>', // sender address
        to: "apmscomsats@gmail.com", // list of receivers
        subject: "Contact Request", // Subject line
        text: "This is for test purpose", // plain text body
        html: htmll, // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
  }
  });
});

module.exports = app;
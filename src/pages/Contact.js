import { useState } from 'react';

function Contact({ phone, email }) {
  const [mail, setMail] = useState(email);
  console.log(phone);
  let new_mail = 'arajitm26@gmail.com';

  return (
    <>
      <h1>contact us </h1>
      <h3>Phone No : {phone}</h3>
      <h3>Email : {mail}</h3>
      <button onClick={change_email}>change email</button>
    </>
  );

  function change_email() {
    setMail(new_mail);
  }
}

export default Contact;

import Field from "./Field.js";
import Form from "./Form.js";

const form = new Form("Sign up baby");
const email = new Field("email", "email", "Email here");
const numero = new Field("Tel", "tel", "Can I have ur number");
const prenom = new Field("prénom", "text", "And ur name");

form.addField(email).addField(numero).addField(prenom).renderForm();


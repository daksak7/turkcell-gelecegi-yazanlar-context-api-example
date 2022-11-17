import {object,string,} from "yup";

const required_message="Bu alan zorunludur";

const contactSchema = object({
    name:string().required(required_message),
    email:string().email("Lütfen geçerli bir e-mail adresi giriniz").required(required_message),
    message:string().min(5,'En az 5 karakter giriniz').required(required_message)
});

export default contactSchema;
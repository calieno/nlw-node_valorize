import { getDomainLocale } from "next/dist/next-server/lib/router/router";

function enviarEmail(nome:string, email:string){
    console.log(`Enviar email para ${nome} e email ${email}`);
}

enviarEmail("Luciano", "calieno@gmail.com");
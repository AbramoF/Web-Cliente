let x=0;

function validateRegis(){

    if(document.regist.nome.value == "" ){
        x=x+1;
        document.regist.nome.focus;
    }

    if(document.regist.email.value == ""){
        x=x+1;
        document.regist.email.focus;
    }

    if(document.regist.senha.value == ""){
        x=x+1;
        document.regist.senha.focus;
    }

    if(document.regist.cpf.value == ""){
        x=x+1;
        document.regist.cpf.focus;
    }

    if(document.regist.cep.value == ""){
        x=x+1;
        document.regist.cep.focus;
    }

    if(document.regist.rua.value == ""){
        x=x+1;
        document.regist.rua.focus;
    }

    if(document.regist.numero.value == ""){
        x=x+1;
        document.regist.numero.focus;
    }

    if(document.regist.bairro.value == ""){
        x=x+1;
        document.regist.bairro.focus;
    }

    if(document.regist.cidade.value == ""){
        x=x+1;
        document.regist.cidade.focus;
    }

    if(x==0){
        Pessoa(document.regist.nome.value, document.regist.email.value, document.regist.cpf.value, document.regist.senha.value, document.regist.rua.value, document.regist.cep.value, document.regist.numero.value, document.regist.bairro.value, document.regist.cidade.value)
    }


    
}

function validateLogin(){

    if(document.regist.email.value == ""){
        document.regist.email.focus;
    }

    if(document.regist.senha.value == ""){
        document.regist.senha.focus;
    }


    console.log(document.regist.email.value);
}
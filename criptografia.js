const numeros = [
    1,  2,  3,  4,  5,  6,  7,  8,
    9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24,
    25, 26
]
const alfabeto = [
    "a", 'b','c','d',"e","f","g","h",
    'i','j','k','l','m','n','o','p',
    'q','r','s','t','u','v','w','x',
    'y','z'];


const criptografar = ((texto) =>{
    let EumNumero = typeof(2) === typeof(texto) ? "Sim" : "Não é um numero";
    if(EumNumero === "Sim"){
        console.log("\n"+"Você Digitou um Numero"+"\n");
    }
    else{

        texto = texto.toLowerCase()
        for (let index = 0; index <= texto.length; index++) {
            alfabeto.forEach((letra, indexA) =>{
                if (texto[index] === letra){    
                    texto = texto.replace(texto[index], " " + numeros[indexA])
                }
            })
        }
        console.log("\n"+texto+"\n")

    }
})


criptografar("Seu Texto Aqui:")
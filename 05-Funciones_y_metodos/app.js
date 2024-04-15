function saludo() {
    return "Hola"
}
console.log(saludo());

//seudo clase
let calculo = {
    duplicar: function(valor1){
        return valor1 * 2;
    },
    dividir: function(valor1) {
        return valor1 / 2;
    }
}
console.log(calculo.dividir(11), calculo.duplicar(11));
//uma função simples 
function funcao(){
    document.write('Função');
}

//chamando a funçao
funcao()

//uma função que recebe parametros
function funcaoidNome(nome){
    return document.write('<br>Olá mundo meu nome é '+ nome);
}

//chamando a função com argumento
funcaoidNome('bau')

//vejamos uma função que retorna um valor numerico
function calculaAreaRetangulo(base,altura){
    var area = base*altura;
    return document.write('<br>A area do retangulo é '+ area)
}

// podemos chamar a função para atribuir valores a variaveis
var retangulo = calculaAreaRetangulo(16,4);

// recebendo multiplos valores
function calculaAreaVolume(altura,largura,profundidade){
    var area = altura*largura;
    var volume = altura*largura*profundidade;
    var resultado = resultadoAreaVolume = [area,volume];
    return resultadoAreaVolume;
}
// utilizando a função e armazenamento a posição desejada no array
var calculoCaixaArea = calculaAreaVolume(10,20,30)[0];
var calculoCaixaVolume = calculaAreaVolume(10,20,30)[1];

//exibindo o resultado
document.write('<br> Área da caixa é '+ calculoCaixaArea);
document.write('<br> Volume da caixa é '+ calculoCaixaVolume);

//podemos chamar a função diretamente na declaração da variavel isso e uma função anonima

var areaCaixa = (function() {
    var calculoaraea = 10*20;
    return calculoaraea;
}());
// exibindo o resultado
document.write('<br>A função anonima faz a mesma coisa: '+ areaCaixa)
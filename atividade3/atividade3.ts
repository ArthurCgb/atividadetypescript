interface Trabalhavel {
  trabalhar(): void;
}

interface RegistravelPonto {
  registrarPonto(): void;
}

interface Assalariado {
  receberSalario(): void;
}

interface Gerenciavel {
  gerenciarEquipe(): void;
}

interface Programavel {
  escreverCodigo(): void;
}

interface Bolsista {
  receberBolsa(): void;
}

class Gerente implements Trabalhavel, RegistravelPonto, Assalariado, Gerenciavel {
  trabalhar() { console.log("Gerente trabalhando"); }
  registrarPonto() { console.log("Ponto registrado"); }
  receberSalario() { console.log("Salário recebido"); }
  gerenciarEquipe() { console.log("Gerenciando equipe"); }
}

class Desenvolvedor implements Trabalhavel, RegistravelPonto, Assalariado, Programavel {
  trabalhar() { console.log("Dev trabalhando"); }
  registrarPonto() { console.log("Ponto registrado"); }
  receberSalario() { console.log("Salário recebido"); }
  escreverCodigo() { console.log("Escrevendo código"); }
}

class Estagiario implements Trabalhavel, RegistravelPonto, Programavel, Bolsista {
  trabalhar() { console.log("Estagiário trabalhando"); }
  registrarPonto() { console.log("Ponto registrado"); }
  escreverCodigo() { console.log("Estagiário escrevendo código"); }
  receberBolsa() { console.log("Bolsa recebida"); }
}

class SistemaRH {
  constructor(private trabalhadores: Trabalhavel[]) {}

  executarTrabalho() {
    this.trabalhadores.forEach(t => t.trabalhar());
  }
}

interface PagamentoPorProjeto {
  receberPorProjeto(): void;
}

class Freelancer implements Trabalhavel, Programavel, PagamentoPorProjeto {
  trabalhar() { console.log("Freelancer trabalhando"); }
  escreverCodigo() { console.log("Freelancer codando"); }
  receberPorProjeto() { console.log("Pagamento por projeto recebido"); }
}
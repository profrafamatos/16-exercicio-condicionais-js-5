// Não altere este arquivo
const diaDaSemana = require('./index'); 

describe('Testes da função diaDaSemana', () => {
  test('deve retornar "Domingo" para 1', () => {
    expect(diaDaSemana(1)).toBe("Domingo");
  });

  test('deve retornar "Segunda-feira" para 2', () => {
    expect(diaDaSemana(2)).toBe("Segunda-feira");
  });

  test('deve retornar "Terça-feira" para 3', () => {
    expect(diaDaSemana(3)).toBe("Terça-feira");
  });

  test('deve retornar "Quarta-feira" para 4', () => {
    expect(diaDaSemana(4)).toBe("Quarta-feira");
  });

  test('deve retornar "Quinta-feira" para 5', () => {
    expect(diaDaSemana(5)).toBe("Quinta-feira");
  });

  test('deve retornar "Sexta-feira" para 6', () => {
    expect(diaDaSemana(6)).toBe("Sexta-feira");
  });

  test('deve retornar "Sábado" para 7', () => {
    expect(diaDaSemana(7)).toBe("Sábado");
  });

  test('deve retornar "Dia inválido!" para valores fora do intervalo', () => {
    expect(diaDaSemana(0)).toBe("Dia inválido! Por favor, insira um número de 1 a 7.");
    expect(diaDaSemana(8)).toBe("Dia inválido! Por favor, insira um número de 1 a 7.");
    expect(diaDaSemana(-1)).toBe("Dia inválido! Por favor, insira um número de 1 a 7.");
  });
});

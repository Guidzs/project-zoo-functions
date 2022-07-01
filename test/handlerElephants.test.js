const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa se a fução ao não receber parametros retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('testa se ao passar um parametro invalido retorna o erro', () => {
    const actual = handlerElephants(Number);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toBe(expected);
  });

  it('testa se caso o parametro seja igual ao uma chave retorna o valor', () => {
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('testa se ao passar o parametro certo retona o esperado', () => {
    {
      const actual = handlerElephants('count');
      const espected = 4;
      expect(actual).toBe(espected);
    }
    {
      const actual = handlerElephants('names');
      const espected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
      expect(actual).toEqual(espected);
    }
    {
      const actual = handlerElephants('averageAge');
      const espected = 10.5;
      expect(actual).toBe(espected);
    }
    {
      const actual = handlerElephants('qualque coisa');
      const espected = null;
      expect(actual).toBe(espected);
    }
  });
});

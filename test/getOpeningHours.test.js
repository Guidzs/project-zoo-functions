const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('testa se ao não receber parametros retorna um objeto com todos os horarios', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });

  it('testa se ao receber os parametros retorna o esperado', () => {
    {
      const actual = getOpeningHours('Monday', '09:00-AM');
      const expected = 'The zoo is closed';
      expect(actual).toBe(expected);
    }
    {
      const actual = getOpeningHours('Tuesday', '09:00-AM');
      const expected = 'The zoo is open';
      expect(actual).toBe(expected);
    }
    {
      const actual = getOpeningHours('Wednesday', '09:00-PM');
      const expected = 'The zoo is closed';
      expect(actual).toBe(expected);
    }
  });

  it('testa se ao receber os parametros invalidos retorna o erro certo', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError('The day must be valid. Example: Monday');
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError('The hour should represent a number');
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError('The minutes should represent a number');
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});

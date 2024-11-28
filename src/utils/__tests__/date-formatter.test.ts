import { formatDate, shortFormatDate } from '../date-formatter';

describe('formatDate', () => {
  it('formats date correctly for English locale', () => {
    const result = formatDate('2024-11-26', 'en');
    expect(result).toBe('26th November 2024');
  });

  it('formats date correctly for German locale', () => {
    const result = formatDate('2024-11-26', 'de');
    expect(result).toBe('26th November 2024');
  });

  it('adds the correct ordinal suffix for days', () => {
    const testCases = [
      { date: '2024-11-01', expected: '1st November 2024' },
      { date: '2024-11-02', expected: '2nd November 2024' },
      { date: '2024-11-03', expected: '3rd November 2024' },
      { date: '2024-11-04', expected: '4th November 2024' },
      { date: '2024-11-11', expected: '11th November 2024' },
      { date: '2024-11-21', expected: '21st November 2024' },
      { date: '2024-11-22', expected: '22nd November 2024' },
      { date: '2024-11-23', expected: '23rd November 2024' },
    ];

    testCases.forEach(({ date, expected }) => {
      expect(formatDate(date, 'en')).toBe(expected);
    });
  });

  it('uses the default English locale if no locale is provided', () => {
    const result = formatDate('2024-11-26');
    expect(result).toBe('26th November 2024');
  });
});

describe('shortFormatDate', () => {
  it('formats date correctly for English locale', () => {
    const result = shortFormatDate('2024-11-26', 'en');
    expect(result).toBe('Nov 26, 2024');
  });

  it('formats date correctly for German locale', () => {
    const result = shortFormatDate('2024-11-26', 'de');
    expect(result).toBe('Nov 26, 2024');
  });

  it('formats date correctly for different months', () => {
    const testCases = [
      { date: '2024-01-15', expected: 'Jan 15, 2024' },
      { date: '2024-02-20', expected: 'Feb 20, 2024' },
      { date: '2024-03-10', expected: 'Mar 10, 2024' },
    ];

    testCases.forEach(({ date, expected }) => {
      expect(shortFormatDate(date, 'en')).toBe(expected);
    });
  });

  it('uses the default English locale if no locale is provided', () => {
    const result = shortFormatDate('2024-11-26');
    expect(result).toBe('Nov 26, 2024');
  });

  it('formats leap day correctly', () => {
    const result = shortFormatDate('2024-02-29', 'en');
    expect(result).toBe('Feb 29, 2024');
  });

  it('formats dates in the past correctly', () => {
    const result = shortFormatDate('2000-05-15', 'en');
    expect(result).toBe('May 15, 2000');
  });
});

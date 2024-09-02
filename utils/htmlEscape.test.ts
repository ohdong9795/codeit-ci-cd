import { escape, unescape } from './htmlEscape';

describe('escape', () => {
  test(`if the string contains &`, () => {
    expect(escape(`12&ab`)).toEqual('12&amp;ab');
  });
  test(`if the string contains <`, () => {
    expect(escape(`12<ab`)).toEqual('12&lt;ab');
  });
  test(`if the string contains >`, () => {
    expect(escape(`12>ab`)).toEqual('12&gt;ab');
  });
  test(`if the string contains "`, () => {
    expect(escape(`12"ab`)).toEqual('12&quot;ab');
  });
  test(`if the string contains '`, () => {
    expect(escape(`12'ab`)).toEqual('12&#39;ab');
  });
  test('if the string contains no escape characters', () => {
    expect(escape(`12ab`)).toEqual('12ab');
  });
  test('if the string is empty', () => {
    expect(escape(``)).toEqual('');
  });
});

describe('unescape', () => {
  test(`if the string contains &amp;`, () => {
    expect(unescape('12&amp;ab')).toEqual(`12&ab`);
  });
  test(`if the string contains <`, () => {
    expect(unescape('12&lt;ab')).toEqual(`12<ab`);
  });
  test(`if the string contains >`, () => {
    expect(unescape('12&gt;ab')).toEqual(`12>ab`);
  });
  test(`if the string contains "`, () => {
    expect(unescape('12&quot;ab')).toEqual(`12"ab`);
  });
  test(`if the string contains '`, () => {
    expect(unescape('12&#39;ab')).toEqual(`12'ab`);
  });
  test('if the string contains no unescape characters', () => {
    expect(unescape(`12ab`)).toEqual('12ab');
  });
  test('if the string is empty', () => {
    expect(unescape(``)).toEqual('');
  });
});

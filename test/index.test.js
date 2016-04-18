import ignoreProps from '../index';

describe('ignore-props', () => {
  it('ignores empty stuff', () => {
    ignoreProps({}).should.eql({});
  });

  it('ignores a simple string-prop', () => {
    ignoreProps({ id: 1 }, 'id').should.eql({});
  });

  it('ignores empty props', () => {
    ignoreProps().should.eql({});
  });

  it('works with arrays', () => {
    ignoreProps(
      {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
      },
      ['a', ['b', 'c']],
      ['d'],
      ['e']
    ).should.eql({});
  });
});

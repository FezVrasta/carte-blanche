import { expect } from 'chai';
import variationsToProps from '../variationsToProps';

describe('variationsToProps', () => {
  it('should convert a number prop', () => {
    const variations = {
      'variationA.js':
`{
  "props": {
    "age": 22
  }
};`,
    };
    const expected = {
      'variationA.js': {
        age: 22,
      },
    };
    expect(variationsToProps(variations)).to.deep.equal(expected);
  });

  it('should convert a string prop', () => {
    const variations = {
      'variationA.js':
`{
  "props": {
    "name": "Ada Lovelace"
  }
};`,
    };
    const expected = {
      'variationA.js': {
        name: 'Ada Lovelace',
      },
    };
    expect(variationsToProps(variations)).to.deep.equal(expected);
  });

  it('should convert a true boolean prop', () => {
    const variations = {
      'variationA.js':
`{
  "props": {
    "active": true
  }
};`,
    };
    const expected = {
      'variationA.js': {
        active: true,
      },
    };
    expect(variationsToProps(variations)).to.deep.equal(expected);
  });

  it('should convert a false boolean prop', () => {
    const variations = {
      'variationA.js':
`{
  "props": {
    "active": false
  }
};`,
    };
    const expected = {
      'variationA.js': {
        active: false,
      },
    };
    expect(variationsToProps(variations)).to.deep.equal(expected);
  });

  it.only('should convert multiple props', () => {
    const variations = {
      'variationA.js':
`{
  "props": {
    "age": 22,
    "name": "Ada Lovelace"
  }
};`,
    };
    const expected = {
      'variationA.js': {
        age: 22,
        name: 'Ada Lovelace',
      },
    };
    expect(variationsToProps(variations)).to.deep.equal(expected);
  });
});

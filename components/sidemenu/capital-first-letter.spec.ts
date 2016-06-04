import {CapitalFirstPipe} from './capital-first-letter';

describe('capital first letter', () => {
  it('should captial first letter', () => {
    let source:string = 'beijing';
    let pipe:any = new CapitalFirstPipe();
    let result:string = 'Beijing';
    let actual:string = pipe.transform(source);
    expect(actual).toEqual(result);
  });
});

import {CapitalFirstPipe} from './capital-first-letter';
import { PipeTransform } from 'angular2/core';

describe('capital first letter', () => {
  it('should captial first letter', () => {
    let source:string = 'beijing';
    let pipe:PipeTransform = new CapitalFirstPipe();
    let result:string = 'Beijing';
    expect(pipe.transform(source)).toEqual(result);
  });
});

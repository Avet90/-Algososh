import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {Circle} from './circle';

describe('Circle render', () => {
    it('Without letter', () => {
        expect(render(<Circle/>)).toMatchSnapshot();
    });
    it('With letter', () =>{
        expect(render(<Circle letter={'abcd'}/>)).toMatchSnapshot();
    });
    it('With head', ()=>{
        expect(render(<Circle head={'prop'}/>)).toMatchSnapshot();
    });
    it('With react head', () => {
        expect(render(<Circle head={<div></div>}/>)).toMatchSnapshot();
    });
    it('With tail', () => {
        expect(render(<Circle tail={'prop'}/>)).toMatchSnapshot();
    });
    it('With react tail', () => {
        expect(render(<Circle tail={<div></div>}/>)).toMatchSnapshot();
    });
    it('With index', () => {
        expect(render(<Circle index={'prop'}/>)).toMatchSnapshot();
    });
    it('With prop isSmall ===  true', () =>{
        expect(render(<Circle isSmall={true}/>)).toMatchSnapshot();
    });
    it('in the default state', () => {
        expect(render(<Circle state={'default'}/>)).toMatchSnapshot();
    });
    it('in the changing state', () => {
        expect(render(<Circle state={'changing'}/>)).toMatchSnapshot();
    });
    it('in the modified state', () => {
        expect(render(<Circle state={'modified'}/>)).toMatchSnapshot();
    });
});
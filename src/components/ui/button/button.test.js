import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {Button} from './button';

describe("Button render", () => {
        it('Button render with text', () => {
          render(<Button text={'Some text'} />);
          expect(screen.getByRole('button')).toMatchSnapshot();
        });

        it('Button render without text', () =>{
          render(<Button text={' '} />);
          expect(screen.getByRole('button')).toMatchSnapshot();
        });

        it('Render locked button', () => {
          render(<Button disabled={true}/>)
          expect(screen.getByRole('button')).toMatchSnapshot();
        });

        it('Buttons with loading indication', () => {
          render(<Button isLoader={true}/>);
          expect(screen.getByRole('button')).toMatchSnapshot();
        });

        it('Callback when clicking on the button', () => {
          const testButton = jest.fn();
          render(<Button onClick={testButton}/>);
          fireEvent.click(screen.getByRole('button'));
          expect(testButton).toHaveBeenCalled();
        });
});
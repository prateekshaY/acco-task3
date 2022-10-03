import {render, fireEvent} from '@testing-library/react'
import Input from './Input';

test("it should render input button", () => {
    const utils = render(<Input />);
    const input = utils.getByLabelText('list-input');
    expect(input).toBeInTheDocument();
})


test("it should take correct input", () => {
    const utils = render(<Input />);
    const input = utils.getByLabelText('list-input');
    fireEvent.change(input, {target: {value: 'Wake up'}});
    expect(input.value).toBe('Wake up');
})
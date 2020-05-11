import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import TechList from '~/components/TechList';
import { addTech } from '~/store/modules/techs/actions';

// o jest serve para falar que este teste vai usar o redux daqui nao do app
jest.mock('react-redux');

//describe é a descrição do teste
describe('TechList component', () => {
  //it é o ato de criar o test que é end to end
  it('should render tech list using redux', () => {
    // aqui ele está usando um hook
    useSelector.mockImplementation((cb) =>
      cb({
        techs: ['Node.js', 'React.js'],
      })
    );
    // quando ele usa o render ele consegue pegar alguns parametro padrões para maniputla
    //por exemplo o getByText signfica que ele vai pegar o texto
    // getByTestId ele espera um id dentro do form ou input, label o que for no html
    // que é passado como data-testid e vc precisa referenciar ele para falar que o teste vai manipular aquele item

    //ToContainElement ele verifica se contem o elemento com base do byText
    const { getByText, getByTestId } = render(<TechList />);

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByTestId('tech-list')).toContainElement(getByText('React.js'));
  });

  it('should be able useDispacth act and add new tech', () => {
    const { getByTestId, getByLabelText } = render(<TechList />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
    fireEvent.submit(getByTestId('tech-form'));

    expect(dispatch).toHaveBeenCalledWith(addTech('Node.js'));
  });

  it('should be able verify if button is ok', () => {
    const { getByTestId, debug } = render(<TechList />);

    fireEvent.click(getByTestId('btn-handle'));
  });
});

import React, { useState } from 'react';
import { DivBody, StyledTextArea, StyledButton, StyledResetButton, DivMessage } from './StyledPLTComponents';
import { StringMutations } from '../model/StringMutations';

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

function TextInput(props: {}) {
    const [inputData, setInputData] = useState('');
    const [translate, doTranslation] = useState('');
    const [status, setStatus] = useState('');

    const translation = (event: ButtonEvent): void => {
        doTranslation('')
        const transulate = () => {
            StringMutations.translate(inputData).then(
                (translatedOutPut: string) => {
                    doTranslation(translatedOutPut as string);
                    setStatus("Done...")
                }
            ).catch(
                e => setStatus(e.toString())
            )
        };
        (validateText(event) === 'In progress...') && transulate();
    };

    const validateText = (event: ButtonEvent) => {
        const updateStatus = (data: string) => {
            switch (data) {
                case '': return 'No data Found : Enter the Valid Input in left Text Box';
                default: return 'In progress...';
            }
        }
        const validationResults = updateStatus(inputData.trim())
        setStatus(validationResults);
        return validationResults;
    };

    const clearAll = (event: ButtonEvent) => {
        setStatus('');
        doTranslation('');
        setInputData('');
    }

    const onChangeTextArea = (e: ChangeEvent) => {
        e.preventDefault();        
        setInputData(prevInputData => e.target ? (e.target.value) : prevInputData)
    }

    return (        
        <div>  
            <DivBody>
                <StyledTextArea id='lefttextarea1' data-testid="lefttextarea1" value={inputData} onChange={(e) => onChangeTextArea(e)} />
                <StyledButton id='button' onClick={(e) => translation(e)}>Translate</StyledButton>
                <StyledResetButton type='reset' onClick={(e) => clearAll(e)}>clear</StyledResetButton>
                <StyledTextArea id='righttextarea1' data-testid="righttextarea1" readOnly value={translate} />
                <DivMessage data-testid="statusdiv1" >{status}</DivMessage>
            </DivBody>
        </div>
    );

}

export default TextInput;
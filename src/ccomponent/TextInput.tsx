import React, { useState, useRef } from 'react';
import { DivBody, StyledTextArea, StyledButton, StyledResetButton, DivMessage } from './StyledPLTComponents';
import { StringMutations } from '../model/StringMutations';


type ButtonEvent = React.MouseEvent<HTMLButtonElement>;
type FocusEvent = React.FocusEvent<HTMLTextAreaElement>;

function TextInput(props: {}) {

    const [inputData, setInputData] = useState('');
    const [translate, doTranslation] = useState('');
    const [status, setStatus] = useState('');
    const valRef = useRef<HTMLTextAreaElement>(null);
   
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
        if (valRef && valRef.current) {
            valRef.current.value = '';
            // valRef.current.addEventListener('clear',{

            // })
            valRef.current.dispatchEvent(new CustomEvent("clear", {
                detail: { name: "pig laten reseting done.." }
            }));
        }
    }

    const onBlurTextArea = (e: FocusEvent) => {
        setInputData(e.target.value)
    }

    return (
        <div>
         
            <DivBody>
                <StyledTextArea id='lefttextarea1' ref={valRef} data-testid="lefttextarea1" onBlur={(e) => onBlurTextArea(e)} />
                <StyledButton id ='button' onClick={(e) => translation(e)}>Translate</StyledButton>
                <StyledResetButton type='reset' onClick={(e) => clearAll(e)}>clear</StyledResetButton>
                <StyledTextArea id = 'righttextarea1' data-testid="righttextarea1" readOnly value={translate} />
                <DivMessage data-testid="statusdiv1" >{status}</DivMessage>
            </DivBody>
        </div>
    );

}

export default TextInput;
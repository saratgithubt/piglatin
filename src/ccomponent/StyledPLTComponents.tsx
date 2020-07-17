import style from 'styled-components';

export const StyledHead5 = style.h2`
       color:white;
       background-color: #382c34;
       box-border:1px solid;
       border: 2px solid grey;
       margin: 0 0.1em;
       padding: 0.25em 1em;      
`;


export const DivMessage = style.div`
       color:brown;
       font-size: calc(3px + 2vmin);
       cursor: pointer;       
       background: transparent;    
       border-radius: 3px;    
       border: 2px solid lightgrey;
       margin: 10%;
       padding: 2%;
       height: .3em;
`;

export const DivBody = style.div`
       color:brown;
       font-size: calc(3px + 2vmin);
       border-color: lightgrey;
       cursor: pointer;       
       background: transparent;    
       border-radius: 3px;    
       border: 2px solid grey;
       margin: 0.1%;
       padding: 5%;
       height: 20em;
       transition: 0.5s all ease-out;
       
       &:hover {
           border-color: black;
           background-color:  #e5e6e7;
           
       }
`;
export const StyledButton = style.button`     
       background-color:white;
       font-size: calc(10px + 2vmin);
       cursor: pointer;    
       border-radius: 3px;
       color: palevioletred;
       border: 2px solid palevioletred;
       margin: 0 1em;
       padding: 0.25em 1em;
       transition: 0.5s all ease-out;

       &:hover {
         background-color: palevioletred;
         color: white;
       }

       &:active {
         border-color: green;
         color: black;
         border: 16px solid brown;
       }      
`;


export const StyledResetButton = style.button`     
       background-color:white;
       font-size: calc(10px + 2vmin);
       cursor: pointer;    
       border-radius: 3px;
       color: palevioletred;
       border: 2px solid palevioletred;
       margin: 0 1em;
       padding: 0.25em 1em;
       transition: 0.5s all ease-out;

       &:hover {
         background-color: palevioletred;
         color: white;
       }

       &:active {
         border-color: green;
         color: black;
         border: 16px solid brown;
       }      
`;
export const StyledTextArea = style.textarea`     
       background-color:white;
       font-size: calc(10px + 2vmin);
       cursor: pointer;      
       font-size: 16px;
       border-radius: 3px;
       color: black;
       border: 2px solid brown;
       margin:0%;
       padding: 1%;
       transition: 0.5s all ease-out;
       height: 20em;
       width: 20em;

       &:hover {
           border-color: green;
           color: black;
       }

      
`;


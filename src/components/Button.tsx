import { FC } from "react";

interface ButtonInterface {
    text: string,
    value: number, 
    type: string, 
    onClick: (type: string, value: number) => void;
}

const Button: FC<ButtonInterface> = ({text, value, type, onClick}): JSX.Element => {
    return ( 
        <button onClick={() => {
            onClick(type, value);
        }}>
            {text}
        </button>
     );
}
 
export default Button;
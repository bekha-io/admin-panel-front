import React from 'react'
import classNames from 'classnames'

interface IInputProps {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    unit?: string;
    description?: string;
}

const Input = (props: IInputProps) => {
    return (
        <div className="my_input">
            <div className="my_input__wrap">
                <input
                    // value={props.value} 
                    // onChange={props.onChange} 
                    placeholder={props.placeholder}
                    className={"my_input__input"}
                />
                {props.unit &&
                    <div className="my_input__unit">
                        {props.unit}
                    </div>
                }
            </div>
            {props.description &&
                <div className="my_input__description">
                    {props.description}
                </div>
            }
        </div>
    )
}

export default Input
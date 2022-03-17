import React from "react";

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
};

const Button = (props: ButtonProps) => {
    const { handleClick } = props;

    return (
        <div><button onClick={(event) => { handleClick(event, 1) }}>Click</button></div>
    )
}

export default Button
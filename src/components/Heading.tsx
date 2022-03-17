type HeadingProp = {
    children: string
};

const Heading = (props: HeadingProp) => {
    const { children } = props;
    return (
        <div><h2>{children}</h2></div>
    )
}

export default Heading
type OscarProps = {
    children: React.ReactNode
};

//ReactNode use it once 

const Oscar = (props: OscarProps) => {
    const { children } = props;
    return (
        <div>{children}</div>
    )
}

export default Oscar
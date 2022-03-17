type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
};

const Greet = (props: GreetProps) => {
    const { name, messageCount, isLoggedIn } = props;
    return (
        <div>
            {isLoggedIn ? <h2>Welcome {name}! You have {messageCount} unread messages</h2> : <h2>Welcome Guest!</h2>}
        </div>
    )
}

export default Greet

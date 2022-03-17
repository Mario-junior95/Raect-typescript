type GreetWithOptionTypeProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
};

//option in case bede esta3ml bas 2 props instead of 3 

const GreetWithOptionType = (props: GreetWithOptionTypeProps) => {
    const { name, messageCount = 0, isLoggedIn } = props;
    return (
        <div>
            {isLoggedIn ? <h2>Welcome {name}! You have {messageCount} unread messages</h2> : <h2>Welcome Guest!</h2>}
        </div>
    )
}

export default GreetWithOptionType
type StatusProps = {
    // status: string
    //in this case mafiye 5aliya hek i should make it uninon barke da5al value string bas mech wa7ad men hole el 3 
    //li below esma union
    status: 'loading' | 'success' | 'error'
};

const Status = (props: StatusProps) => {
    const { status } = props;

    let message;
    if (status === "loading") {
        message = "Laoding....";
    } else if (status === "success") {
        message = "Data fetched Successfully!";
    } else if (status === "error") {
        message = "Error Fetching Data";
    }

    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}

export default Status
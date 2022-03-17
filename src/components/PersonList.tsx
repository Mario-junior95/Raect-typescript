import { PersonListProps } from "./Types/PersonList.types";

// type PersonListProps = {
//     names: {
//       first: string;
//       last: string;
//     }[];
//   };


const PersonList = (props: PersonListProps) => {
    const { names } = props;
    return (
        <div>
            {names && names?.map((name, key) => {
                return (
                    <h2 key={key}>{name.first} {name.last}</h2>
                );
            })}
        </div>
    );
};

export default PersonList;

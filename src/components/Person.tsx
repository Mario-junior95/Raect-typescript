// type PersonProps = {
//     name: {
//         first: string,
//         last: string
//     }
// };

import { PersonProps } from "./Types/Person.types";

const Person = (props: PersonProps) => {
  const { name } = props;
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};

export default Person;

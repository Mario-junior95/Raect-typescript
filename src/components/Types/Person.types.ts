type Name = {
  first: string;
  last: string;
};

// type PersonProps = {
//   name: {
//     first: string;
//     last: string;
//   };
// };

type PersonProps = {
  name: Name;
};

export type { Name, PersonProps };

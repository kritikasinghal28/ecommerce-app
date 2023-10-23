import { FormEventHandler } from "react";
import "./search.css";

type SearchProps = {
  searchText: string | number;
  handleFilter: FormEventHandler;
};

export const Search = (props: SearchProps) => {
  const { handleFilter } = props;
  return (
    <>
      <div onChange={handleFilter}></div>
      <input type="text" placeholder="Start typing to search" />
    </>
  );
};

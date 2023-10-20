import "./search.css";

export const Search = (props: any) => {
  const { handleFilter } = props;
  return (
    <>
      <div onChange={handleFilter}></div>
      <input type="text" placeholder="Start typing to search" />
    </>
  );
};

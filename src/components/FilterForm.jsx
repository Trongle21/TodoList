import FilterOption from "./FilterOption";

const FilterForm = () => {
  return (
    <form className="filter-form">
      <FilterOption type="checkbox" label="Tất cả" value="all" checked />
      <FilterOption type="checkbox" label="Hoàn thành" value="done" />
      <FilterOption type="checkbox" label="Chưa hoàn thành" value="doing" />
    </form>
  );
};

FilterForm.propTypes = {};

export default FilterForm;

import { type Column } from "@tanstack/react-table";

export const onOptionSelect = ({
  isSelected,
  selectedValues,
  option,
  column,
}: {
  isSelected: boolean;
  selectedValues: Set<string>;
  option: { value: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  column: Column<any, any> | undefined;
}) => {
  if (isSelected) {
    selectedValues.delete(option.value);
  } else {
    selectedValues.add(option.value);
  }
  const filterValues = Array.from(selectedValues);
  column?.setFilterValue(filterValues.length ? filterValues : undefined);
};

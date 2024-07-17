import { countryFlag } from "@/app/types/types";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const CountryFlag = () => {
  const [selected, setSelected] = useState<string>("");

  const handleSizeChange = (size: number) => {
    console.log(size);
    // setSize(size);
  };

  return (
    <ReactFlagsSelect
      selected={selected}
      onSelect={(code) => setSelected(code)}
      placeholder="Country"
      selectedSize={handleSizeChange}
    />
  );
};

export default CountryFlag;

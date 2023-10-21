import React, { useState } from "react";
import { ITarget } from "./types";

const useInput = (
	initialState: string | number
): [
	{
		value: string | number;
		onChange: (e: ITarget) => void;
	},
	() => void
] => {
	const [value, setValue] = useState(initialState);

	return [
		{
			value,
			onChange: (e: ITarget) => setValue(e.target.value),
		},
		() => setValue(initialState),
	];
};

export default useInput;

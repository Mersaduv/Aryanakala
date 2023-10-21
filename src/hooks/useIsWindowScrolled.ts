import { useEffect, useMemo, useState } from "react";

export const useIsWindowScrolled = (): boolean => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setIsScrolled(window.pageYOffset > 1 ? true : false);
		});
	}, []);

	const isScrolledValue = useMemo(() => {
		return isScrolled;
	}, [isScrolled]);

	return isScrolledValue;
};

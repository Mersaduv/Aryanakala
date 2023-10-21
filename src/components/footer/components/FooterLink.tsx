"use client";

import React from "react";
import { IFooterLink } from "../types";
import Link from "next/link";
import { useParams } from "next/navigation";

const FooterLink = ({ name, href }: IFooterLink) => {
	const currentPathname = useParams();

	return (
		<li>
			<Link
				href={href}
				className={`min-w-fit text-gray-200 hover:text-primary ${
					!currentPathname.length && href === "/"
						? "text-primary"
						: currentPathname[0] === href
						? "text-primary"
						: ""
				}`}
			>
				{name}
			</Link>
		</li>
	);
};

export default FooterLink;

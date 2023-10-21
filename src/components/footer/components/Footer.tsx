import React from "react";
import { PiBowlFoodFill } from "react-icons/pi";
import FooterLink from "./FooterLink";
import { BsClockHistory } from "react-icons/bs";

const Footer = () => {
	return (
		<footer className="w-full mt-[4rem]">
			<div className="bg-dark flex items-center flex-col lg:flex-row mx-auto gap-8 lg:gap-2 container h-full py-12 lg:py-16 rounded-t-3xl [&>:not(:first-child)]:pr-2 md:[&>:not(:first-child)]:pr-4">
				<div className="flex w-11/12 mr-auto lg:w-4/12 h-[50px] items-center gap-1 bg-secondaryDark py-2 px-1 rounded-r-full">
					<div className="flex justify-center items-center gap-2 text-white">
						<PiBowlFoodFill className="text-4xl lg:text-4xl" />
						<h2 className="text-xs md:text-lg lg:text-xl font-semibold uppercase">
							flying food
						</h2>
					</div>
				</div>
				<ul className="w-full lg:w-8/12 text-center text-sm md:text-lg text-gray-200 uppercase grid justify-center gap-x-2 md:gap-x-4 gap-y-2 grid-cols-4">
					<FooterLink name="Home" href="/" />
					<FooterLink name="Cart" href="/cart" />
					<FooterLink name="Wishlist" href="/wishlist" />
					<FooterLink name="Categories" href="/categories" />
					<FooterLink name="Home" href="home" />
					<FooterLink name="Delivery" href="/delivery" />
					<FooterLink name="Payment" href="/payment" />
					<FooterLink name="Menu" href="/menu" />
				</ul>
				<div className="w-full lg:w-4/12 flex items-center justify-center lg:justify-start gap-4 text-gray-200 font-semibold text-xs md:text-sm">
					<BsClockHistory className="text-gray-400 text-4xl" />
					<p className="uppercase">
						working hours
						<span className="block">08:00 23:00</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

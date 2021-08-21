import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	view?: "primary" | "ghost";
	children: ReactNode;
	arrow?: "right" | "down" | "none";
}

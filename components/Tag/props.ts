import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IProps {
	view?: "primary" | "ghost";
	children: ReactNode;
	arrow?: "right" | "down" | "none";
}

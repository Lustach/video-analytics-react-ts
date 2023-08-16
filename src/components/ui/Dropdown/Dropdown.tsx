import { useState } from "react";
import type { Options } from "./type";
import "./styles.css";




export default function Dropdown(
    { options, optionKey, optionValue, }: { options: Options[], optionKey: string, optionValue: string }
) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen); // Toggle the dropdown visibility
    };
    const selectOptions = options.map(option =>
        <li
            key={option[optionKey]}
            value={option[optionValue]}
        >
            <a href={option.link} target={option.absolute ? '_blank' : '_self'}>{option[optionValue]}</a>
        </li>
    );

    return (
        <div id="dropdown__container">
            <div onClick={toggleDropdown}>Dropdown</div>
            <ul className={isDropdownOpen ? "active" : "non-active"}>
                {selectOptions}
            </ul>
        </div>
    )
}
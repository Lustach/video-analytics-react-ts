import { useState } from "react";
import type { Category, Item } from "./type";
import "./styles.css";




export default function Dropdown(
    { options, optionKey, optionValue, }:
        { options: Category<Item>[], optionKey: string, optionValue: string }
) {
    console.log(options)
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen); // Toggle the dropdown visibility
    };

    const selectOptions = options.map((option: Category<Item>) => {

        const mapCategoryItems = () => {
            const categoryItems = option.category?.items

            return <>
                <span>{option.category.name}</span>
                <ul>
                    {categoryItems?.length ?
                        categoryItems?.map((category) =>
                            <a href={category.link} target={option.absolute ? '_blank' : '_self'}>
                                <li>{category.name}</li>
                            </a>
                        ) : undefined}
                </ul>
            </>
        }
        const mapSubcategoryItems = () => {
            const subcategoryItems = option.category?.subcategory?.items
            const subcategoryTitle = option.category?.subcategory?.name
            return <>
                {
                    subcategoryItems?.length ?
                        <span style={{ paddingLeft: "15px" }}>{subcategoryTitle}</span> : undefined
                }
                <ul>
                    {
                        subcategoryItems?.length ?
                            subcategoryItems?.map((subcategory) =>
                                <a href={subcategory.link} target={option.absolute ? '_blank' : '_self'}>
                                    <li style={{ paddingLeft: "25px" }}
                                    >{subcategory.name}</li>
                                </a>
                            ) : undefined
                    }

                </ul>
            </>
        }
        return <li>
            {mapCategoryItems()}
            {mapSubcategoryItems()}
        </li >
    }
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
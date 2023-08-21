import { useState } from "react";
import type { Category, Item } from "./type";
import "./styles.css";




export default function Dropdown(
    { options }:
        { options: Category<Item>[], optionKey: string, optionValue: string }
) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen((isDropdownOpen) => !isDropdownOpen); // Toggle the dropdown visibility
    };
    function getLinkTarget(href: string) {
        return href.startsWith('#') ? "_self" : "_blank"
    }
    const selectOptions = options.map((option: Category<Item>) => {

        const mapCategoryItems = () => {
            const categoryItems = option.category?.items

            return <>
                <span>{option.category.name}</span>
                {categoryItems?.length ?
                    <ul>{
                        categoryItems.map((category) =>
                            <a href={category.link} target={getLinkTarget(category.link)}>
                                <li>{category.name}</li>
                            </a>
                        )}
                    </ul> : null}
            </>
        }
        const mapSubcategoryItems = () => {
            const subcategoryItems = option.category?.subcategory?.items
            const subcategoryTitle = option.category?.subcategory?.name
            return <>
                {
                    subcategoryItems?.length ?
                        <span style={{ paddingLeft: "15px" }}>{subcategoryTitle}</span> : null
                }
                {
                    subcategoryItems?.length ?
                        <ul>{
                            subcategoryItems?.map((subcategory) =>
                                <a href={subcategory.link} target={getLinkTarget(subcategory.link)}>
                                    <li style={{ paddingLeft: "25px" }}
                                    >{subcategory.name}</li>
                                </a>
                            )}
                        </ul>
                        : null

                }
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
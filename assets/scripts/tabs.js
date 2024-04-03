import { fadeOut } from "./effects.js"
import { isVisible, normalArray, transitionDuration } from "./variables.js"

const tabs = normalArray(document.querySelectorAll(".j_tabs"))
const tabsContent = (tabsGroup) => tabsGroup.querySelector(".j_tabs_content")
const tabsButtons = (tabsGroup) => normalArray(tabsGroup.querySelectorAll(".j_tabs_button"))
const tabsItems = (tabsGroup) => normalArray(tabsGroup.querySelectorAll(".j_tabs_item"))
const activeTab = (tabsGroup) => tabsItems(tabsGroup).find(tab => isVisible(tab))

export default function ToggleTabs() {

    tabs.forEach(tabsGroup => {
        tabsButtons(tabsGroup).forEach((button, index, group) => {

            button.addEventListener("click", () => {
                group.forEach(b => b !== button && b.classList.replace("selected", "unselected"))
                button.classList.replace("unselected", "selected")

                fadeOut(activeTab(tabsGroup))

                setTimeout(() => {
                    tabsItems(tabsGroup)[index].style.display = "flex"
                    tabsItems(tabsGroup)[index].style.opacity  = 0
                    console.log(tabsItems(tabsGroup)[index].offsetHeight);


                }, transitionDuration)
            })
        })
    })
}
import { fadeIn, fadeOut } from "./effects.js"
import { isVisible, normalArray, transitionDuration } from "./variables.js"

const tabs = normalArray(document.querySelectorAll(".j_tabs"))
const tabsContent = (tabsGroup) => tabsGroup.querySelector(".j_tabs_content")
const tabsButtons = (tabsGroup) => normalArray(tabsGroup.querySelectorAll(".j_tabs_button"))
const tabsItems = (tabsGroup) => normalArray(tabsGroup.querySelectorAll(".j_tabs_item"))
const activeTab = (tabsGroup) => tabsItems(tabsGroup).find(tab => isVisible(tab))

const tabDisplay = (tab) => Object.keys(tab.dataset).includes("noflex") ? "block" : "flex"

export default function ToggleTabs() {

    tabs.forEach(tabsGroup => {

        tabsButtons(tabsGroup).forEach((button, index, group) => {
            button.addEventListener("click", () => {
                group.forEach(b => b !== button && b.classList.replace("selected", "unselected"))
                button.classList.replace("unselected", "selected")

                tabsContent(tabsGroup).style.maxHeight = `${activeTab(tabsGroup).offsetHeight}px`
                tabsContent(tabsGroup).style.height = `${activeTab(tabsGroup).offsetHeight}px`

                fadeOut(activeTab(tabsGroup))

                setTimeout(() => {
                    tabsItems(tabsGroup)[index].style.display = tabDisplay(tabsItems(tabsGroup)[index])
                    tabsItems(tabsGroup)[index].style.opacity  = 0
                    
                    tabsContent(tabsGroup).style.maxHeight = `${tabsItems(tabsGroup)[index].offsetHeight}px`
                    tabsContent(tabsGroup).style.height = `${tabsItems(tabsGroup)[index].offsetHeight}px`

                    tabsItems(tabsGroup)[index].style.height = 0

                    setTimeout(() => {
                        tabsItems(tabsGroup)[index].style.height = ""

                        fadeIn(
                            tabsItems(tabsGroup)[index],
                            tabDisplay(tabsItems(tabsGroup)[index])
                        )
                    }, transitionDuration)
                }, transitionDuration)
            })
        })
    })
}
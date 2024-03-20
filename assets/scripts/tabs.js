import { fadeIn, fadeOut } from "./effects.js"
import { isVisible, normalArray, transitionDuration } from "./variables.js"

const allTabsButtons = normalArray(document.querySelectorAll(".j_tabs_button"))
const allTabsContent = normalArray(document.querySelectorAll(".j_tabs_content"))

const tabsByButton = (button) => button.parentNode.parentNode.classList.contains("j_tabs")
    ? button.parentNode.parentNode
    : null

const tabsByContent = (content) => content.parentNode.classList.contains("j_tabs")
    ? content.parentNode
    : null

const tabsButtons = (tabsGroup) => allTabsButtons.filter(button => tabsByButton(button) === tabsGroup)

const tabsItems = (tabsGroup) => normalArray(tabsGroup.querySelectorAll(".j_tabs_item"))

const buttonIndex = (button) => tabsButtons(tabsByButton(button)).indexOf(tabsButtons(tabsByButton(button)).find(b => b === button))

export default function ToggleTabs() {
    allTabsContent.forEach(content => {
        content.style.maxHeight = `${tabsItems(tabsByContent(content))[0].height}px`
        content.style.height = `${tabsItems(tabsByContent(content))[0].offsetHeight}px`
    })

    allTabsButtons.forEach(button => {
        button.addEventListener("click", () => {
            tabsButtons(tabsByButton(button)).forEach(b => b !== button && b.classList.replace("selected", "unselected"))
            button.classList.replace("unselected", "selected")

            tabsItems(tabsByButton(button)).forEach(item => 
                tabsItems(tabsByButton(button))[buttonIndex(button)] !== item && isVisible(item) && fadeOut(item))

            setTimeout(() => {
                tabsItems(tabsByButton(button))[buttonIndex(button)].style.display = "flex"
                tabsItems(tabsByButton(button))[buttonIndex(button)].style.opacity = 0

                tabsByButton(button).querySelector(".j_tabs_content").style.maxHeight = `${tabsItems(tabsByButton(button))[buttonIndex(button)].offsetHeight}px`
                tabsByButton(button).querySelector(".j_tabs_content").style.height = `${tabsItems(tabsByButton(button))[buttonIndex(button)].offsetHeight}px`
                
                tabsItems(tabsByButton(button))[buttonIndex(button)].style.height = 0
                tabsItems(tabsByButton(button))[buttonIndex(button)].style.overflow = "hidden"

                setTimeout(() => {
                    tabsItems(tabsByButton(button))[buttonIndex(button)].style.height = ""
                    tabsItems(tabsByButton(button))[buttonIndex(button)].style.overflow = ""

                    fadeIn(
                        tabsItems(tabsByButton(button))[buttonIndex(button)],
                        Object.keys(tabsItems(tabsByButton(button))[buttonIndex(button)].dataset).includes("noflex") ? "block" : "flex"
                    )
                }, transitionDuration);
            }, transitionDuration);
        })
    })
}
const copyYearField = document.querySelector(".j_copy_year")

/**
 * Sets the current year in copyright section.
 * @returns {void}
 */
const AddCopyrightYear = () => copyYearField.innerText = new Date().getFullYear()

export default AddCopyrightYear
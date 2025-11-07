const copyYearField = document.querySelector(".j_copy_year")

const AddCopyrightYear = () => copyYearField.innerText = new Date().getFullYear()

export default AddCopyrightYear
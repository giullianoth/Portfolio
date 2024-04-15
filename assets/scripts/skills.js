const charts = document.querySelectorAll(".j_chart")
const chartProgress = (chart) => parseFloat(chart.dataset.progress)
const chartProgressElement = (chart) => chart.querySelector(".progress")
const chartPercentElement = (chart) => chart.querySelector(".percent")

export default function SkillsCharts() {

    charts.forEach(chart => {
        let progressControl = 0

        const progress = setInterval(() => {
            chartPercentElement(chart).innerText = `${progressControl}%`
            chartProgressElement(chart).style.width = `${progressControl}%`

            if (progressControl > chartProgress(chart)) {
                clearInterval(progress)
            }

            progressControl++
        }, 10)
    })
}
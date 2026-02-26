import { GroupedDay } from "./GroupDays "

const getHourlyData = (groupedData : GroupedDay, startTime : number) : [string[], number[]] => {
    if(!groupedData) return [[],[]]
    const hourlyTime = groupedData.time.slice(startTime)
    const hourlyTemp = groupedData?.apparent_temperature.slice(startTime)
    return [hourlyTime,hourlyTemp]
}
export default getHourlyData

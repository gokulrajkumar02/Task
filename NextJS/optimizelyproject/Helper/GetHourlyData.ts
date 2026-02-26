import { GroupedDay } from "./GroupDays "

const EMPTY_RESULT: [string[], number[]] = [[], []]
const getHourlyData = (groupedData : GroupedDay, startTime : number) : [string[], number[]] => {
    if(!groupedData) EMPTY_RESULT
    const hourlyTime = groupedData.time.slice(startTime)
    const hourlyTemp = groupedData?.apparent_temperature.slice(startTime)
    return [hourlyTime,hourlyTemp]
}
export default getHourlyData

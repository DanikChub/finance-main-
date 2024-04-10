import dateformat from 'dateformat';


export function getDay(date = new Date()) {
    return dateformat(date, 'yyyy-mm-dd');
}

export function getWeek(date = new Date()) {
    
    let todayClone = dateformat(date, 'yyyy-mm-dd');
    let todayCalc = todayClone.split('-');
    todayCalc[2] = Number(todayClone.split('-')[2])-date.getDay()+1;
    
    let resultFrom = todayCalc.join('-');
    todayCalc[2]+=6;
    let resultTo = todayCalc.join('-');

    return({from: resultFrom, to: resultTo});
}

export function calcDay(date, number) {
    let todayClone = date;
    let todayCalc = todayClone.split('-');
    todayCalc[2] = Number(todayClone.split('-')[2])+number;
    let result = todayMinusSeven.join('-');
}
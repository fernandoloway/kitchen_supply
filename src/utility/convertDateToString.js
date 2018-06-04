

export default function dateToString(date, format, days){
    var result = new Date(date);
    result.setDate(result.getDate() + days);

    switch (format) {
        case 'YYYYMMDD' :
            return result.toISOString().slice(0,10).replace(/-/g,"");
        case 'YYYY-MM-DD' :
            return result.toISOString().split('T')[0]
        default:
            return result.toISOString().split('T')[0]
    } 
}
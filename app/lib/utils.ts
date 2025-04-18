import { Revenue } from "./definitions";

export const formatCurrency = (amount: number)=>{
    return (amount/100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
};

export const formatDateLoLocal = (
    dateStr: string,
    locale: string = 'en-US'
) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    };
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date)
}

export const generateYAxis = (revenue: Revenue[]) => {
    const yAxisLabels = [];
    const highestRecord = Math.max(...revenue.map(month => month.revenue));
    console.log('revenue',revenue);
    const topLabel = Math.ceil(highestRecord/1000) * 1000;
    console.log('highestRecord',highestRecord,'topLabel',topLabel);

    for(let i =topLabel; i >=0; i-=1000){
        yAxisLabels.push(`$${i / 1000}K`);
    }
    console.log('yAxisLabels',yAxisLabels);

    return { yAxisLabels, topLabel };
}
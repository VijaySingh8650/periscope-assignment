export const highlightSideBarItem = (label : string) => {
    return label==="Groups" ? "text-green-500" : "";
}


export function getRelativeTime(timestamp: string): string {
    const currentDate: Date = new Date();
    
    // Convert the provided timestamp to IST (Indian Standard Time, UTC +5:30)
    const date: Date = new Date(timestamp);
    const IST_offset: number = 5.5 * 60 * 60 * 1000;  // IST is UTC +5:30
    date.setTime(date.getTime() + IST_offset);

    // Calculate the difference in time
    const diffInSeconds: number = (currentDate.getTime() - date.getTime()) / 1000;

    const rtf: Intl.RelativeTimeFormat = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

    if (diffInSeconds < 60) {
        return rtf.format(-Math.floor(diffInSeconds), 'second');
    } else if (diffInSeconds < 3600) {
        return rtf.format(-Math.floor(diffInSeconds / 60), 'minute');
    } else if (diffInSeconds < 86400) {
        return rtf.format(-Math.floor(diffInSeconds / 3600), 'hour');
    } else if (diffInSeconds < 172800) {
        return 'yesterday';
    } else if (diffInSeconds < 2592000) {
        return rtf.format(-Math.floor(diffInSeconds / 86400), 'day');
    } else {
        return rtf.format(-Math.floor(diffInSeconds / 2592000), 'month');
    }
}
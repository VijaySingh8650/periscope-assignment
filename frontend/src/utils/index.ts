export const highlightSideBarItem = (label : string) => {
    return label==="Groups" ? "text-green-500" : "";
}


export function getRelativeTime(timestamp: string): string {
    const now = new Date();
    const date = new Date(timestamp);
  
    // Convert difference to seconds
    let diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
 
    if (diffInSeconds < 0) {
      diffInSeconds = 0;
    }
  
    // Less than 1 minute
    if (diffInSeconds < 60) {
      return "Just now";
    }
  
    // Convert to minutes
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      // e.g., "1 minute ago" or "2 minutes ago"
      return diffInMinutes === 1
        ? "1 minute ago"
        : `${diffInMinutes} minutes ago`;
    }
  
    // Convert to hours
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return diffInHours === 1
        ? "1 hour ago"
        : `${diffInHours} hours ago`;
    }
  
    // Convert to days
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
      return diffInDays === 1
        ? "Yesterday"
        : `${diffInDays} days ago`;
    }
  
    // Convert to weeks
    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) {
      return diffInWeeks === 1
        ? "1 week ago"
        : `${diffInWeeks} weeks ago`;
    }
  
    // Convert to months (approx)
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
      return diffInMonths === 1
        ? "1 month ago"
        : `${diffInMonths} months ago`;
    }
  
    // Convert to years (approx)
    const diffInYears = Math.floor(diffInMonths / 12);
    return diffInYears === 1
      ? "1 year ago"
      : `${diffInYears} years ago`;
  }
  
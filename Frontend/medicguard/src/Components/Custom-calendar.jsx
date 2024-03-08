
export function formatMonthYear(locale, date) {
    const month = date.toLocaleString(locale, { month: 'long' });
    const year = date.getFullYear();
    return `${month} ${year}`;
  }
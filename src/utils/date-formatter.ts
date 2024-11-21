export const formatDate = (dateString: string, locale = 'en'): string => {
  const date = new Date(dateString);

  const currentLocale = locale === 'en' ? 'en-US' : 'de-DE';

  const day = date.getDate();
  const month = date.toLocaleString(currentLocale, { month: 'long' });
  const year = date.getFullYear();

  const daySuffix = (day: number): string => {
    if (day >= 11 && day <= 13) return 'th';
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  return `${day}${daySuffix(day)} ${month} ${year}`;
};

export const shortFormatDate = (dateString: string, locale = 'en'): string => {
  const date = new Date(dateString);

  const currentLocale = locale === 'en' ? 'en-US' : 'de-DE';

  const day = date.getDate();
  const month = date.toLocaleString(currentLocale, { month: 'short' });
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

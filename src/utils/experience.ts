/**
 * Calculates years of experience based on the start date of professional work
 * @param startDate - The start date of professional work (format: "MMM YYYY")
 * @returns The number of years of experience
 */
export const calculateYearsOfExperience = (startDate: string): number => {
  // Parse the start date (e.g., "Jul 2018")
  const [month, year] = startDate.split(' ');
  const monthMap: { [key: string]: number } = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
  };
  
  const startMonth = monthMap[month];
  const startYear = parseInt(year);
  
  if (isNaN(startMonth) || isNaN(startYear)) {
    console.warn(`Invalid start date format: ${startDate}`);
    return 0;
  }
  
  const startDateObj = new Date(startYear, startMonth);
  const currentDate = new Date();
  
  // Calculate the difference in years
  let years = currentDate.getFullYear() - startDateObj.getFullYear();
  const monthDiff = currentDate.getMonth() - startDateObj.getMonth();
  
  // If we haven't reached the anniversary month yet, subtract 1 year
  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < startDateObj.getDate())) {
    years--;
  }
  
  return Math.max(0, years);
};

/**
 * Gets the start date of professional work from the qualification data
 * Based on the earliest work experience entry
 */
export const getProfessionalStartDate = (): string => {
  // Based on the qualification data, the earliest work experience is "Jul 2018" (VIVA)
  return "Jul 2018";
};

/**
 * Gets the calculated years of experience
 */
export const getYearsOfExperience = (): number => {
  const startDate = getProfessionalStartDate();
  return calculateYearsOfExperience(startDate);
};

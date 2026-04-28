const MS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MS_PER_DAY = MS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY;

/**
 * Calculates the duration in days between two dates (YYYY-MM-DD format).
 * Includes both the start and end day.
 */
export function calculateDurationDays (startDate: string, endDate: string): number {
	const start = new Date(startDate + "T00:00:00");
	const end = new Date(endDate + "T00:00:00");

	const diffTime = end.getTime() - start.getTime();
	if (diffTime < 0) return 0;

	return Math.ceil(diffTime / MS_PER_DAY) + 1;
}

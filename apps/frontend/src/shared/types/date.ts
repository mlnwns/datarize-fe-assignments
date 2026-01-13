/**
 * ISO 8601 date string
 * format: YYYY-MM-DD
 */

export type ISODateString = string;

export type DateRangeParams = {
	from?: ISODateString;
	to?: ISODateString;
};

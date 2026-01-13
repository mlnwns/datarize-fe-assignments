export class HttpError extends Error {
	readonly status: number;

	constructor(status: number, message: string) {
		super(message);
		this.name = "HttpError";
		this.status = status;
	}
}

export type QueryParams = Record<
	string,
	string | number | boolean | undefined | null
>;

type HttpGetOptions = {
	params?: QueryParams;
};

export async function httpGet<T>(
	path: string,
	options?: HttpGetOptions,
): Promise<T> {
	const url = new URL(path, window.location.origin);

	if (options?.params) {
		Object.entries(options.params).forEach(([key, value]) => {
			if (value !== undefined) {
				url.searchParams.append(key, String(value));
			}
		});
	}

	const response = await fetch(url.toString(), {
		method: "GET",
	});

	if (!response.ok) {
		const message = await response.text();
		throw new HttpError(response.status, message || response.statusText);
	}

	return response.json();
}

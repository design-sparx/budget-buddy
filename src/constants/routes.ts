export const path = (root: string, sublink: string): string => {
	return `${root}${sublink}`;
};

const ROOT_GUEST = '';
const ROOT_APP = '/app';

export const PATH_GUEST = {
	root: ROOT_GUEST,
};

export const PATH_APP = {
	root: ROOT_APP,
};

export const getAuthUrl = () => '/auth';
export const getDashboardUrl = () => '/dashboard';

export const getHomeUrl = () => `${getAuthUrl()}/home`
export const getLoginUrl = () => `${getAuthUrl()}/login`;
export const getRegistUrl = () => `${getAuthUrl()}/registration`;

export const getMainUrl = () => `${getDashboardUrl()}/main`;
export const getTaskByDateUrl = () => `${getDashboardUrl()}/tasks/:date`;
export const generateTaskByDate = (date) => `${getDashboardUrl()}/tasks/${date}`;

export const USER_ID_KEY = 'userId';
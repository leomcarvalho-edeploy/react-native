export const REQUEST_USER_DATA = 'REQUEST_USER_DATA';
export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';

export const requestUserData = () => ({ type: REQUEST_USER_DATA });
export const receiveUserData = (data) => ({ type: RECEIVE_USER_DATA, data });

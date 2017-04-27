// /*jshint strict:false */
// /* eslint camelcase: ["error", {properties: "never"}]*/
// /*jshint browserify: true */
// /* eslint-disable no-unused-vars*/
// /* eslint-disable */
// /* global $ jQuery require console module */
// /// <reference path="../../typings/index.d.ts"/>
// "use strict";
// import * as types from '../redux-actions/actionTypes';
// import initialState from './initialState';
// export default function courseReducer(state = initialState.courses, action) {
//     switch (action.type) {
//     case types.LOAD_COURSES_SUCCESS:
//         return action.courses;
//     case types.CREATE_COURSE_SUCCESS:
//         return [
//             ...state,
//             Object.assign({}, action.course)
//         ];
//     case types.UPDATE_COURSE_SUCCESS:
//         return [
//             ...state.filter(course => course.id !== action.course.id),
//             Object.assign({}, action.course)
//         ];
//     default:
//         return state;
//     }
// }

//# sourceMappingURL=courseReducer.js.map

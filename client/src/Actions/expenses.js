// import { database } from "firebase";
// import uuid from "uuid";
// import firebase from '../firebase/firebase'

// //ADD_EXPENSE
// export const addExpense = (expense) => ({
//   type: "ADD_EXPENSE",
//   expense
// });

// export const startAddExpense = (expense = {}) => {
//   return (dispatch) => {
//     //we are destructuring the expense object and setting up the defaul values if none was provided
//     const {
//       description = "",
//       note = "",
//       amount = 0,
//       createdAt = 0,
//     } = expense

//     return firebase.ref('expenses').push({...expense})
//             .then((ref) => {
//               dispatch(addExpense({id:ref.key , ...expense}))
//             })
//   }
// }

// //REMOVE_EXPENSE
// export const removeExpense = ({ id } = {}) => ({
//   type: "REMOVE_EXPENSE",
//   id,
// });

// //EDIT_EXPENSE
// export const editExpense = (id, updates) => ({
//   type: "EDIT_EXPENSE",
//   id,
//   updates,
// });

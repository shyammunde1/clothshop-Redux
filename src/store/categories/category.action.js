import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";

import CATEGORIES_ACTION_TYPES from "./category.types";

// export const setCategories = (categoriesArray) =>
//   createAction(
//     CATEGORIES_ACTION_TYPES.SET_CATEGORIECATEGORIES_ACTION_TYPES.SET_CATEGORIES,
//     categoriesArray
//   );

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFail = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categorieseArray = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategoriesSuccess(categorieseArray));
  } catch (error) {
    dispatch(fetchCategoriesFail(error));
  }
};

import { API } from "../@libs/axios";
import { ICategory } from "../types";



const _ENDPOINT = '/categories';

const getALL = () => (API.get(_ENDPOINT));
const create = (category: ICategory) => (API.post(_ENDPOINT, category));
const getById = (id: number) => (API.get(`${_ENDPOINT}/${id}`));
const update = (id: number, category: ICategory) => (API.put(`${_ENDPOINT}/${id}`, category));
const remove = (id: number) => (API.delete(`${_ENDPOINT}/${id}`));

export const CategoryService = {
    getALL,
    create,
    getById,
    update,
    remove
}
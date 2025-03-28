
import axios from 'axios';

const API_URL = 'http://localhost:3000';


type getListParams = {
    resource: string
}
type getOneParams = {
    resource: string,
    id: number
}
type createParams = {
    resource: string,
    variables: any
}
type updateParams = {
    resource: string,
    variables: any,
    id: number
}
type deleteParams = {
    resource: string,
    id: number
}
const dataProvider = {
    getList: async ({ resource }: getListParams) => {
        try {
            const response = await axios.get(`${API_URL}/${resource}`);
            
            if (response.status !== 200) new Error('Error');
            return {
                data: response.data
                
            }
        } catch (error: any) {
            throw new Error(error);
        }
    },
    create: async ({ resource, variables }: createParams) => {
        try {
            const response = await axios.post(`${API_URL}/${resource}`, variables);
            if (response.status !== 201) new Error('Error');
            return {
                success: true
            }
        } catch (error: any) {
            throw new Error(error);
        }
    },
    getOne: async ({ resource, id }: getOneParams) => {
        try {
            const response = await axios.get(`${API_URL}/${resource}/${id}`);
            if (response.status !== 200) new Error('Error');
            return {
                data: response.data
            }
        } catch (error: any) {
            throw new Error(error);
        }
    },
    update: async ({ resource, variables, id }: updateParams) => {
        try {
            const response = await axios.put(`${API_URL}/${resource}/${id}`, variables);
            if (response.status !== 200) new Error('Error');
            return {
                success: true
            }
        } catch (error: any) {
            throw new Error(error);
        }
    },
    deleteOne: async ({ resource, id }: deleteParams) => {
        try {
            const response = await axios.delete(`${API_URL}/products/${id}`);
            
            if (response.status !== 200 && response.status !== 204) {
                throw new Error(`Delete failed with status: ${response.status}`);
            }
    
            return { data: response.data };
        } catch (error: any) {
            console.error("Delete error:", error.response?.data || error.message);
            throw new Error(error.response?.data?.message || "Failed to delete");
        }
    }
    
}

export const { getList, getOne, create, update, deleteOne } = dataProvider;
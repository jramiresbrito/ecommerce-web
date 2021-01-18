import api from './api';
import Category from '../dtos/Category';
import Meta from '../dtos/Meta';

interface CategoryIndexData {
  categories: Category[];
  meta: Meta;
}
const CategoriesService = {
  index: (url: string) => {
    return api.get<CategoryIndexData>(url).then((response) => response.data);
  },
  create: (name: string) => {
    return api.post<void>('/admin/v1/categories', { name });
  },
  update: ({ id, name }: Category) => {
    return api.put<void>(`/admin/v1/categories/${id}`, { name });
  },
  delete: (id: number) => {
    return api.delete<void>(`/admin/v1/categories/${id}`);
  },
};
export default CategoriesService;

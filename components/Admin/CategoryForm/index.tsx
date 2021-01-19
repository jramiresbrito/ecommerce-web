import { useState, useEffect } from 'react';

import { Form } from 'react-bootstrap';
import { faGhost, faTimes } from '@fortawesome/free-solid-svg-icons';
import StyledButton from '../../../components/shared/StyledButton';

import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../../../styles/AdminPanel.module.css';
import Category from '../../../dtos/Category';

import { clearCategoryToEdit } from '../../../store/modules/admin/category/reducer';

interface CategoryFormProps {
  handleSubmit: (category: Category) => Promise<void>;
  action?: string;
}

const CategoryForm: React.FC<CategoryFormProps> = ({
  handleSubmit,
  action = 'Adicionar',
}) => {
  const [name, setName] = useState('');

  const category = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    if (category && router.pathname.includes('Edit')) {
      setName(category.name);
    }
  }, [category]);

  const router = useRouter();

  const handleFormSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault();

    await handleSubmit({ id: category?.id, name });
  };

  return (
    <div className={styles.admin_panel}>
      <Form className={styles.new_form} onSubmit={handleFormSubmit}>
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite o nome da categoria"
          className={styles.secundary_input}
          value={name}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            setName(evt.target.value)
          }
          required
        />

        <div className={styles.details_button}>
          <StyledButton
            icon={faGhost}
            action={action}
            type_button="blue"
            type="submit"
          />

          <StyledButton
            icon={faTimes}
            action={'Cancelar'}
            type_button="red"
            onClick={() => {
              dispatch(clearCategoryToEdit());
              router.back();
            }}
          />
        </div>
      </Form>
    </div>
  );
};

export default CategoryForm;

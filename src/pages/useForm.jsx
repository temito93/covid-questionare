import { useQuery } from '@/hooks';
import { FormDataContext } from '@/store';
import { useContext } from 'react';

const useForm = () => {
  const { getQuery } = useQuery('page');
  const { form } = useContext(FormDataContext);

  return { getQuery, form };
};

export default useForm;
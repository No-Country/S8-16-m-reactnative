import React, { useEffect, useState } from 'react';
import { SearchableData } from '../interfaces/constants.interfaces';


export const useSearch = <T extends SearchableData>(
    initialData: T[],
    propertyKey: keyof T
  ) => {
    const [dataFiltered, setDataFiltered] = useState<T[]>([]);
    const [term, setTerm] = useState('');
  
    useEffect(() => {
      if (term.length === 0) {
        return setDataFiltered([...initialData]);
      }
  
      setDataFiltered(
        initialData.filter((item) =>
          item[propertyKey]
            .toString()
            .toLowerCase()
            .trim()
            .includes(term.toLowerCase().trim())
        )
      );
    }, [term, initialData, propertyKey]);
  
    return { dataFiltered, term, setTerm };
  };
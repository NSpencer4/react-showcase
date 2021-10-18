import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
import { useDebounce } from '../../shared/hooks/UseDebounce';

export const Search = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Response>();

  /**
   * Functions in functional components get redefined every time the component rerenders.
   * We need to memoize the function so it does not get redefined. We can use useCallback for this.
   */
  const fetchSearchResults = useCallback(
    _.debounce((term: string) => {
      console.log('debounce:', term);
      const reqDetails = {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      };

      fetch('/mock-data/search-data.json', reqDetails)
        .then((response: Response) => response.json())
        .then((data: Response) => setResults(data));
    }, 500),
    []);

  /**
   * Alternatively, we can use a custom hook to debounce the time if we don't want to use lodash
   */
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    console.log(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
    fetchSearchResults(term);
  };

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submitted: ', searchTerm);
  };

  return (
    <section>
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => submitSearch(e)}>
        <input type="text" value={searchTerm}
               onChange={(e: ChangeEvent<HTMLInputElement>) => (handleSearchTermChange(e.target.value))}/>
        <input type="submit"/>
      </form>
      <code>{JSON.stringify(results)}</code>
    </section>
  );
};

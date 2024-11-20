import type { FC } from 'react';

export const SearchForm: FC = () => {
  return (
    <div>
      <form role="search" id="search-form">
        <input 
          type="search"
          id="q"
          aria-label="Search contacts"
          placeholder="Search"
          name="q" 
        />
        <div id="search-spinner" aria-hidden hidden={true}></div>
        <div className="sr-only" aria-live="polite"></div>
      </form>
      <form method="post">
        <button type="submit">New</button>
      </form>
    </div>
  );
};
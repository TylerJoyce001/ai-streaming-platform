import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
    params: {
        term: string;
    };
};

const SearchPage = ({ params: { term } }: Props) => {
    if (!term) notFound();

    const termToUse = decodeURI(term);

    // API call to get movies
    // API call to get popular movies
    
    return <div>Welcome to the search page: {termToUse}</div>;
};

export default SearchPage;

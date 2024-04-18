import react from 'react';

type Props = {
    params: {
        id: number;
    };

    searchParams: {
        genre: string;
    };
};

const GenrePage = ({params: { id }, searchParams: { genre } }: Props) => {
    return (
        <h1>Welcome to the genre with ID: {id} and name: {genre} </h1>
    );
};

export default GenrePage
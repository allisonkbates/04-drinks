import styled from 'styled-components';

const FiltersStyles = styled.div`
    background-color: var(--white);
    color: var(--orange);
    border-radius: 20px;
    padding: 10px 20px;
    margin-bottom: 20px;
    box-shadow: var(--bs);

    h2 {
        margin: 0;
    }

    ul {
        display: inline-flex;
        list-style-type: none;
        padding: 0px;
        flex-wrap: wrap;
    }
    li {
        margin: 0px 16px 0px 0px;
    }

    button {
        border: 1px solid var(--orange);
        color: var(--orange);
        background-color: var(--white);
        border-radius: 50px;
        min-width: 80px;
        height: 44px;
        padding: 12px 16px;
        cursor: pointer;
    }

    button:hover {
        background-color: var(--lightOrange);
    }

    button: active {
        background-color: var(--lightOrange);
    }
`;

export default function Filters() {
    return (
        <FiltersStyles>
            <h2>FILTER BY:</h2>
            <ul>
                <li><button>GIN</button></li>
                <li><button>WHISKEY</button></li>
                <li><button>VODKA</button></li>
                <li><button>TEQUILA</button></li>
                <li><button>RUM</button></li>
            </ul>
        </FiltersStyles>
    )
}

/* Looks like there could be two ways to implement this... try # 1 first.
1) get the results back from the db, after running the search (which include having no parameters...), THEN filter the results based on that search. I'm not sure if it'll only filter the ones for that page or if it'll be smart enough to bring the other results up. 
2) ask the db for the search results & filter together. pros: all the logic for the data is in one place. cons: requires more calls to the db as the user is clicking around. 
*/
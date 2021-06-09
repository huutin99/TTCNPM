//import Article from'./Article'
const articles = [
    {
        id : 1,
        text : 'Article name',
        day : 'Feb 6th at 1:30pm',
    },
    {
        id : 2,
        text : 'Article name1',
        day : 'Feb 6th at 1:30pm',
    },
    {
        id : 3,
        text : 'Article name2',
        day : 'Feb 6th at 1:30pm',
    },
    {
        id : 4,
        text : 'Article name3',
        day : 'Feb 6th at 1:30pm',
    }
]
const Articles = () => {
    return (
        <>
            {articles.map((articles)=>(<h3>{articles.text}</h3>))}
        </>
    )
}

export default Articles

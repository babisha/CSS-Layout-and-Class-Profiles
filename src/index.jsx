function arrayElements(person) {
    return (
        <>
         <div className="box">
            <h2>Name:{person.name}</h2>
            <h2>Age:     {person.age}</h2>
            <h2>Hobbies: {person.hobbies.map((hobbies) => (
                <li key={hobbies}>
                         {" "}
                    <p>{hobbies}</p>

                </li>
            ))}
            </h2>
            <h3>Bio:{person.bio}</h3>
            </div>
        </>
    )
}

export default arrayElements;

export const SimpleForm = () => {
    return (
        <>
            <h1>Form Simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="example@hotmail.com"
                name="email"
            />
        </>
    )
}

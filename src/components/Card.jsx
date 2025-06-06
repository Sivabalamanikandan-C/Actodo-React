const Card = (props) => {
    return (
        <div style={{ backgroundColor: props.bgcolor }} className='px-10 py-5 border rounded-md my-3 text-center flex-grow'>
            <h1 className='text-3xl font-medium'>{props.title}</h1>
            <p className='mt-1'>{props.subtitle}</p>
        </div>

    );
}

export default Card;
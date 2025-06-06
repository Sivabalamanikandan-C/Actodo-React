const Header=(props)=>{

    return(
        <div>
            <h1 className="text-3xl font-semibold">Hello {props.data}!</h1>
            <p>I help you to manage your activity :)</p>
        </div>
    );
}

export default Header;
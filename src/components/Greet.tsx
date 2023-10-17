type GreetProps={
    name:string
    messageCount:number
}

export const Greet=(props:GreetProps)=>{
    console.log(props);
    return (
        <div>
            <h2>{`Hi ${props.name}`} </h2>
        </div>
    )
}
export default function StudentCard(props){
    return(
        <div>
            <h1>Student Card</h1>
            <p>{props.name}</p>
            <p>{props.course}</p>
            <p>{props.roll}</p>
    
        </div>
    )
}
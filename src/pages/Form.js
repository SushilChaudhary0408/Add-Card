import Card from "../components/Card";

function Form (props){
    return (
        <>
        {props.cards.map((card) => (
          <Card
            key={card.incidentNumber}
            incidentNumber={card.incidentNumber}
            title={card.title}
            time={card.time}
            priority={card.priority}
            status={card.status}
            deleteHandler={props.delateCard}
          />
        ))}
        </>
    )
}

export default Form;
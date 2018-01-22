// Write JavaScript here and press Ctrl+Enter to execute
const Card = (props) => {
return (
<div style={{margin: '1em'}}>
    <img width="75" src={props.avatar_url} />
    	<div style={{display: 'inline-block',marginLeft: '10'}}>
    	<div style={{fontSize: '1.25em', fontWeight:'bold'}}>
      {props.name}
      </div>
    <div>{props.company}</div>
    </div>
</div>
);
};
let data = [
{name: "grishma",
avatar_url: "https://avatars2.githubusercontent.com/u/34769731?v=4",
company: "Jeavio"},
{name: "Paul",
avatar_url: "https://avatars1.githubusercontent.com/u/184?v=4",
company: "TextUsBiz"}
];
const CardList = (props) => {
return(
<div>
  {props.cards.map(card=><Card {...card}/>)}
</div>
);
}
ReactDOM.render(<CardList cards={data} />,mountNode);



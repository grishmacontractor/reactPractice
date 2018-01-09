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


const CardList = (props) => {
return(
<div>
  {props.cards.map(card=><Card key={card.id} {...card}/>)}
</div>
);
}
//form class
class Form extends React.Component{
state={ userName: ''}
handleSubmit = (event) =>{
 event.preventDefault();
 //console.log('Event: form submit '+this.state.userName);
 axios.get(`https://api.github.com/users/${this.state.userName}`)
 .then(resp =>{
 this.props.onSubmit(resp.data);
 this.setState({userName:''});
 ///console.log(resp.data);
 });
};//handleSubmit
 render()
 {
    return(
    <form onSubmit={this.handleSubmit}>
    <input type="text" onChange={(event) => this.setState({userName:event.target.value})}  placeholder="Github Username" />
    <button type="submit">Add Card</button>
    </form>
    );
 }
}//end Form
//class App
class App extends React.Component{
state={
 /* cards: [
  {name: "grishma",
   avatar_url: "https://avatars2.githubusercontent.com/u/34769731?v=4",
   company: "Jeavio"},
  {name: "Paul",
  avatar_url: "https://avatars1.githubusercontent.com/u/184?v=4",
  company: "TextUsBiz"}
  ]*/
  cards:[]
};

addNewCard = (cardInfo) =>{
  //console.log(cardInfo)
  this.setState(
  prevState =>({
  cards:prevState.cards.concat(cardInfo)
  }));
};//addNewCard
render()
{
return(
<div>
  <Form onSubmit={this.addNewCard}/>
  <CardList cards={this.state.cards}/>
</div>
);
}
}//end App
ReactDOM.render(<App/>,mountNode);



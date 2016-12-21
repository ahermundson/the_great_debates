class DebaterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {affirmative: ''};
    this.state = {negative: ''};
    this.state = {showPlayerDisplay: false};
    this.state = {prop: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNegative = this.handleChangeNegative.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({affirmative: event.target.value});
  }
  handleChangeNegative(event) {
    this.setState({negative: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let affirmative = this.state.affirmative;
    let negative = this.state.negative;
    console.log("Affirmative: ", affirmative);
    console.log("Negative: ", negative);
    this.setState({showPlayerDisplay: true});
    console.log("This.state: ", this.state);
    this.setState({prop: propositions[randomNumber(0, propositions.length - 1)]});
  }

  render() {
    let formDisplay =
    <form onSubmit={this.handleSubmit}>
      <label>
        Affirmative:
        <input type="text" value={this.state.affirmative} onChange={this.handleChange} />
      </label>
      <label>
        Negative:
        <input type="text" value={this.state.negative} onChange={this.handleChangeNegative} />
      </label>
      <input type="submit" value="Submit" />
    </form>;
    let playerDisplay;
    let debateProposition;
    let clock;
    if (this.state.showPlayerDisplay) {
      playerDisplay = <div className="debateContainer">
        <div className="affirmative">{this.state.affirmative}</div>
        <div className="vs">vs.</div> <div className="negative">{this.state.negative}</div>
      </div>;

      debateProposition = <div className="proposition">
      <h3>Proposition: {this.state.prop}</h3>
      </div>;

      clock = <div className="clockContainer">
        <div><ReactCountdownClock seconds={120} color="rgb(255,102,102)" size={200} /></div>
      </div>

      formDisplay = '';
    }
    return (
      <div>
        <h1>The Great Debates</h1>
        {formDisplay}
        {debateProposition}
        {playerDisplay}
        {clock}
      </div>
    );
  }
}

ReactDOM.render(
  <DebaterForm />, document.getElementById('app')
);




let propositions = ["It would be worth it to be killed by Bigfoot.", "June is a better month than July.", "If you can't decide what to eat, just go to Subway", "Trees are cooler than fish.", "The Hamburglar Is One Of The Three Best Things About McDonald's", "The Constitution is dumb.", "The Masters is truly a tradition unlike any other.", "Keanu Reeves is a great actor.", "The stars of Friends could beat the stars of Seinfeld in a fight", "It's better to be a wizard than a knight", "The weatherman has the easiest job on a news team", "Life is a highway is a dumb metaphor", "Freshly cut grass is a top five smell"];

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

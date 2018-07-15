/* State declaration */
type state = {
  history: array(int),
  historyIndex: int,
};

/* Action declaration */
type action =
  | NewForward(int)
  | ReturnForward
  | Backward;

/* Component template declaration.
   Needs to be **after** state and action declarations! */
let component = ReasonReact.reducerComponent("App");

/* Utility functions for our reducer */
let maxIndex = Array.length(Quotes.quotes) - 1;

let safeAdd = x => x === maxIndex ? maxIndex : x + 1;

let safeSubtract = x => x === 0 ? 0 : x - 1;

/* greeting and children are props. `children` isn't used, therefore ignored.
   We ignore it by prepending it with an underscore */
let make = _children => {
  /* spread the other default fields of component here and override a few */
  ...component,
  initialState: () => {history: [|Random.int(maxIndex)|], historyIndex: 0},
  /* State transitions */
  reducer: (action, state) =>
    switch (action) {
    | NewForward(r) =>
      ReasonReact.Update({
        history: Array.append(state.history, [|r|]),
        historyIndex: safeAdd(state.historyIndex),
      })
    | ReturnForward =>
      ReasonReact.Update({
        ...state,
        historyIndex: safeAdd(state.historyIndex),
      })
    | Backward =>
      ReasonReact.Update({
        ...state,
        historyIndex: safeSubtract(state.historyIndex),
      })
    },
  render: self => {
    let historyIndex = self.state.historyIndex;
    let history = self.state.history;
    let backwardClass = historyIndex === 0 ? "backward disabled" : "backward";
    let forwardClass =
      historyIndex === maxIndex ? "forward disabled" : "forward";
    let currentQuote = Quotes.quotes[history[historyIndex]];
    Js.log(history);
    <div className="App">
      <div className="container">
        <span className="quotemark-l">
          (ReasonReact.string({js|“|js}))
        </span>
        <Quote content=currentQuote.quote />
        <Cite
          name=currentQuote.quotee
          platform=currentQuote.platform
          link=currentQuote.link
        />
      </div>
      <nav>
        <span
          className=backwardClass
          onClick=(_event => self.send(Backward))
          onKeyPress=(_event => self.send(Backward))
          role="button"
          tabIndex=0
        />
        <h2> (ReasonReact.string("Nootropic Cat Treats")) </h2>
        <span
          className=forwardClass
          onClick=(
            _event =>
              Array.length(history) - 1 === historyIndex ?
                self.send(
                  NewForward(Utility.randomNoRepeat(maxIndex, history)),
                ) :
                self.send(ReturnForward)
          )
          onKeyPress=(
            _event =>
              Array.length(history) - 1 === historyIndex ?
                self.send(
                  NewForward(Utility.randomNoRepeat(maxIndex, history)),
                ) :
                self.send(ReturnForward)
          )
          role="button"
          tabIndex=0
        />
      </nav>
    </div>;
  },
};

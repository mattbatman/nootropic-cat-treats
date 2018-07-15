let component = ReasonReact.statelessComponent("Quote");

let make = (~content, _children) => {
  ...component,
  render: _self => <blockquote dangerouslySetInnerHTML={"__html": content} />,
};

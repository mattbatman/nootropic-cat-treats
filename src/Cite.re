let component = ReasonReact.statelessComponent("Cite");

let make = (~name, ~platform, ~link, _children) => {
  ...component,
  render: _self =>
    <cite>
      <p> (ReasonReact.string(name)) </p>
      <p> <a href=link> (ReasonReact.string(platform)) </a> </p>
    </cite>,
};

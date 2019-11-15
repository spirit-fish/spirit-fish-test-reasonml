[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  switch (url.path) {
  | [] => <GiphyGif />
  | _ => <div> {React.string("404")} </div>
  };
};
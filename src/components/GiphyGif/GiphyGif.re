type state =
  | Pending
  | Rejected
  | Fulfilled(Giphy.gif);

[@react.component]
let make = () => {
  let (state, setState) = React.useState(() => Pending);

  React.useEffect0(() => {
    Js.Promise.(
      Giphy.getGifs()
      |> then_(gif => {
           setState(_ => Fulfilled(gif));
           Js.Promise.resolve();
         })
      |> catch(_err => {
           setState(_ => Rejected);
           Js.Promise.resolve();
         })
      |> ignore
    );

    None;
  });

  <div className="Gif">
    {switch (state) {
     | Pending => React.string("Loading...")
     | Rejected => React.string("An error occurred!")
     | Fulfilled(gif) =>
       <> <BsReactHelmet defaultTitle={gif.title} /> <img src={gif.url} /> </>
     }}
  </div>;
};
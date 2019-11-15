[@bs.val] external document: Js.t({..}) = "document";

let style = document##createElement("style");
document##head##appendChild(style);
style##innerHTML #= Style.declarations;

let makeContainer = () => {
  let content = document##createElement("div");
  let () = document##body##appendChild(content);
  content;
};

ReactDOMRe.render(<GiphyGif />, makeContainer());
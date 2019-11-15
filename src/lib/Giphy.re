type responseGifImage = {url: string};
type responseGifImages = {original: responseGifImage};
type responseGif = {
  title: string,
  images: responseGifImages,
};
type responseData = {data: list(responseGif)};
type gif = {
  title: string,
  url: string,
};

let deserializeGifImage = json =>
  Json.Decode.{url: json |> field("url", string)};

let deserializeGifImages = json =>
  Json.Decode.{original: json |> field("original", deserializeGifImage)};

let deserializeGif = json =>
  Json.Decode.{
    title: json |> field("title", string),
    images: json |> field("images", deserializeGifImages),
  };

let deserializeApiResponse = (json): responseData =>
  Json.Decode.{
    data: json |> field("data", Json.Decode.list(deserializeGif)),
  };

let getGifs = () =>
  Js.Promise.(
    Fetch.fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=5DYyxYScARZshsn38FrpiLbFGVFLHcrb&limit=1",
    )
    |> then_(Fetch.Response.json)
    |> then_(json => {
         let parsed = json |> deserializeApiResponse;
         switch (parsed.data) {
         | [] => reject(Not_found)
         | [gif, ..._] =>
           {title: gif.title, url: gif.images.original.url} |> resolve
         };
       })
  );
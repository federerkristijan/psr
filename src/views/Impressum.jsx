import React, { useEffect, useState } from "react";
import sanityClient from "../lib/client";

import "../styles/global.css";
// import Back from '../components/Back';


const Impressum = () => {
  const [impressum, setImpressum] = useState(null);

  useEffect(() => {
    sanityClient
    .fetch(
      `*[_type == "document"] | order(_createdAt asc) {
        title,
        text,
        href
      }`
    )
    .then((data) => setImpressum(data))
    .catch(console.error);
  }, [])

  return (
    <div className="impressum">
      {/* <Back /> */}
      <div className="impressum-header">
        <h1>Here comes impressum</h1>
      </div>
      {impressum && impressum.map((item) =>
      <div className="impressum-data" key={item.title}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
          ultrices tincidunt arcu non sodales neque sodales ut etiam. Dolor
          magna eget est lorem ipsum dolor sit amet consectetur. Donec massa
          sapien faucibus et molestie ac feugiat sed. Viverra orci sagittis eu
          volutpat odio. Euismod quis viverra nibh cras. Nibh mauris cursus
          mattis molestie a iaculis at erat. Feugiat pretium nibh ipsum
          consequat nisl vel pretium lectus. Tempor orci dapibus ultrices in
          iaculis nunc. A erat nam at lectus urna duis. Nibh tortor id aliquet
          lectus proin nibh. Tellus cras adipiscing enim eu turpis egestas.
          Morbi tincidunt augue interdum velit euismod in pellentesque. Aliquam
          malesuada bibendum arcu vitae. Lectus arcu bibendum at varius vel
          pharetra vel turpis. Augue eget arcu dictum varius duis at. Rutrum
          tellus pellentesque eu tincidunt tortor aliquam. Enim ut sem viverra
          aliquet eget sit. Turpis nunc eget lorem dolor. Faucibus purus in
          massa tempor nec feugiat. Neque gravida in fermentum et sollicitudin.
          Consectetur a erat nam at lectus urna. Vitae auctor eu augue ut lectus
          arcu bibendum. Leo integer malesuada nunc vel risus commodo viverra.
          Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse.
          Urna et pharetra pharetra massa massa ultricies mi quis. Sed faucibus
          turpis in eu mi bibendum. Lectus urna duis convallis convallis tellus
          id interdum velit. Posuere urna nec tincidunt praesent semper feugiat
          nibh sed. Rhoncus aenean vel elit scelerisque mauris pellentesque. Sed
          viverra ipsum nunc aliquet.
        </p>
      </div>)}
    </div>
  );
};

export default Impressum;

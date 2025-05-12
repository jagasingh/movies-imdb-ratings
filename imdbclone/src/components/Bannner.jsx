import React from "react";

function Bannner() {
  return (
    <div
      className="h-[30vh] md:h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://cosmicbook.news/images1/avengers-endgame-new-logo.jpg)",
      }}
    >
       <div className="absolute bottom-13 w-full bg-blue-900/60 text-white text-2xl text-center py-4 p-4">
        Avengers Endgame
      </div>
    </div>
  );
}

export default Bannner;

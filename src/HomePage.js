import React from "react";

import Card from "./components/Card";
import HeroSec from "./components/HeroSec";
import EndSec from "./components/EndSec";

function HomePage() {
  return (
    <div>
      <HeroSec />
      {/* <Card /> */}
      <EndSec />
    </div>
  );
}

export default HomePage;
